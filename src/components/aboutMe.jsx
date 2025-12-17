import React from "react";
import "./css/text-style.css";
import "./css/querys.css";
import Hello from "./imgs/hello.svg";


export default function AboutMe(){
  return (
    <>
      <div className="container border border-button-black mt-5 p-5 pt-2 pb-2" id="aboutMe" style={{width: "70%", borderRadius: "12px"}}>
        <p className="textTitle  h3 fw-bold text-center m-3">Acerca de mi</p>
        <div className="d-flex containerAbout">
          <img src={Hello} alt="about_Me" className="img-fluid aboutImg" style={{width:"300px", marginRight: "10px"}}/>
          <p className="text-justify">Soy un Diseñador Gráfico Junior con una gran pasión por crear identidades visuales claras, modernas y funcionales. Aunque estoy iniciando en el campo, me enfoco en aprender, mejorar y experimentar constantemente.
Me gusta trabajar con branding, diseño publicitario y contenido digital, buscando siempre que cada proyecto comunique una idea con estilo y propósito.
Creo en el diseño simple, fuerte y bien pensado, y mi objetivo es crecer profesionalmente mientras aporto soluciones visuales frescas y efectivas.</p>
        </div>
      </div>
    </>
  );
}
