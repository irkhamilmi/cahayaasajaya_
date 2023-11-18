import { Col, Row } from "react-bootstrap";
import CardBrand from "../components/cards/CardBrand";
import CardCategory from "../components/cards/CardCategory";
import CardLong from "../components/cards/CardLong";

import katefori from "../constant/kategori";
import brand from "../constant/brand";
import TitleSection from "../components/title/TitleSection";
import Hero from "../components/hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <section>
          <div className="text-center">
            <span className="fs-2 fw-bold cus-wid mx-auto">
              Melayani penjualan grosir dan eceran
            </span>
            <p className="mt-2 cus-wid mx-auto">
              Papan Gypsum, Sistem plafon dan partisi, Papan fiber semen, Papan
              silikat, Panel akustik, serta berbagai produk penunjang dan
              aksesoris bangunan
            </p>
          </div>
        </section>
        <section>
          <TitleSection text="BRANDS" />
          <Row>
            <Col>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mt-4">
                {brand?.data?.map((v, i) => (
                  <div className="col p-0" key={i}>
                    <CardBrand image={v.logo} link={v.path} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <TitleSection text="KATEGORI PRODUK" />
          <Row>
            <Col>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mt-4">
                {katefori?.data?.map((v, i) => (
                  <div className="col p-0" key={i}>
                    <CardCategory image={v.image} />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <CardLong />
        </section>
      </div>
    </>
  );
}

export default Home;
