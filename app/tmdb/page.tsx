import { MovieList } from "./(components)/movie-list";

export default function TmdbPage() {
  return (
    <div className="py-4">
      <h2 className="font-semibold text-lg text-primary mb-2">TMDB List</h2>
      <MovieList />
    </div>
  );
}
