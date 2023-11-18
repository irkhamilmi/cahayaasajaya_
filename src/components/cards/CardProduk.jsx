import propTypes from "prop-types";

function CardProduk({ image, nama }) {
  return (
    <>
      <div
        className="card text-black shadow border-0"
        style={{ cursor: "pointer", borderRadius: "20px" }}
      >
        <img
          className="card-img m-0 p-0 w-100 h-100"
          src={image}
          alt="Card image"
          style={{ borderRadius: "20px 20px 0 0" }}
        />
        <div className="text-center p-2">
          <span className="card-title fw-medium">{nama}</span>
        </div>
      </div>
    </>
  );
}

CardProduk.propTypes = {
  image: propTypes.string,
  nama: propTypes.string,
};

export default CardProduk;
