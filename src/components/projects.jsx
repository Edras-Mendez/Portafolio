import React from "react";
import ProjectCard from "./projectCard";
import ModalProject from "./modalProject";
import Web from "./imgs/projects/mockup_web.png";
import Branding from "./imgs/projects/1/BRANDING_LATIN_BREW_page-0001 - copia.jpg"
import AllBranding from "./imgs/projects/1/All.png";
import Social from "./imgs/projects/3/social.png"
import AllSocial from "./imgs/projects/3/allSocial.png"
import Surf from "./imgs/projects/2/proyectoFinal.png"
import AllSurf from "./imgs/projects/2/allSurf.png"
import Sakura from "./imgs/projects/SakuraSkin_final.png"
import Cartel from "./imgs/projects/CartelFestivalDeCanes.png"
import AllCarteles from "./imgs/projects/allCarteles.png"


export default function Projects(){
  return(
    <>
      <div className="container d-flex flex-wrap justify-content-center align-items-center mt-5 p-3 pt-2 pb-2" id="projects" style={{width: "70%", borderRadius:"12px"}}>
        <p className="h3 fw-bold mt-2">Projects</p>

        <div className="m-2 d-flex justify-content-center align-items-center" style={{width: "100%", flexWrap: "wrap"}}>

        <div className="d-flex flex-column align-items-center justify-content-cente m-4" style={{width: "15rem"}}>
          <ProjectCard
            img={Web}
            title={"Landing Page"}
            text="Landing Page"
          />
          <ModalProject
            id="modalWeb"
            img={Web}
            description="Landing page desarrollada con ReactJS, diseñada completamente desde cero. Este proyecto combina una interfaz limpia con una estética moderna orientada a una pastelería, priorizando la experiencia del usuario, el diseño visual y la navegación fluida. Todo el layout, colores, tipografías y elementos gráficos fueron creados de forma personalizada."
            title={"Landing Page"}
          />
        </div>

        <div className="d-flex flex-column align-items-center justify-content-cente m-4" style={{width: "15rem"}}>
          <ProjectCard
            img={Branding}
            title={"Branding"}
            text="Branding Coffee"
          />
          <ModalProject
            id="modalBranding"
            img={AllBranding}
            description="Latin Brew es una identidad visual creada para una cafetería de estilo latino. El branding combina colores cálidos, tipografías con carácter y un logo diseñado a partir de trazos geométricos que transmiten tradición y sabor. Incluye manual de marca, reglas de uso, paleta cromática y aplicaciones en mockups para mostrar la marca en contexto real."
            title={"Branding Coffee"}
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-cente m-4" style={{width: "15rem"}}>
          <ProjectCard
            img={Social}
            title={"Social-Media-Pack"}
            text="Social Media Pack"
          />
          <ModalProject
            id="modalSocial"
            img={AllSocial}
            description="Un conjunto de piezas visuales diseñadas para fortalecer la presencia digital de MagicBox. Incluye posts, historias y reels con un estilo pastel, tierno y coherente con la identidad de marca. Todo optimizado para redes sociales y presentado con mockups profesionales."
            title={"Social Media Pack"}
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-cente m-4" style={{width: "15rem"}}>
          <ProjectCard
            img={Surf}
            title={"Revista de Surf"}
            text="Revista de Surf"
          />
          <ModalProject
            id="modalSurf"
            img={AllSurf}
            description="Diseño editorial inspirado en la energía del océano y la cultura del surf. Este proyecto presenta una composición visual dinámica, tipografías limpias y un estilo moderno que resalta la fuerza, libertad y movimiento del deporte. La revista fue maquetada pensando en una lectura fluida y atractiva, combinando imágenes poderosas con un diseño equilibrado. Un ejercicio creativo que demuestra manejo de composición, jerarquía y estilo editorial."
            title={"Revista de Surf"}
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-cente m-4" style={{width: "15rem"}}>
          <ProjectCard
            img={Sakura}
            title={"Diseño de Empaque"}
            text="Diseño de Empaque"
          />
          <ModalProject
            id="modalSakura"
            img={Sakura}
            description="Sakura Skin es un concepto de crema facial con un estilo glam y femenino. Para este proyecto desarrollé el diseño completo del empaque, incluyendo la ilustración principal, paleta de colores, composición visual y aplicación en mockups. El resultado refleja una estética elegante y moderna, enfocada en el cuidado personal y el lujo accesible."
            title={"Diseño de Empaque"}
          />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-cente m-4" style={{width: "15rem"}}>
          <ProjectCard
            img={Cartel}
            title={"Carteles Publicitarios"}
            text="Carteles Publicitarios"
          />
          <ModalProject
            id="modalCartel"
            img={AllCarteles}
            description="Serie de carteles promocionales diseñados para festivales culturales y artísticos. El proyecto se enfoca en tipografías llamativas, composiciones dinámicas y una estética visual vibrante que capta la atención del público en espacios urbanos. Incluye diseños adaptados para impresión y uso digital."
            title={"Carteles Publicitarios"}
          />
        </div>
        </div>
      </div>
    </>
  );
}
