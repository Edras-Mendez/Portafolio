import React from "react";
import "./css/imgStyleCard.css";

export default function ProjectCard({img, title, text}){
  return(
    <div className="card  m-1" style={{width: "15rem"}}>
      <div className="img-container">
        <img src={img} title={title} alt="img" className="img-fluid project-img" />
      </div>
      <p className="text-center fw-bold" style={{fontSize:"15px"}}>{text}</p>
    </div>
  );
}
