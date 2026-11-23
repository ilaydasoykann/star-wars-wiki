import { Heart } from "lucide-react";
import { useFavorites } from "../../context/FavoritesContext";

export default function FavoriteButton({ category, id, title }) {
  const { favorites, toggleFavorite } = useFavorites();
  const path = `/${category}/${id}`;
  const saved = favorites.some((item) => item.path === path);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite({ path, title, category })}
      aria-pressed={saved}
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-medium transition-colors ${
        saved
          ? "border-accent-amber bg-accent-amber/15 text-accent-amber"
          : "border-dark-500 bg-dark-700 text-muted-300 hover:border-accent-amber hover:text-accent-amber"
      }`}
    >
      <Heart size={18} fill={saved ? "currentColor" : "none"} />
      {saved ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}
