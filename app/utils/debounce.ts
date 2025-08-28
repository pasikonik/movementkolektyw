/**
 * Debounce function - delays execution until after delay milliseconds 
 * have elapsed since the last time it was invoked
 * 
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @param immediate - Execute on leading edge instead of trailing
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return function (this: any, ...args: Parameters<T>) {
    const callNow = immediate && !timeoutId;
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) func.apply(this, args);
    }, delay);
    
    if (callNow) {
      func.apply(this, args);
    }
  };
}