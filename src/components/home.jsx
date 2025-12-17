import React from "react";
import "./css/styleBackground.css";
import Avatar from "./imgs/avatar.png";

export default function Home(){
  return(
    <>
    <div className="bg-home d-flex align-items-center justify-content-center" id="home" style={{width:"100%", height:"100vh"}}>
        <div className="d-flex flex-wrap justify-content-center align-items-center col-12 col-md-6 col-lg-4">

          <div className="m-0 p-0" style={{width:"200px"}}>
            <img src={Avatar} alt="avatar" title="Edras-Mendez" className="img-fluid" style={{borderRadius:"20%"}}/>
          </div>
          <div className="text-center text-light w-100 mt-3">
            <p className="h3 p-2">Hola!, Mi nombre es<br/> Edras Mendez</p>
            <p className="h3 p-2">Soy Diseñador Grafico</p>
          </div>

        </div>
      </div>
    </>
  );
}
