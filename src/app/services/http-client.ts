/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios';

// --- Configuration ---
const API_BASE_URL = 'https://api.your-app.com/v1';
const DEFAULT_TIMEOUT = 30000; // e.g., 30 seconds
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  // Add other default headers like 'Authorization' here if needed
  // 'Authorization': `Bearer ${yourAuthToken}`
};

// loggingInterceptor
const loggingInterceptor = {
  request: (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (__DEV__) {
      console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`, config);
    }
    console.log(__DEV__);

    return config;
  },

  response: (response: AxiosResponse): AxiosResponse => {
    if (__DEV__) {
      console.log(`[Response] ${response.status} ${response.config.url}`, response);
    }
    return response;
  },

  error: (error: AxiosError): Promise<never> => {
    if (error.response) {
      const status = error.response.status as HttpStatusCode;
      if (__DEV__) {
        console.error(`[Error] ${status}`, error.response.data);
      }
      return Promise.reject(error);
    }

    if (__DEV__) {
      console.error('[Network Error]', error);
    }
    return Promise.reject(error);
  },
};

// --- HttpClient Class (Singleton Pattern) ---
class HttpClient {
  private static instance: HttpClient;
  private client: AxiosInstance;

  /**
   * Returns the singleton instance of the HttpClient.
   */
  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  private constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: DEFAULT_TIMEOUT,
      headers: DEFAULT_HEADERS,
    });

    // Add request and response interceptors
    this.client.interceptors.request.use(
      loggingInterceptor.request,
      loggingInterceptor.error // Use the error handler for request errors too
    );
    this.client.interceptors.response.use(loggingInterceptor.response, loggingInterceptor.error);
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, config);
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, config);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    // Note: axios.delete can technically accept data as a second argument,
    // but config is more common. Matching your original signature.
    return this.client.delete<T>(url, config);
  }
}

// --- Export the configured instance ---
// This creates and exports the single instance of our HttpClient
const httpClient = HttpClient.getInstance();

export default httpClient;
