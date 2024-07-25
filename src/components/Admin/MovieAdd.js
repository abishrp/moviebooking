import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminMovies = () => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    id: '',
    name: '',
    releaseYear: '',
    description: '',
    genre: '',
    cast: '',
    imageUrl: '',
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('/api/admin/movies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await axios.put(`/api/admin/movies/${form.id}`, form);
      } else {
        await axios.post('/api/admin/movies', form);
      }
      fetchMovies();
      setForm({
        id: '',
        name: '',
        releaseYear: '',
        description: '',
        genre: '',
        cast: '',
        imageUrl: '',
      });
      setEditing(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (movie) => {
    setForm(movie);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/movies/${id}`);
      fetchMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <div>
      <h1>Admin Movie Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="id"
          value={form.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Movie Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="releaseYear"
          placeholder="Release Year"
          value={form.releaseYear}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cast"
          placeholder="Cast (comma-separated)"
          value={form.cast}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          required
        />
        <button type="submit">{editing ? 'Update Movie' : 'Add Movie'}</button>
      </form>

      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.name}</h3>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Description: {movie.description}</p>
            <p>Genre: {movie.genre}</p>
            <p>Cast: {movie.cast.join(', ')}</p>
            <img src={movie.imageUrl} alt={movie.name} width="100" />
            <button onClick={() => handleEdit(movie)}>Edit</button>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMovies;
