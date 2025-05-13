/**
 * EventEmitter - A simple event management system for JavaScript/TypeScript applications
 * Allows subscribing to and publishing events throughout an application
 */

interface EventSubscription<T = unknown> {
  event: string;
  listener: (args: T) => void;
}

type SubscriptionRegistry<T = unknown> = Record<string, EventSubscription<T>>;

type EventEmitterState<T = unknown> = {
  subscriptionCounter: number;
  subscriptions: SubscriptionRegistry<T>;
};

class EventEmitter {
  private static _state: EventEmitterState = {
    subscriptionCounter: 0,
    subscriptions: {},
  };

  /**
   * Subscribe to an event
   * @param eventName The name of the event to listen for
   * @param callback Function to execute when event is triggered
   * @returns Subscription ID for unsubscribing
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static subscribe(eventName: string, callback: (data: any) => void): string {
    const subscriptionId = `sub_${++this._state.subscriptionCounter}`;
    this._state.subscriptions[subscriptionId] = {
      event: eventName,
      listener: callback,
    };

    return subscriptionId;
  }

  /**
   * Unsubscribe using a subscription ID
   * @param subscriptionId The ID returned from subscribe
   * @returns Whether the unsubscribe was successful
   */
  private static unsubscribe(subscriptionId: string): boolean {
    if (!subscriptionId.startsWith('sub_') || !this._state.subscriptions[subscriptionId]) {
      return false;
    }
    return delete this._state.subscriptions[subscriptionId];
  }

  /**
   * Unsubscribe all listeners for a specific event
   * @param eventName The event name to clear
   * @returns Whether all subscriptions were removed
   * @deprecated This method is currently under development and will be available soon.
   * Please avoid using this method.
   */
  static unsubscribeByEvent(eventName: string): boolean {
    let removedCount = 0;
    let totalFound = 0;

    Object.entries(this._state.subscriptions).forEach(([id, subscription]) => {
      if (subscription.event === eventName) {
        totalFound++;
        if (delete this._state.subscriptions[id]) {
          removedCount++;
        }
      }
    });

    return totalFound === 0 || removedCount === totalFound;
  }

  /**
   * Remove all event subscriptions and reset counter
   * @returns Whether the reset was successful
   */
  private static unsubscribeAll(): boolean {
    this._state.subscriptions = {};
    this._state.subscriptionCounter = 0;
    return Object.keys(this._state.subscriptions).length === 0;
  }

  /**
   * Publish an event with optional data
   * @param eventName The name of the event to publish
   * @param data Optional data to pass to subscribers
   * @returns Number of callbacks triggered
   */
  private static publish(eventName: string, data: unknown): number {
    let triggeredCount = 0;

    // Create a snapshot of subscriptions to prevent issues if callbacks modify the subscription list
    const subscriptionEntries = Object.entries(this._state.subscriptions);

    subscriptionEntries.forEach(([_, subscription]) => {
      if (subscription.event === eventName) {
        try {
          subscription.listener(data);
          triggeredCount++;
        } catch (error) {
          console.error(`Error in EventEmitter subscriber for "${eventName}":`, error);
        }
      }
    });

    return triggeredCount;
  }

  /**
   * Get the number of subscriptions (total or for a specific event)
   * @param eventName Optional event name to filter by
   * @returns Number of active subscriptions
   * @deprecated This method is currently under development and will be available soon.
   * Please avoid using this method.
   */
  private static getSubscriptionCount(eventName?: string): number {
    if (!eventName) {
      return Object.keys(this._state.subscriptions).length;
    }
    return Object.values(this._state.subscriptions).filter((sub) => sub.event === eventName).length;
  }

  // Alias methods for backward compatibility and convenience
  static on = this.subscribe;
  static off = this.unsubscribe;
  static emit = this.publish;
  static dispatch = this.publish;
  static clear = this.unsubscribeAll;
  static reset = this.unsubscribeAll;
}

export default EventEmitter;
