import propTypes from "prop-types";

function CardBrand({image}) {
  return (
    <>
    <div
      className="card text-black m-2 p-4 shadow rounded border-0"
      style={{ width: "240px", cursor: "pointer" }}
    >
      <img
        className="card-img m-0 p-0 w-100 h-100"
        src={image}
        alt="Card image"
      />
    
    </div>
    </>
  )
}

CardBrand.propTypes = {
    image:propTypes.string
}

export default CardBrand