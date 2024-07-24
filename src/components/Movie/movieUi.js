import React from 'react';
import '../../styles/movieUiStyle.css'; // Add any styling if needed

const MovieUi = () => {
  // Sample movie list
  const movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
    { id: 2, title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
    { id: 3, title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    // Add more movies as needed
  ];

  return (
    <div className="movie-ui-container">
      <h1>Movie List</h1>
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie-item">
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieUi;
