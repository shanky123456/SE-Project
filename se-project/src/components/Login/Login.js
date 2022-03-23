import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useRoutes } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials.email);
    console.log(credentials.password);
    console.log(credentials.role);

    //  const o1={
    //   email:credentials.email,
    //   password:credentials.password,
    //   role:credentials.role
    // }
    
    
    
    // let url = ""; //This will be made abailable from backend people
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: credentials.email,
    //     password: credentials.password,
    //     role: credentials.role,
    //   }),
    // });
    // const json = await response.json();
    // console.log(json);


    
    
    navigate('/Dashboard');







    
    
    
    // if (json.success) {
    //   // Save the auth token and redirect
    //   localStorage.setItem("token", json.authtoken); 
    //    navigate('/Dashboard');
    // } else {
    //   alert("Invalid credentials");
    // }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  document.body.style.backgroundColor = "#e6e6e6";

  return (
    <div >
      <NavBar></NavBar>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "50%",
          margin: "auto",
          backgroundColor: "#d7e9f7",
          padding: " 30px",
          marginTop: "50px",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: "25%",
            paddingRight: "10px",
            borderRadius: "20px",
            backgroundColor: "white",
            marginBottom: "11px",
            paddingLeft: "5px",
            paddingTop: "4px",
            paddingBottom: " 7px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          Login
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="role"
            id="inlineRadio1"
            value="Teacher" //value is everything inside input tag
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Teacher
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="role"
            id="inlineRadio2"
            value="Student"
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Student
          </label>
        </div>

        <div className="d-flex my-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link className="btn btn-primary mx-3" to="/SignUp">
            SignUp
          </Link>
        </div>
      </form>












    </div>
  );
};

export default Login;
