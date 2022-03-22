import "./Avaliacao.css";


function AvaliacaoEntregadora() {
 

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
          <div className="listAvaliacao">
            <div className="list">
              <input
                class="form-check-input"
                type="radio"
                name="radioNoLabel"
                id="radioNoLabel1"
                value=""
                aria-label="..."
              />
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
              />
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
              />
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
              />
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
              />
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
              />
              Péssimo
            </div>
          </div>

          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-2"
            checked
            autocomplete="off"
          />
          <label class="btn btn-primary" for="btn-check-2">
            Enviar
          </label>
        </div>
      </div>
    </div>
  );
}

export default AvaliacaoEntregadora;
