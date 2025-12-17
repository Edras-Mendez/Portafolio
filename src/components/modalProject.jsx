import React from "react";

export default function ModalProject({id, img, description, title}){
  return(
    <>
<button type="button" className="btn btn-primary  m-0" data-bs-toggle="modal" data-bs-target={`#${id}`} style={{width: "100%"}}>
  ver Descripcion
</button>

<div class="modal fade" id={id} tabindex="-1" aria-labelledby={`${id}Label`} aria-hidden="true" style={{zIndex:"2300"}}>
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id={`${id}Label`}>{title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img className="img-fluid" src={img} alt="IMG" />
        <p className="p-4 fs-5">{description}</p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
