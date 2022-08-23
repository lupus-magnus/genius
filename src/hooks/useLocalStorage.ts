import { useEffect, useState } from "react";

type useLocalStorageType = (
  key: string,
  initialValue?: string
) => [string, React.Dispatch<React.SetStateAction<string>>];

export const useLocalStorage: useLocalStorageType = (key, initialValue) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) ?? initialValue ?? ""
  );

  useEffect(() => {
    if (!!value) {
      localStorage.setItem(key, value);
    }
  }, [value, key]);

  return [value, setValue];
};
