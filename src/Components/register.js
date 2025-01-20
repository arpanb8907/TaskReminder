import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate()
  const [isLoading,setloading] = useState(false)

  const handleRegister = async (e) => {
    
    e.preventDefault()

    const userdata = {fname,lname,email,password}
    setloading(true)
    const endpoint = '/user/register'

    try {
      const response = await axios.post(`http://localhost:5000${endpoint}`,userdata,{

        headers: {
          'Content-Type': 'application/json', // indicates JSON data is being sent
        },
        
      });

      
      

      if(response.status === 201){

        alert('User registered')
        navigate('/login')
      }

      else{
        alert(response.message)
      }


    } catch (error) {
      console.log(error)
    }
    finally{
      setloading(false)
    }

  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleRegister}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          <p className="forgot-password text-right">
            Already registered <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;