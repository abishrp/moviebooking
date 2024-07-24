import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:8000/user/login', { email, password });
      const { accessToken, refreshToken } = data;

      // Store the access token in localStorage
      localStorage.setItem('accessToken', accessToken);

      // Store the refresh token in an HttpOnly cookie
      document.cookie = `refreshToken=${refreshToken}; HttpOnly; Secure`;

      // Redirect to the MovieUi page
      navigate('/movie');
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="auth-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="auth-input"
        />
        <button type="submit" className="auth-button">Login</button>
        <div className="link-container">
          <Link to="/register" className="auth-link">New user? Register here</Link>
        </div>
        {message && <p className="auth-message">{message}</p>}
      
      </form>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import '../../styles/loginComponentStyle.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:8000/user/login', { email, password });
      
//       // Assuming login is successful and you get a token or user data
//       const { token } = res.data; // Or adjust based on your response
//       localStorage.setItem('authToken', token); // Store token in localStorage or handle as needed
      
//       // Redirect to MovieUi page
//       navigate('/movie'); // Redirect to the MovieUi page
//     } catch (error) {
//       console.error(error);
//       setMessage('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form onSubmit={handleSubmit} className="auth-form">
//         <h2>Login</h2>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           className="auth-input"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="auth-input"
//         />
//         <button type="submit" className="auth-button">Login</button>
        
//       </form>
//     </div>
//   );
// };

// export default Login;



