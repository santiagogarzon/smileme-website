import React from "react";

const AboutContent = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about0.jpeg" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>Nuestra historia</h2>
                <p>
                  <b>SmileMe Aligners</b> es una empresa dedicada a brindar
                  servicios para la confección de modelos y alineadores
                  terminados. Tenemos el respaldo de mas de 18 años en el
                  mercado de la ortodoncia tradicional en Argentina, con una
                  Marca muy tradicional en el mundo que tiene mas de 110 años de
                  existencia y un reconocimiento a nivel mundial como pocas.{" "}
                </p>
                <p>
                  El mercado de los Alineadores ha crecido en el mundo de manera
                  exponencial como alternativa a la ortodoncia tradicional, para
                  muchos casos que pueden ser tratados de esta forma, y la gente
                  quiere cada vez mas ortodoncias estéticas y casi invisibles.
                </p>
                <p>
                  Los alineadores les permitan desarrollar su vida de forma
                  normal, mantener su vida social sin mostrar sus aparatos fijos
                  y poder alimentarse sin todos los cuidados que necesita la
                  ortodoncia tradicional, mas allá de una buena higiene que con
                  los alineadores se puede realizar de una mejor manera.
                </p>
                <p>
                  Esta experiencia de trabajar con estos materiales
                  tradicionales, nos llevo a atender un mercado que sigue
                  solicitando ortodoncia con alineadores y a armar un
                  laboratorio ubicado en la ciudad de Buenos Aires para atender
                  las solicitudes de todo el País.
                </p>
                <p>
                  Contamos con equipo capacitado para manejar tecnología de
                  punta en impresión y confección de alineadores con su
                  terminación listos para usar, según la planificación recibida
                  por ortodoncistas que conocen nuestra forma de trabajar a lo
                  largo de todos estos años y tendrá la seguridad de dar a sus
                  pacientes un producto con los mas altos patrones de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
