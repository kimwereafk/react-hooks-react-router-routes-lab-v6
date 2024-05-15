import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const moviesData = [
  { id: 1, title: 'Inception' },
  { id: 2, title: 'Interstellar' },
  { id: 3, title: 'The Dark Knight' },
];

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setMovies(moviesData);
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map(movie => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;