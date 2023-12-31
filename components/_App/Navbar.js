import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" width={150} />
              </Link>
              <div className="only-mobile">
                <ReactWhatsapp
                  number="+54 9 11 7632-0535"
                  message="Buenos días, me gustaría recibir más información sobre SmileMe Aligners."
                  element="div"
                >
                  <i
                    className="icofont-whatsapp"
                    style={{
                      fontSize: "40px",
                      color: "green",
                    }}
                  ></i>
                </ReactWhatsapp>
              </div>
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about/"
                      className={`nav-link ${
                        currentPath == "/about/" && "active"
                      }`}
                    >
                      Quienes Somos
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/service-details/"
                      className={`nav-link ${
                        currentPath == "/service-details/" && "active"
                      }`}
                    >
                      Ortodoncia Invisible
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/ortodoncista/"
                      className={`nav-link ${
                        currentPath == "/ortodoncista/" && "active"
                      }`}
                    >
                      Soy Ortodoncista
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contactanos
                    </Link>
                  </li>

                  <ReactWhatsapp
                    number="+54 9 11 7632-0535"
                    message="Buenos días, me gustaría recibir más información sobre SmileMe Aligners."
                    element="div"
                  >
                    <li className="nav-item">
                      <Link href="" style={{ color: "green" }}>
                        <i className="icofont-whatsapp"></i> Whatsapp
                      </Link>
                    </li>
                  </ReactWhatsapp>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
