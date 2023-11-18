import propTypes from "prop-types";
import { Link } from "react-router-dom";

function CardBrand({ image,link }) {
  return (
    <Link to={link}>
      <div
        className="card text-black m-2 p-4 shadow border-0"
        style={{
          width: "auto",
          height: "100px",
          cursor: "pointer",
          borderRadius: "16px",
        }}
      >
        <img
          className="card-img m-0 p-0 w-100 h-100"
          src={image}
          alt="Card image"
        />
      </div>
    </Link>
  );
}

CardBrand.propTypes = {
  image: propTypes.string,
  link: propTypes.string,
};

export default CardBrand;
