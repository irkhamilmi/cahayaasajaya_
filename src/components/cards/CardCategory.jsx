import propTypes from "prop-types";

function CardCategory({ image }) {
  return (
    <div
      className="card text-black m-2 p-0 shadow border-0"
      style={{ width: "240px", cursor: "pointer", borderRadius: "20px" }}
    >
      <img
        className="card-img m-0 p-0 w-100 h-100"
        src={image}
        alt="Card image"
        style={{ borderRadius: "20px" }}
      />
      <div className="card-img-overlay">
        {/* <h5 className="card-title">Card title</h5> */}
      </div>
    </div>
  );
}

CardCategory.propTypes = {
  image: propTypes.string,
};

export default CardCategory;
