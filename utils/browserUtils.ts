export function saveToLocalStorage(key: string, value: any) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function retrieveFromLocalStorage(key: string) {
  const serializedValue = localStorage.getItem(key);
  if (serializedValue) {
    try {
      const parsedValue = JSON.parse(serializedValue);
      if (typeof parsedValue === "object" && parsedValue !== null) {
        return parsedValue;
      }
    } catch (error) {
      return null;
    }
  }
  return null; // or any default value you prefer
}
