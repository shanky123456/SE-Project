import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      
      <nav
        className="navbar navbar-expand-lg navbar-light my-4 mx-4"
        style={{ backgroundColor: "#d7e9f7",borderRadius:"18px"  }}
      >
        <div className="container-fluid" >
        <Link
              type="button"
              class="btn btn-light "
              style={{ borderRadius: "20px", backgroundColor: "white" }}
              to="/"
            >
              Name of Project
            </Link>

          <div
            className="d-flex justify-content-around"
            style={{ width: "300px" }}
          >
            <Link
              type="button"
              class="btn btn-light "
              style={{ borderRadius: "20px", backgroundColor: "white" }}
              to="/Login_Student"
            >
              Student Login
            </Link>
 
            <Link
              type="button"
              class="btn btn-light"
              style={{ borderRadius: "20px", backgroundColor: "white" }}
              to="/SignUp"
            >
              SignUp
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
