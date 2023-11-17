import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import bg from "../assets/image/video/video-image.png";

import CardLong from "../components/cards/CardLong";
import TitleSection from "../components/title/TitleSection";

import katefori from "../constant/kategori";
import brand from "../constant/brand";
import CardProduk from "../components/cards/CardProduk";
import { Col, Container, Row } from "react-bootstrap";

const produk = () => {
  const { slug } = useParams();
  useEffect(() => {}, [brand, slug]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-12 col-sm-6 order-2 order-sm-0">
              <div className="w-75 mt-4">
                {brand?.data.map((v) =>
                  v.nama === slug ? (
                    <>
                      <div
                        style={{
                          width: "240px",
                          cursor: "pointer",
                          borderRadius: "16px",
                        }}
                      >
                        <img
                          className="card-img m-0 p-0 w-100 h-100"
                          src={v.logo}
                          alt="Card image"
                        />
                      </div>
                      <p className="mt-4">{v.deskripsi}</p>
                      <p className="my-4">
                        DPS Group menyediakan produk plafon metal Hunter Douglas
                        yang tahan lama dan cocok untuk aplikasi ekterior maupun
                        interior.
                      </p>
                    </>
                  ) : (
                    ""
                  )
                )}
                <span className="fw-semibold fs-5 fs-sm-4" style={{ color: "#4D4DAB" }}>
                  INFORMASI HARGA DAN PEMBELIAN
                </span>
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
            </div>
            <div className="col-12 col-sm-6 order-1 order-sm-0">
              {brand?.data.map((v) =>
                v.nama === slug ? (
                  <>
                    <img
                      src={v.image}
                      className="card-img"
                      alt="img"
                      style={{
                        width: "100%",
                        cursor: "pointer",
                        borderRadius: "16px",
                      }}
                    />
                  </>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light py-5 px-3 text-center">
        <Row className="justify-content-md-center">
          <Col sm={12} md={6}>
            <span
              className="fw-semibold fs-5 text-uppercase"
              style={{ color: "#4D4DAB" }}
            >
              {`lini produk ${slug}`}
            </span>
            <div className="row row-cols-2 row-cols-sm-3 mt-4">
              {brand?.data.map((v) =>
                v.nama === slug
                  ? v.data.map((item, i) => (
                      <div className="col mb-4 mb-sm-4" key={i}>
                        <CardProduk image={item.image} nama={item.nama} />
                      </div>
                    ))
                  : ""
              )}
            </div>
          </Col>
        </Row>
      </section>
      <section className="container">
        <CardLong />
      </section>
    </>
  );
};

export default produk;
