import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../../styles/movieDetailsComponent.css";

const movies = [
  { id: 1, title: 'Inception', releaseYear: 2010, image: 'https://posterspy.com/wp-content/uploads/2020/11/92756ED7-ABFF-4D1C-A627-05C517B343C8-1500x2250.jpeg', description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', ticketPrice: '$12.00', showTimings: ['2:00 PM', '5:00 PM', '8:00 PM'] },
  { id: 2, title: 'The Dark Knight', releaseYear: 2008, image: 'https://cdn.shopify.com/s/files/1/1416/8662/products/dark_knight_english_original_film_art_spo_2000x.jpg?v=1543419185', description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', ticketPrice: '$10.00', showTimings: ['1:00 PM', '4:00 PM', '7:00 PM'] },
  { id: 3, title: 'Interstellar', releaseYear: 2014, image: 'https://i.pinimg.com/originals/0d/d8/34/0dd834fc765091af36a125ea9bcf8cc8.jpg', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', ticketPrice: '$15.00', showTimings: ['3:00 PM', '6:00 PM', '9:00 PM'] },
  { id: 4, title: 'Avatar', releaseYear: 2009, image: 'https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989', description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', ticketPrice: '$13.00', showTimings: ['12:00 PM', '3:00 PM', '6:00 PM'] },
  { id: 5, title: 'Gladiator', releaseYear: 2000, image: 'https://image.tmdb.org/t/p/original/rotQFyaeNQivUJOm3J3M7YqPNMx.jpg', description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', ticketPrice: '$11.00', showTimings: ['2:30 PM', '5:30 PM', '8:30 PM'] },
  { id: 6, title: 'Titanic', releaseYear: 1997, image: 'https://image.tmdb.org/t/p/original/tr5y5H4qOlqCGbZKaT9Q97cscVj.jpg', description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', ticketPrice: '$14.00', showTimings: ['1:30 PM', '4:30 PM', '7:30 PM'] },
  { id: 7, title: 'The Matrix', releaseYear: 1999, image: 'https://picfiles.alphacoders.com/385/385304.jpg', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', ticketPrice: '$12.00', showTimings: ['2:00 PM', '5:00 PM', '8:00 PM'] },
  { id: 8, title: 'The Godfather', releaseYear: 1972, image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', ticketPrice: '$20.00', showTimings: ['4:00 PM', '7:00 PM'] },
  { id: 9, title: 'The Lion King', releaseYear: 1994, image: 'https://th.bing.com/th/id/OIP.egzFxoFHd70YxYHld6tZlgHaLH?rs=1&pid=ImgDetMain', description: 'Lion cub Simba flees his kingdom after the death of his father, but returns as an adult to reclaim his throne from the sinister Scar.', ticketPrice: '$9.00', showTimings: ['11:00 AM', '2:00 PM', '5:00 PM'] },
  { id: 10, title: 'Star Wars', releaseYear: 1977, image: 'https://www.themoviedb.org/t/p/original/nfqXutLdBBo1G36Mt5iHSJFjmLT.jpg', description: 'Luke Skywalker joins forces with a Jedi Knight, a princess, and a smuggler to rescue the galaxy from the Empire\'s planet-destroying battle station while also learning the truth about his father.', ticketPrice: '$18.00', showTimings: ['3:00 PM', '6:00 PM', '9:00 PM'] },
];

const initialAvailability = {
  "Theater A": { "2:00 PM": 50, "5:00 PM": 50, "8:00 PM": 50 },
  "Theater B": { "2:00 PM": 50, "5:00 PM": 50, "8:00 PM": 50 },
};

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  const [theater, setTheater] = useState('');
  const [seats, setSeats] = useState(1);
  const [showTiming, setShowTiming] = useState('');
  const [availability, setAvailability] = useState(initialAvailability);

  const handleAddTickets = () => {
    if (availability[theater][showTiming] < seats) {
      alert("Not enough seats available");
      return;
    }

    const newAvailability = {
      ...availability,
      [theater]: {
        ...availability[theater],
        [showTiming]: availability[theater][showTiming] - seats,
      },
    };

    setAvailability(newAvailability);

    const bookingDetails = {
      movie: movie.title,
      theater,
      seats,
      showTiming,
      ticketPrice: movie.ticketPrice,
    };
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    localStorage.setItem('availability', JSON.stringify(newAvailability));
    navigate('/cart');
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <p className="release-year">Release Year: {movie.releaseYear}</p>
      <p className="description">{movie.description}</p>
      <p className="ticket-price">Ticket Price: {movie.ticketPrice}</p>
      <p className="show-timings">Available Show Timings: {movie.showTimings.join(', ')}</p>
      <div className="selection">
        <label>
          Select Theater:
          <select value={theater} onChange={(e) => setTheater(e.target.value)}>
            <option value="">Select</option>
            <option value="Theater A">Theater A</option>
            <option value="Theater B">Theater B</option>
          </select>
        </label>
        <label>
          Number of Seats:
          <input
            type="number"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            min="1"
            max="50"
          />
        </label>
        <label>
          Show Timing:
          <select value={showTiming} onChange={(e) => setShowTiming(e.target.value)}>
            <option value="">Select</option>
            {movie.showTimings.map((timing) => (
              <option key={timing} value={timing}>
                {timing}
              </option>
            ))}
          </select>
        </label>
      </div>
      {theater && showTiming && (
        <p className="remaining-tickets">
          Remaining Tickets: {availability[theater][showTiming]}
        </p>
      )}
      <button className="add-tickets-button" onClick={handleAddTickets}>
        Add Tickets
      </button>
      <button className="go-back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default MovieDetails;
