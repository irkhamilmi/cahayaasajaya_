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
                        style={{ color: "#92201c" }}
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
                style={{ color: "#92201c" }}
              >
                INFORMASI HARGA DAN PEMBELIAN
              </span>
              <div>
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
              <div className="mt-4">
                <span
                  className="fw-semibold fs-5 fs-sm-4 text-uppercase"
                  style={{ color: "#92201c" }}
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
