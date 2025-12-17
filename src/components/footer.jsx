import React from "react";

export default function Footer(){
  return(
    <div className="bg-black w-100 d-flex flex-column justify-content-between align-items-center" style={{height: "200px"}}>
      <div className="container mt-4">
        <ul className="text-light list-unstyled">
          <li>
            <a href="#home" className="text-decoration-none text-light">Home</a>
          </li>
          <li>
            <a href="#aboutMe" className="text-decoration-none text-light">About-me</a>
          </li>
          <li>
            <a href="#skills" className="text-decoration-none text-light">Skills</a>
          </li>
          <li>
            <a href="#projects" className="text-decoration-none text-light">Projects</a>
          </li>
        </ul>
      </div>
      <div className="bg-secondary w-100 text-center" style={{height:"25px"}}>
         <p>&copy; All rights reserved</p>
      </div>
    </div>
  );
}
