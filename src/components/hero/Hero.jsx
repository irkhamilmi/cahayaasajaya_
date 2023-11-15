import { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Hero() {
  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  return (
    <>
      <div
        className="relative"
        style={{ background: "#353279", padding: "80px 0 80px 0" }}
      >
        <div className="container row mx-auto">
          <div className="col-sm-5">
            <div className="align-middle w-75">
              <p className="fw-bold text-white fs-1 mb-4">
                Distributor Aneka Produk Bangunan, Plafon dan Partisi
              </p>
              <a
                href="/brand"
                className="btn bg-white px-4 text-primary fw-semibold fs-6 btn-lg active border-0"
                role="button"
                aria-pressed="true"
                style={{ borderRadius: "30px" }}
              >
                <svg
                  className="svg-icon h-5 w-5"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H21C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H17V20.993C17 21.549 16.551 22 15.993 22H3.007C2.87472 22.0001 2.74372 21.9742 2.62148 21.9236C2.49925 21.8731 2.38819 21.7989 2.29465 21.7053C2.20112 21.6118 2.12695 21.5008 2.07639 21.3785C2.02583 21.2563 1.99987 21.1253 2 20.993L2.003 8.007C2.003 7.451 2.452 7 3.01 7H7ZM9 7H15.993C16.549 7 17 7.449 17 8.007V15H20V4H9V7ZM4.003 9L4 20H15V9H4.003Z"
                    fill="currentColor"
                  ></path>
                </svg>
                PRODUK KAMI
              </a>
            </div>
          </div>

          <div className="col-sm-7">
            <div className="w-full">
              <Carousel ref={ref} indicators={false} controls={false}>
                <Carousel.Item>
                  <Image
                    rounded
                    className="w-full h-full object-cover"
                    src="https://dps-interdesign.com/wp-content/uploads/2023/01/home-slide-05.jpg"
                    alt="first"
                    text="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    rounded
                    className="w-full h-full object-cover"
                    src="https://dps-interdesign.com/wp-content/uploads/2023/01/home-slide-06.jpg"
                    text="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    rounded
                    className="w-full h-full object-cover"
                    src="https://dps-interdesign.com/wp-content/uploads/2023/01/home-slide-07.jpg"
                    text="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="button-arrow-hero">
                <div>
                  <button
                    className="btn bg-white m-2 fw-bold"
                    onClick={onPrevClick}
                    style={{ borderRadius: "100%" }}
                  >
                    {"<"}
                  </button>
                  <button
                    className="btn bg-white fw-bold"
                    onClick={onNextClick}
                    style={{ borderRadius: "100%" }}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
