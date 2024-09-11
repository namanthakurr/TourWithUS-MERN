import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/login`, formData);
      console.log('Login response:', res.data);
  
      if (res.data.status === "success" && res.data.token && res.data.userId) {
        alert("Login Successful!!");
        localStorage.setItem("token", res.data.token); // Store the token in localStorage
        sessionStorage.setItem("userId", res.data.userId); // Store the userId in sessionStorage
        navigate("/"); // Navigate to the home page
        window.location.reload(); // Reload the page to update the navbar
      } else {
        setError("Please check your email and password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login. Please try again.");
    }
  };
  

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-grid">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="signup-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
