import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/movieUiStyle.css'; // Add any styling if needed

const MovieUi = () => {
  const navigate = useNavigate();

  // Sample movie list
  const movies = [
    { id: 1, title: 'Inception', releaseYear: 2010, image: 'https://posterspy.com/wp-content/uploads/2020/11/92756ED7-ABFF-4D1C-A627-05C517B343C8-1500x2250.jpeg' },
    { id: 2, title: 'The Dark Knight', releaseYear: 2008, image: 'https://cdn.shopify.com/s/files/1/1416/8662/products/dark_knight_english_original_film_art_spo_2000x.jpg?v=1543419185' },
    { id: 3, title: 'Interstellar', releaseYear: 2014, image: 'https://i.pinimg.com/originals/0d/d8/34/0dd834fc765091af36a125ea9bcf8cc8.jpg' },
    { id: 4, title: 'Avatar', releaseYear: 2009, image: 'https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989' },
    { id: 5, title: 'Gladiator', releaseYear: 2000, image: 'https://image.tmdb.org/t/p/original/rotQFyaeNQivUJOm3J3M7YqPNMx.jpg' },
    { id: 6, title: 'Titanic', releaseYear: 1997, image: 'https://image.tmdb.org/t/p/original/tr5y5H4qOlqCGbZKaT9Q97cscVj.jpg' },
    { id: 7, title: 'The Matrix', releaseYear: 1999, image: 'https://picfiles.alphacoders.com/385/385304.jpg' },
    { id: 8, title: 'The Godfather', releaseYear: 1972, image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg' },
    { id: 9, title: 'The Lion King', releaseYear: 1994, image: 'https://th.bing.com/th/id/OIP.egzFxoFHd70YxYHld6tZlgHaLH?rs=1&pid=ImgDetMain' },
    { id: 10, title: 'Star Wars', releaseYear: 1977, image: 'https://www.themoviedb.org/t/p/original/nfqXutLdBBo1G36Mt5iHSJFjmLT.jpg' },
  ];

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie-ui-container">
      <h1>Movie List</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card" onClick={() => handleCardClick(movie.id)}>
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
