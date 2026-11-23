import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext(null);
const storageKey = "star-wars-wiki-favorites";

function readFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(readFavorites);

  function toggleFavorite(item) {
    setFavorites((current) => {
      const exists = current.some((favorite) => favorite.path === item.path);
      const next = exists
        ? current.filter((favorite) => favorite.path !== item.path)
        : [...current, item];
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // Favorites still work for this session when storage is unavailable.
      }
      return next;
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
