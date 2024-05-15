import React, { useEffect, useState } from "react";

const actorsData = [
  {
    name: "Leonardo DiCaprio",
    movies: ["Inception", "Titanic", "The Revenant"]
  },
  {
    name: "Morgan Freeman",
    movies: ["Shawshank Redemption", "Se7en", "Driving Miss Daisy"]
  },
  {
    name: "Robert De Niro",
    movies: ["Goodfellas", "Taxi Driver", "Raging Bull"]
  }
];

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setActors(actorsData);
  }, []);

  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, movieIndex) => (
                <li key={movieIndex}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;