import React from "react";

const AppointmentForm = () => {
  return (
    <>
      <div className="appointment-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center appointment-wrap-two">
            <div className="col-lg-7">
              <div className="appointment-item appointment-item-two">
                <div className="appointment-shape">
                  <img src="/images/hart-img1.png" alt="Shape" />
                </div>

                <h2></h2>
                <span>Te vamos a confirmar tu cita en 1 día habil</span>

                <div className="appointment-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-business-man-alt-1"></i>
                          <label>Nombre</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese su nombre"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-pin"></i>
                          <label>Ciudad</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese su ciudad"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-message"></i>
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Ingrese su email"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-call"></i>
                          <label>Telefono</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese su telefono"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn appointment-btn">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="appointment-item-two-right">
                <div className="appointment-item-content">
                  <h2>Horario de atención</h2>
                  <ul>
                    <li>
                      Lunes <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Martes <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Miercoles <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Jueves <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Viernes <span>9:00 AM - 8:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
