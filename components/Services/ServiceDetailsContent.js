import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="services-details-img">
            <img src="/images/banner-servicio.png" alt="Service Details" />

            <h2>¿Que es un alineador?</h2>
            <p>
              Un alineador para ortodoncia es un dispositivo utilizado en
              tratamientos de ortodoncia para corregir la posición de los
              dientes, mediante un material específico con propiedades
              estudiadas. Está diseñado específicamente para cada paciente a
              partir del escaneado de su boca antes de comenzar con la
              planificación.
            </p>

            <blockquote>
              <i className="icofont-"></i>
              <b>El objetivo principal</b> del alineador es aplicar una presión
              suave y constante sobre los dientes, moviéndolos gradualmente
              hacia la posición deseada. Cada juego de alineadores se usa
              durante aproximadamente dos semanas y luego se reemplaza por un
              juego nuevo que sigue el siguiente paso en un plan de tratamiento
              trazado por un ortodoncista con experiencia, que realizara un
              seguimiento periódico y asi asegurarse que los alineadores están
              trabajando según lo planificado, hasta lograr el fin del
              tratamiento.
            </blockquote>
            <p>
              Se comienza con la primer consulta con el Ortodoncista, quien
              analizara si tu caso es posible de tratar con alineadores. En el
              caso de ser aceptado para este tipo de tratamiento se realizara
              una planificación que determinara el numero de alineadores que
              deberás usar durante el tratamiento y teniendo en cuenta que se
              usan unos 14-15 días cada alineador, eso va a determinar el tiempo
              total del tratamiento. El Ortodoncista acreditado mandara el plan
              de tratamiento al laboratorio donde se confeccionan los modelos de
              tus dientes para cada etapa y los de allí salen los alineadores
              que deberás usar según su indicación, unas 22 horas al dia,
              pudiéndotelos sacar para alimentarte y después de una correcta
              higiene volver a colocártelos. Según la cantidad y duración del
              tratamiento, el ortodoncista determinara si hay que realizar
              modificaciones en el tratamiento para corregir el funcionamiento y
              llegar mas pronto al final del mismo.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div className="service-details-inner-left">
                <img src="/images/signup-bg.jpeg" alt="Service" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>NUESTRA DIFERENCIAS</h2>
                <ul>
                  <li>
                    <p>
                      Se utilizan para la <b>impresión de modelos</b>,
                      impresoras de alta calidad de terminación para marcar la
                      mejor fidelidad del escaneo de tus dientes que luego se
                      trasladaran al alineador con el ajuste perfecto, además de
                      ser compatibles con la producción de alineadores de
                      impresión directa con resinas especiales.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>
                      <b>
                        Utilización de materiales acordes a las necesidades que
                        indica la planificación.
                      </b>{" "}
                      Según los movimientos que se planifican en cada etapa se
                      puede utilizar diferentes tipos de materiales de placas
                      con diferencia en espesores y maleabilidad, siempre
                      eligiendo la mejor calidad de placas que existe en el
                      mercado.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>
                        {" "}
                        Area de pulido y acabamiento de los alineadores
                        utilizando los mejores materiales para lograr una
                        terminación suave y confortable.
                      </b>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
