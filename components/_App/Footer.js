import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="pt-50 pb-35">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-8">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>Contactanos</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:info@smilemealigners.com">
                        info@smilemealigners.com
                      </a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:5491176320535">
                        {" "}
                        Telefono : +54 9 11 7632-0535
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

            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Links rápidos</h3>
                  <ul>
                    <li>
                      <Link href="/about">Sobre nosotros</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contactanos</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Design & Developed by{" "}
              <a href="https://hibootstrap.com/" target="_blank">
                SmileMe
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
