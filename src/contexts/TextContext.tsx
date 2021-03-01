import { useContext, useState } from "react";

export const TextContext = useContext({});

export function TextProvider({ children }) {
  const [fontSize, setFontSize] = useState(15);

  function upFonte() {
    setFontSize(fontSize + 1);
  }

  return (
    <TextContext.Provider value={{
       upFonte
      }}
    >
      { children }
    </TextContext.Provider>
  );

}