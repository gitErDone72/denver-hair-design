// from https://medium.com/ngconf/keeping-state-with-a-service-using-signals-bee652158ecf

import { computed, Signal, signal } from "@angular/core";

export class StateSliceBase<T> {
  readonly stateForT = signal({} as T);

  constructor() { }

  /**
   * Returns a reactive value for a property on the state.
   * This is used when the consumer needs the signal for
   * specific part of the state.
   *
   * @param key - the key of the property to be retrieved
   */
    public select<K extends keyof T>(key: K): Signal<T[K]> {
      return computed(() => this.stateForT()[key]);
    }

  /**
   * This is used to set a new value for a single property
   *
   * @param key - the key of the property to be set
   * @param data - the new data to be saved
   */
  public set<K extends keyof T>(key: K, data: T[K]) {
    this.stateForT.update((stateSliceForT) => ({ ...stateSliceForT, [key]: data }));
  }

  /**
   * Used when there is a need to update multiple
   * properties in the store
   *
   * @param partialStateSlice - the partial state that includes
   *                      the new value to be saved
   */
  public setState(partialStateSlice: Partial<T>): void {
    this.stateForT.update((stateSliceForT) => ({ ...stateSliceForT, ...partialStateSlice }));
  }
}
