import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Beneficios</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-eye-open"></i>
                  <Link href="/service-details">
                    <h3>Casi invisibles</h3>
                  </Link>
                  <p>
                    Al ser casi invisibles y transparentes ofrecen un resultado
                    mucho más estético porque no hay componentes metálicos
                    evidentes en los dientes. Esto facilita que los pacientes
                    los usen durante sus actividades diarias.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-loop"></i>
                  <Link href="/service-details">
                    <h3>Removible</h3>
                  </Link>
                  <p>
                    Otro beneficio clave de los alineadores transparentes es su
                    característica removible, se los quitan durante las comidas
                    y se los vuelven a colocar previa higienización de los
                    dientes, continuando con sus rutinas diarias, incluso
                    sociales.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-bird-wings"></i>
                  <Link href="/service-details">
                    <h3>Cómodos</h3>
                  </Link>
                  <p>
                    Una de las ventajas de los alineadores transparentes sobre
                    los brackets metálicos es que son más cómodos de llevar,
                    haciendo mucho más agradable el proceso de tratamiento en el
                    tiempo
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-bathtub"></i>
                  <Link href="/service-details">
                    <h3>Mejor higiene oral </h3>
                  </Link>
                  <p>
                    Cuando usa brackets tradicionales, cepillarse los dientes o
                    usar hilo dental de manera efectiva es mas complicado. Una
                    de las mayores ventajas de los alineadores transparentes es
                    que las personas pueden cepillarse los dientes y usar hilo
                    dental normalmente sin esfuerzo adicional. Esto puede
                    proteger los dientes de las caries durante el tratamiento y
                    también reducir el riesgo de enfermedad de las encías.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
