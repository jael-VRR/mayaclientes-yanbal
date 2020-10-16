import whatsapp from '../images/whatsapp.png';
import llamada from '../images/llamada.png';
import React, { useState, useEffect } from 'react';



function Dashboard() {



  return (
    <>
      <div className="nav">
        <button className="btn-nav" >
          <a>Clientes</a>
        </button>
        <button className="btn-nav">
          <a>Cobranzas</a>
        </button>
        <button className="btn-nav">
          <a>Oportunidades</a>
        </button>
        <div>
        </div>
      </div>
      <div class="container">
        <hr />
        <p>No dejes pasar esta oportunidad!Enviale un mensaje a <strong> Natalia Gordillo </strong></p>
        <hr />
        <div class="card-deck">
          <div class="card bg-ligth">
            <div class="card-body text-center">
              <img className="img" src='https://user-images.githubusercontent.com/60890508/96071205-3f383280-0e67-11eb-844e-e1f5d65e11b2.jpg' alt="imagen" />
              <p>LIMPIADOR DETOX 3 EN 1</p>
              <div>
                <a className=" icon-social" href="https://wa.me/51992781141/?text=%C2%A1Hola%0A%0Ahola%0A%0A" ><img src={whatsapp} /></a>
                <a href="tel:910469991" className="icon-social1"><img src={llamada} /></a>
              </div>
            </div>
          </div>
          <div class="card bg-ligth">
            <div class="card-body text-center">
              <img className="img" src='https://user-images.githubusercontent.com/60890508/96071117-16b03880-0e67-11eb-80b8-7a7d03dd555e.jpg' alt="imagen" />
        BB CREAM SPF 25
      </div>
            <div>
              <a className=" icon-social" href="https://wa.me/51992781141/?text=%C2%A1Hola%0A%0Ahola%0A%0A" ><img src={whatsapp} /></a>
              <a href="tel:910469991" className="icon-social1"><img src={llamada} /></a>
            </div>
          </div>
          <div class="card bg-ligth">
            <div class="card-body text-center">
              <img className="img" src='https://user-images.githubusercontent.com/60890508/96071249-50813f00-0e67-11eb-93d6-87ca0af5350b.jpg' alt="imagen" />
              <p>SENTIVA ENERGÍA VITAL GEL </p>
              <div>
                <a className=" icon-social" href="https://wa.me/51992781141/?text=%C2%A1Hola%0A%0Ahola%0A%0A" ><img src={whatsapp} /></a>
                <a href="tel:910469991" className="icon-social1"><img src={llamada} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;