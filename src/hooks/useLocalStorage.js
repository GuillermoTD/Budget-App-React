import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const initialState = () => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  };
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
