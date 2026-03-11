import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup successful");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Sign Up</button>

      <p>
        Already have account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}

export default Signup;