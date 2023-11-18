import { useEffect } from "react";
import { useParams } from "react-router-dom";

import CardLong from "../components/cards/CardLong";

import kategori from "../constant/kategori";
import brand from "../constant/brand";
import { Container } from "react-bootstrap";
import CardBrand from "../components/cards/CardBrand";
import Slider from "react-slick";
import CardCategory from "../components/cards/CardCategory";

const Kategori = () => {
  const { slug } = useParams();
  useEffect(() => {}, [brand, slug]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="ha"
        style={{
          background: "#92201c",
          height: "450px",
          width: "100%",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-10 col-lg-8 mx-0 mx-sm-2 img-cus py-4">
              {kategori?.data.map((v) =>
                v.nama === slug
                  ? v.data.map((as) => (
                      <>
                        <img
                          src={as.image}
                          className="card-img shadow"
                          alt="img"
                          style={{
                            width: "100%",
                            height: "450px",
                            cursor: "pointer",
                            borderRadius: "16px",
                            objectFit: "cover",
                            backgroundSize: "cover",
                          }}
                        />
                      </>
                    ))
                  : ""
              )}
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container cihuy">
          <div className="row justify-content-evenly">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="mt-4">
                {kategori?.data.map((v) =>
                  v.nama === slug ? (
                    <>
                      <span
                        className="fw-bold fs-3 fs-sm-4"
                        style={{ color: "#4D4DAB" }}
                      >
                        {v.nama}
                      </span>
                      {v.deskripsi.map((item, i) => (
                        <p key={i} className="mt-4">
                          {item}
                        </p>
                      ))}

                      <p className="my-4">
                        Hubungi kami untuk informasi lebih lanjut produk papan
                        Gypsum tersebut.
                      </p>
                    </>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
            <div className="col-12 col-sm-0 col-md-0 col-lg-1"></div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5">
              <span
                className="fw-semibold fs-5 fs-sm-4"
                style={{ color: "#4D4DAB" }}
              >
                INFORMASI HARGA DAN PEMBELIAN
              </span>
              <div>
                <a
                  href="#"
                  className="btn mt-3 btn-lg px-4 py-2 text-white fw-semibold fs-6 btn-lg active border-0"
                  role="button"
                  aria-pressed="true"
                  style={{
                    borderRadius: "30px",
                    background: "#4D4DAB",
                  }}
                >
                  <svg
                    className="svg-icon h-5 w-5 me-2"
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
                  CHAT VIA WHATSHAP
                </a>
              </div>
              <div className="mt-4">
                <span
                  className="fw-semibold fs-5 fs-sm-4 text-uppercase"
                  style={{ color: "#4D4DAB" }}
                >
                  DISTRIBUTOR BRAND {slug}
                </span>
              </div>
              <div className="mt-4 row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-2">
                {kategori?.data.map((v) =>
                  v.nama === slug
                    ? v.distributor.map((item, i) => (
                        <CardBrand image={item.logo} key={i} />
                      ))
                    : ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark py-5 px-3">
        <Container>
          <div className="mb-3">
            <span
              className="fw-semibold fs-5 fs-sm-4 text-uppercase"
              style={{ color: "#ffffff" }}
            >
              kategori produk lainya
            </span>
          </div>
          <Slider {...settings}>
            {kategori?.data.map((v, i) => (
              <CardCategory image={v.image} key={i} link={v.path} />
            ))}
          </Slider>
        </Container>
      </section>
      <section className="container">
        <CardLong />
      </section>
    </>
  );
};

export default Kategori;
