import { Row } from "react-bootstrap";
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
            <span className="fs-2 fw-bold w-75 mx-auto">
              Melayani penjualan grosir dan eceran
            </span>
            <p className="mt-2 w-50 mx-auto">
              Papan Gypsum, Sistem plafon dan partisi, Papan fiber semen, Papan
              silikat, Panel akustik, serta berbagai produk penunjang dan
              aksesoris bangunan
            </p>
          </div>
        </section>
        <section>  
          <TitleSection text="BRANDS" />
          <Row>
            {brand?.data?.map((v, i) => {
              return <CardBrand image={v.logo} key={i} />;
            })}
          </Row>
        </section>
        <section>
          <TitleSection text="KATEGORI PRODUK" />
          <Row>           
            {katefori?.data?.map((v, i) => {
              return <CardCategory image={v.image} key={i + 1} />;
            })}
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
