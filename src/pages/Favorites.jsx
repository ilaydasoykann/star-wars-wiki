import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-accent-amber mb-2">My Favorites</h1>
      <p className="text-muted-400 mb-8">Your saved films, characters, planets, and starships.</p>
      {favorites.length === 0 ? (
        <div className="rounded-xl bg-dark-800 border border-dark-600 p-10 text-center">
          <Heart className="w-12 h-12 text-accent-amber mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-muted-400 mb-5">Open an item and select Add to Favorites.</p>
          <Link to="/characters" className="text-accent-amber hover:underline">Explore Characters</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {favorites.map((item) => (
            <article key={item.path} className="rounded-xl bg-dark-800 border border-dark-600 p-6 hover:border-accent-amber/60 transition-colors">
              <p className="text-sm capitalize text-accent-amber mb-2">{item.category}</p>
              <h2 className="font-bold text-xl text-muted-200 mb-5">{item.title}</h2>
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <Link to={item.path} className="inline-flex gap-1 items-center text-accent-amber hover:underline">View details <ArrowRight size={16} /></Link>
                <button onClick={() => toggleFavorite(item)} className="text-sm text-muted-400 hover:text-muted-200">Remove</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
