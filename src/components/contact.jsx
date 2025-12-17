import React from "react";

export default function Contact({id, img}){
  return(
    <>
<button type="button" className="btn btn-primary  m-0" data-bs-toggle="modal" data-bs-target={`#${id}`} style={{width: "100%"}}>
   Contact
</button>

<div class="modal fade" id={id} tabindex="-1" aria-labelledby={`${id}Label`} aria-hidden="true" style={{zIndex:"2300"}}>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id={`${id}Label`}>Contact</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex flex-column align-items-center justify-content-center">
        <img className="img-fluid" src={img} alt="IMG" style={{width:"170px"}}/>
        <div className="p-4">
          <p className="p-4 pb-2 fs-5">📬 E-mail: edrasmendez2002@gmail.com</p>
          <p className="p-4 pt-2 fs-5">🟢 Whatsapp: 0000-0000</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
