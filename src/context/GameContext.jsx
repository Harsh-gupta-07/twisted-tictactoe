import React, { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

const ContextWrapper = ({ children }) => {
    
  const [categories, setCategories] = useState(() => {
    const stored = localStorage.getItem("categories");
    return stored ? JSON.parse(stored) : [
      { title: "Animals", emojiList: ["🐶", "🐱", "🐰", "🐐"] },
      { title: "Food", emojiList: ["🍕", "🍔", "🍩", "🍟"] },
      { title: "Sports", emojiList: ["🏈", "⚽️", "🎾", "🏀"] },
      { title: "Tarvel", emojiList: ["✈️", "🚗", "🚢", "🏝️"] },
    ];
  });

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  function addCategory(item) {
    setCategories([...categories,item])
  }

  return (
    <GameContext.Provider value={{ categories, addCategory }}>
      {children}
    </GameContext.Provider>
  );
};

export default ContextWrapper;
