import React from "react";
import Photoshop from "./imgs/photoshop-cc-logo-svgrepo-com.svg";
import InDesign from "./imgs/indesign-cc-logo-svgrepo-com.svg";
import AdobeIlustrator from "./imgs/adobe-illustrator-cc-logo-svgrepo-com.svg"
import Canva from "./imgs/canva-svgrepo-com.svg"
import JS from "./imgs/js-svgrepo-com.svg"
import Css from "./imgs/css-3-svgrepo-com.svg"
import HTMLimg from "./imgs/html-5-svgrepo-com.svg"
import ReactImg from "./imgs/reactjs-svgrepo-com.svg"
import Figma from "./imgs/figma-svgrepo-com.svg"
import CardSkill from "./cardSkill";

export default function Skills(){
  return(
    <>
      <div className="d-flex flex-column align-items-center justify-content-center container border border-button-black mt-5 p-5 pt-2 pb-2" id="skills" style={{width: "70%",borderRadius: "12px"}}>

        <p className="h3 fw-bold m-3">Habilidades</p>

        <div className="cardContainer d-flex align-items-center justify-content-center" style={{width: "60%", flexWrap:"wrap", justifyContent: "space-between"}}>
        <CardSkill
          img={Photoshop}
          text="Photoshop"
          title={"Photoshop"}
        />
        <CardSkill
          img={InDesign}
          text="InDesign"
          title={"InDesign"}
        />
        <CardSkill
          img={AdobeIlustrator}
          text="Adobe Ilustrator"
          title={"AdobeIlustrator"}
        />
        <CardSkill
          img={Canva}
          text="Canva"
          title={"Canva"}
        />
        <CardSkill
          img={Figma}
          text="Figma"
          title={"Figma"}
        />
        <CardSkill
          img={ReactImg}
          text="React"
          title={"React"}
        />
        <CardSkill
          img={HTMLimg}
          text="HTML"
         title={"HTML"}
        />
        <CardSkill
          img={Css}
          text="CSS"
          title={"CSS"}
        />
        <CardSkill
          img={JS}
          text="JavaScript"
          title={"JavaScript"}
        />
        </div>

      </div>
    </>
  );
}
