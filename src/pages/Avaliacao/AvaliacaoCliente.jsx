import "./Avaliacao.css";
import api from "../../Server/Api";
import {Nota} from "../Notas/Nota"
import { useEffect, useRef, useState } from "react";



function AvaliacaoCliente(Nota, props) {

  const id = useRef();
  const notas = useRef();

  const Avaliar = (event) => {
    event.preventDefault();    
      api.post("/NotaCliente", {
        id: id.current.value,
        nota: notas.current.value

      })
      .then(() => {
        alert("Agradecemos pelo feedback!")
        window.location.href="/"

      }).catch((err) => console.log(err));
      
  };

 

  return (
    <div className="Avaliacao">
      <div className="bannerAvaliacao container">
        <div className="container containertitulo">
          <h1 className="tituloAvaliacao">
            Questionário de satisfação do cliente
          </h1>
          <p className="parafrafoAvaliacao">
            Este questionário tem como objetivo avaliar a qualidade e promover a
            melhoria dos nossos serviços de acordo com as suas expectativas e
            sugestões. Agradecemos a sua colaboração!
          </p>
        </div>
        <div>
          <div className="listAvaliacao" onSubmit={Avaliar}>
            <div className="list">
              <input
                class="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
               ref={notas}/>
              Excelente
            </div>
            <div className="list">
              <input
                class="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
                ref={notas}/>
              Muito Bom
            </div>
            <div className="list">
              <input
                class="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
                ref={notas} />
              Bom
            </div>
            <div className="list">
              <input
                class="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
                ref={notas}/>
              Regular
            </div>
            <div className="list">
              <input
                class="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
                ref={notas} />
              Ruim
            </div>
            <div className="list">
              <input
                class="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
                ref={notas} />
              Péssimo
            </div>
          </div>

          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-2"
            checked
            autocomplete="off"
            ref={notas}/>
          <label class="btn btn-primary" for="btn-check-2">
            Enviar
          </label>
        </div>
      </div>
    </div>
  );
}

export default AvaliacaoCliente;
