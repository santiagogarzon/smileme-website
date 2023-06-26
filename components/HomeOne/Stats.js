import React from "react";

const Stats = () => {
  return (
    <>
      <div className="counter-area">
        <div className="container">
          <div className="row counter-bg">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-tooth"></i>
                <h3 className="counter">2350</h3>
                <p>Alineadores realizados</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-people"></i>
                <h3>
                  <span className="counter">25000</span>+
                </h3>
                <p>Pacientes Tratados</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-doctor-alt"></i>
                <h3 className="counter">25</h3>
                <p>Dentistas</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                <i className="icofont-badge"></i>
                <h3 className="counter">3</h3>
                <p>Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
