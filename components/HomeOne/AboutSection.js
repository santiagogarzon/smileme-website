import React from "react";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about1.png" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>¿Que es un alineador?</h2>
                <p>
                  Un alineador para ortodoncia es un dispositivo utilizado en
                  tratamientos de ortodoncia para corregir la posición de los
                  dientes, mediante un material específico con propiedades
                  estudiadas. Está diseñado específicamente para cada paciente a
                  partir del escaneado de su boca antes de comenzar con la
                  planificación. El objetivo principal del alineador es aplicar
                  una presión suave y constante sobre los dientes, moviéndolos
                  gradualmente hacia la posición deseada.{" "}
                </p>

                <ul>
                  <li>
                    <i className="icofont-check-circled"></i>
                    COMODO
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    INVISIBLE
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    EFECTIVO
                  </li>
                </ul>

                <Link href="/about">Saber más</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
