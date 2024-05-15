import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const moviesData = [
  { id: 1, title: 'Inception', time: '148 min', genres: ['Action', 'Sci-Fi', 'Thriller'] },
  { id: 2, title: 'Interstellar', time: '169 min', genres: ['Adventure', 'Drama', 'Sci-Fi'] },
  { id: 3, title: 'The Dark Knight', time: '152 min', genres: ['Action', 'Crime', 'Drama'] },
];

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const foundMovie = moviesData.find(movie => movie.id === parseInt(id, 10));
    setMovie(foundMovie);
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;