import propTypes from "prop-types";

function CardBrand({ image }) {
  return (
    <>
      <div
        className="card text-black m-2 p-4 shadow border-0"
        style={{ width: "240px", cursor: "pointer", borderRadius: "16px" }}
      >
        <img
          className="card-img m-0 p-0 w-100 h-100 row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1"
          src={image}
          alt="Card image"
        />
      </div>
    </>
  );
}

CardBrand.propTypes = {
  image: propTypes.string,
};

export default CardBrand;
