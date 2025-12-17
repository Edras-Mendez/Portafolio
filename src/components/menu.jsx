import React from "react";
import Contact from "./contact";
import ImgContact from "./imgs/contact.svg";

export default function Menu(){
  return (
    <>
      <nav className="bg-black navbar navbar-expand-lg" style={{width: "100%", position:"fixed", zIndex:"2000"}}>
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Edras Mendez</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
          <a className="nav-link text-light" href="#aboutMe">About-Me</a>
          </li>
          <li className="nav-item">
          <a className="nav-link text-light" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
          <a className="nav-link text-light" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
          <Contact
            id="Contact"
            img={ImgContact}
          />
          </li>
          </ul>
        </div>
      </div>
      </nav>
    </>
  );
}
