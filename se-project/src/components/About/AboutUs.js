import "./App.css";
import NavBar from "./NavBar";
import About from "./About";
import Credits from "./Credits";


function AboutUs() {
  document.body.style.backgroundColor = "#e6e6e6";

  
  return (

    


    <div className="example" >
      <NavBar></NavBar>
      <About></About>                                                       
      <Credits></Credits>
    </div>
  );
}

export default AboutUs;
