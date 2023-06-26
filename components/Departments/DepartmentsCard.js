import React from "react";

const DepartmentsCard = () => {
  return (
    <>
      <div className="departments-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i className="icofont-tooth"></i>
                <h3>MODELO</h3>
                <p>
                  Si tienes termoformadora y solo necesitas el MODELO, puedes
                  acceder solo a él enviando el archivo STL.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i className="icofont-baby"></i>
                <h3>MODELOS Y ALINEADORES</h3>
                <p>
                  Puedes enviarnos el archivo STL con sus números de alineador y
                  si es superior o inferior y se realizaran listos para ser
                  entregados a tu paciente.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i className="icofont-laboratory"></i>
                <h3>MARCA PROPIA</h3>
                <p>
                  Tu marca a los modelos y ser entregados junto a los
                  alineadores en nuestra caja y cada alineador en nuestras
                  bolsas, con tu etiqueta detallando tu marca, paciente y numero
                  de alineador, junto a los accesorios que viene en la caja.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i className="icofont-icu"></i>
                <h3>SI NO TIENES MARCA PROPIA</h3>
                <p>
                  Confeccionamos los alineadores terminados para ser entregados
                  a tu paciente en una caja con nuestra marca y con todos los
                  accesorios que trae la caja
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i className="icofont-dna-alt-2"></i>
                <h3>PLACAS DE CONTENCION</h3>
                <p>
                  Confeccionamos las placas de contención para ser entregados a
                  tu paciente en una caja con nuestra marca.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="department-item">
                <i className="icofont-surgeon"></i>
                <h3> LLAVES DE TRANSFERENCIA</h3>
                <p>
                  CEMENTADO INDIRECTO de brackets, que incluye brackets de la
                  marca FORESTADENT con un importante descuento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentsCard;
