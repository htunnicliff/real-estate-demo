import { useEffect, useState } from "react";
import { cache } from "swr/dist/utils/config";

/**
 * A regular useState hook with the powers of localStorage caching
 */
export function useLocalStorage<Value>(key: string, initialValue: Value) {
  // Initialize a normal useState hook
  const [state, setState] = useState<Value>(initialValue);

  // On mount, set the state to the local storage value
  useEffect(() => {
    const cachedValue = localStorage.getItem(key);
    if (cachedValue) {
      setState(JSON.parse(cachedValue));
    }
  }, []);

  // Update the value in local storage when state changes
  useEffect(() => {
    if (!state) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState] as const;
}
