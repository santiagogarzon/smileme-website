import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="home-slider"
      >
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.png)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      <img
                        src="/images/home-one/home-slider1.png"
                        alt="Shape"
                      />
                    </div>

                    <h1>
                      ¡Todo lo que necesitas saber sobre los alineadores
                      invisibles!
                    </h1>
                    <p>
                      Tratamiento sencillo, cómodo y eficaz. Dientes alineados
                      entre 4 y 9 meses
                    </p>

                    <div className="alternative-common-btn">
                      <Link href="/appointment">¡Pide tu cita!</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Saber más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.png)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-two">
                      <img
                        src="/images/home-one/home-slider2.png"
                        alt="Shape"
                      />
                    </div>
                    <h1>
                      Trabajamos con ortodoncistas de todas partes del país
                    </h1>
                    <p>
                      Si eres ortodoncista, tenemos numerosos servicios pensados
                      para ti.
                    </p>

                    <div className="alternative-common-btn">
                      <Link href="/appointment">¡Pide tu cita!</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Saber más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
