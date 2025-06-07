export const setInLocalStorage = (key: string, value: unknown) => {
  const parsedValue: string = JSON.stringify(value);
  localStorage.setItem(key, parsedValue);
};

export const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};
