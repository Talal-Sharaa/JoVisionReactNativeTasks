import React, { createContext, useState } from 'react';

// Create a context
const TextContext = createContext();

// Create a provider component
export const TextProvider = ({ children }) => {
  const [text, setText] = useState('');

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};
export default TextContext;
