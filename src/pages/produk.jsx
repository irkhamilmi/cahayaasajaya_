import { useEffect } from "react";
import { useParams } from "react-router-dom";

import CardLong from "../components/cards/CardLong";

import brand from "../constant/brand";
import CardProduk from "../components/cards/CardProduk";
import { Col, Row } from "react-bootstrap";

const produk = () => {
  const { slug } = useParams();
  useEffect(() => {}, [brand, slug]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-2 order-sm-2 order-md-2 order-lg-0">
              <div className="cus-wid-pro mt-4">
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
                <span
                  className="fw-semibold fs-5 fs-sm-4"
                  style={{ color: "#92201c" }}
                >
                  INFORMASI HARGA DAN PEMBELIAN
                </span>
                <a
                  href="https://wa.me/2348100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-3 btn-lg px-4 py-2 text-white fw-semibold fs-6 btn-lg active border-0"
                  role="button"
                  aria-pressed="true"
                  style={{
                    borderRadius: "30px",
                    background: "#92201c",
                  }}
                >
                  <i className="fa fa-whatsapp px-2"></i>
                  CHAT VIA WHATSHAP
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-sm-1 order-md-1 order-md-0">
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
        <Row className="justify-content-center justify-content-md-center">
          <Col sm={12} md={10} lg={8}>
            <span
              className="fw-semibold fs-5 text-uppercase"
              style={{ color: "#92201c" }}
            >
              {`lini produk ${slug}`}
            </span>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 mt-4">
              {brand?.data.map((v) =>
                v.nama === slug
                  ? v.data.map((item, i) => (
                      <div className="col mb-4 mb-sm-4" key={i}>
                        <CardProduk
                          image={item.image}
                          nama={item.nama}
                          link={item.path}
                        />
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
