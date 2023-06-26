import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8 col-lg-9">
              <div className="header-top-item">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <a href="tel:+07554332322">
                        <i className="icofont-ui-call"></i>
                        Telefono : +54 9 11 7632-0535
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@smilemealigners.com">
                        <i className="icofont-ui-message"></i>
                        info@smilemealigners.com
                      </a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      Buenos Aires, Argentina
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-3">
              <div className="header-top-item">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/smileme.aligner/"
                        target="_blank"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
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

export default TopHeader;
