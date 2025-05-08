import { AppearanceMode } from '@/types/theme';

interface ISettingState {
  themeMode: AppearanceMode;
}

const initialSettingState: ISettingState = {
  themeMode: 'system',
};

export { initialSettingState };
export type { ISettingState };
