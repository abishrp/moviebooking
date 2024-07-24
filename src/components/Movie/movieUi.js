import React from 'react';
import '../../styles/movieUiStyle.css'; // Add any styling if needed

const MovieUi = () => {
  // Sample movie list
  const movies = [
    { id: 1, title: 'Inception', releaseYear: 2010, image: 'https://m.media-amazon.com/images/I/51zdTT0le4L._AC_SY679_.jpg' },
    { id: 2, title: 'The Dark Knight', releaseYear: 2008, image: 'https://m.media-amazon.com/images/I/71gOoqOfdkL._AC_SY679_.jpg' },
    { id: 3, title: 'Interstellar', releaseYear: 2014, image: 'https://m.media-amazon.com/images/I/51wcyZl8HBL._AC_SY679_.jpg' },
    { id: 4, title: 'Avatar', releaseYear: 2009, image: 'https://m.media-amazon.com/images/I/71QT2f0j6YL._AC_SY679_.jpg' },
    { id: 5, title: 'Gladiator', releaseYear: 2000, image: 'https://m.media-amazon.com/images/I/51P4FADzYLL._AC_SY679_.jpg' },
    { id: 6, title: 'Titanic', releaseYear: 1997, image: 'https://m.media-amazon.com/images/I/71fZ5Q8STEL._AC_SY679_.jpg' },
    { id: 7, title: 'The Matrix', releaseYear: 1999, image: 'https://m.media-amazon.com/images/I/51ZlbwgybLL._AC_SY679_.jpg' },
    { id: 8, title: 'Jurassic Park', releaseYear: 1993, image: 'https://m.media-amazon.com/images/I/51ahpGth3zL._AC_SY679_.jpg' },
    { id: 9, title: 'The Godfather', releaseYear: 1972, image: 'https://m.media-amazon.com/images/I/51Il6lESGKL._AC_SY679_.jpg' },
    { id: 10, title: 'Pulp Fiction', releaseYear: 1994, image: 'https://m.media-amazon.com/images/I/91z5A2z6ccL._AC_SY679_.jpg' },
    { id: 11, title: 'Forrest Gump', releaseYear: 1994, image: 'https://m.media-amazon.com/images/I/51FvFSSVXQL._AC_SY679_.jpg' },
    { id: 12, title: 'The Lion King', releaseYear: 1994, image: 'https://m.media-amazon.com/images/I/51myTLJd8YL._AC_SY679_.jpg' },
    { id: 13, title: 'Star Wars', releaseYear: 1977, image: 'https://m.media-amazon.com/images/I/51Pdxw6kO1L._AC_SY679_.jpg' },
    { id: 14, title: 'Back to the Future', releaseYear: 1985, image: 'https://m.media-amazon.com/images/I/51B6R5sO4lL._AC_SY679_.jpg' },
    { id: 15, title: 'The Terminator', releaseYear: 1984, image: 'https://m.media-amazon.com/images/I/51q7oYTxNJL._AC_SY679_.jpg' },
    { id: 16, title: 'Jaws', releaseYear: 1975, image: 'https://m.media-amazon.com/images/I/51ahv5izC3L._AC_SY679_.jpg' },
  ];

  return (
    <div className="movie-ui-container">
      <h1>Movie List</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-release-year">{movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieUi;
