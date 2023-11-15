import { Row } from "react-bootstrap";
import CardBrand from "../components/cards/CardBrand";
import CardCategory from "../components/cards/CardCategory";
import CardLong from "../components/cards/CardLong";

import katefori from "../constant/kategori";
import brand from "../constant/brand";
import TitleSection from "../components/title/TitleSection";
import Hero from "../components/hero/Hero"

function Home() {
  return (
    <>
    <div className="container-md">
      <section>
      <Hero />
      </section>
      <section>
        <TitleSection text="BRANDS" />
        <Row>
          {brand?.data?.map((v, i) => {
            return <CardBrand image={v.image} key={i} />;
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
