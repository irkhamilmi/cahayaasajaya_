import CardBrand from "../components/cards/CardBrand";
import CardCategory from "../components/cards/CardCategory";
import CardLong from "../components/cards/CardLong";

function Home() {
  return (
    <div className="container-md">
      <section>
        <CardBrand />
      </section>
      <section>
        <CardCategory />
      </section>
      <section>
        <CardLong />
      </section>
    </div>
  );
}

export default Home;
