import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar';

function SignUp() {
  document.body.style.backgroundColor = "#e6e6e6";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
    register_date: new Date(),
  });

  const [confirmation, setConfirmation] = useState({
    msg1: "",
    msg2: "",
  });

  let history = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents page from refreshing

    if (credentials.confirm_password != credentials.password) {
      setConfirmation({ msg2: "Passwords do not match" });
    } else {
      setConfirmation({ msg1: "Passwords are matching" });

      console.log(credentials.name);
      console.log(credentials.email);
      console.log(credentials.password);
      console.log(credentials.confirm_password);
      console.log(credentials.role);
      console.log(credentials.register_date);





    //   let url = ""; //This will be made available from backend people
    //   const { name, email, password, role, register_date } = credentials;
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       password,
    //       role,
    //       register_date,
    //     }),
    //   });
    //   const json = await response.json();
    //   console.log(json);




      history("/Login_Student");




    //   if (json.success) {
    //     // Save the auth token and redirect
    //     localStorage.setItem("token", json.authtoken);
    //     history.push("/");
    //   } else {
    //     alert("Invalid credentials");
    //   }
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "50%",
          margin: "auto",
          backgroundColor: "#d7e9f7",
          padding: " 30px",
          marginTop: "10px",
          borderRadius: "20px",
          marginBottom: "40px",
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
            textAlign: "center",
            margin: "auto",
          }}
        >
          SignUp
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            value={credentials.name}
            onChange={onChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
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
            required
            name="password"
            minLength={5}
            id="password"
          />
          <div id="passwordHelp" className="form-text">
            We'll never share your password with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            required
            minLength={5}
            name="confirm_password" // name is like name of input tag
            value={credentials.confirm_password} //value is everything inside input tag
            onChange={onChange}
            id="password2"
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
        <strong>
          <div style={{color:"green"}}>{confirmation.msg1}</div>
          <div style={{color:"red"}}>{confirmation.msg2}</div>
        </strong>
        <button
          type="submit"
          className="btn btn-primary my-2"
          style={{ display: "block" }}
        >
          Submit
        </button>
        {/* <Link  className="btn btn-primary mx-3" to='/SignUp'>
          SignUp
        </Link> */}
      </form>
    </div>
  );
}

export default SignUp;
