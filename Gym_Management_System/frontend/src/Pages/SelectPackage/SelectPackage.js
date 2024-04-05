import React from "react";
import Header from "../../Component/Header/Header";

function SelectPackage() {
  return (
    <div style={{ 
      backgroundImage: "url('Images/background1.jpg')",
      backgroundSize: "cover",
      minHeight: "100vh", // Ensure the container covers the entire viewport height
      }}>
      <Header />
      <div className="container mt-5">
      <center><h2 style={{ color: "white", marginBottom: "70px" }}>Package Types</h2></center>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-3">
          <div className="card" style={{ backgroundColor: "rgba(211, 211, 211, 0.5)" }}>
            <div className="card-body d-flex flex-column justify-content-between text-white text-center" style={{ height: "500px" }}>
              <h5 className="card-title" style={{fontSize:"25px"}}><b>Promotional Packages</b></h5>
              <p className="card-text" style={{ margin: "20px 0" ,fontSize:"18px"}}>Jumpstart your fitness goals with our special offer: a customized 4-week plan plus full access to all classes and facilities at a promotional rate. Perfect for beginners!</p>
              <button className="btn btn-light text-dark mt-3" style={{ alignSelf: "center", padding: "10px 40px" }}>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card" style={{ backgroundColor: "rgba(211, 211, 211, 0.5)" }}>
            <div className="card-body d-flex flex-column justify-content-between text-white text-center" style={{ height: "500px" }}>
              <h5 className="card-title" style={{fontSize:"25px"}}><b>Standard Packages</b></h5>
              <p className="card-text" style={{ margin: "20px 0", fontSize:"18px" }}>Embrace a holistic fitness journey with unlimited access to gym facilities, group classes, and personalized workouts. Ideal for those committed to regular fitness routines.</p>
              <button className="btn btn-light text-dark mt-3" style={{ alignSelf: "center", padding: "10px 40px" }}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SelectPackage;
