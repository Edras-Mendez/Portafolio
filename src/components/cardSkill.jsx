import react from "react";
import "./css/querys.css";

export default function CardSkill({img, text,title}){
  return(
    <div className="card tarjetaSkill border border-0 m-2" style={{width: "5rem"}}>
      <img src={img} title={title} alt="img" className="img-fluid" />
      <p className="text-center fw-bold" style={{fontSize:"15px"}}>{text}</p>
    </div>
  );
}
