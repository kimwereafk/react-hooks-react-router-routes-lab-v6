import React, { useEffect, useState } from "react";

const directorsData = [
  {
    name: "Christopher Nolan",
    movies: ["Inception", "Interstellar", "The Dark Knight"]
  },
  {
    name: "Steven Spielberg",
    movies: ["Jurassic Park", "E.T.", "Jaws"]
  },
  {
    name: "Quentin Tarantino",
    movies: ["Pulp Fiction", "Kill Bill", "Django Unchained"]
  }
];

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setDirectors(directorsData);
  }, []);

  return (
    <>
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, movieIndex) => (
                <li key={movieIndex}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;