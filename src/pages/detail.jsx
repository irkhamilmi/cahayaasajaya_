import { useParams } from "react-router";
import { useEffect } from "react";
import brand from "../constant/brand";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Detail = () => {
  const { slug, child } = useParams();
  useEffect(() => {}, [brand, slug, child]);
  return (
    <>
      <div
        className="relative"
        style={{ background: "#92201c", padding: "80px " }}
      >
        <div className="container mx-auto text-white">
          <h1 className="text-center fw-bold">{child}</h1>
          <div className="text-center mt-4">
            <span>
              <a href="/" className="text-white">
                Home
              </a>
            </span>
            {" / "}
            <span>
              <Link to={`/produk/${slug}`} className="text-white">
                {slug}
              </Link>
            </span>
            {" / "}
            <span className="">{child}</span>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row">
            {brand?.data.map((v) =>
              v.nama === slug
                ? v.data.map((item) =>
                    item.nama === child ? (
                      <>
                        <div className="mb-4">
                          {item.keterangan.map((ket, d) => (
                            <div className="mb-3 text-center fs-5" key={d}>
                              {ket}
                            </div>
                          ))}
                        </div>

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4 mx-auto">
                          {item.data.map((a, i) => (
                            <div className="col mb-4 mb-sm-4" key={i}>
                              <div
                                className="card shadow"
                                style={{
                                  // height: "400px",
                                  border: "none",
                                  borderRadius: "20px",
                                }}
                              >
                                <img
                                  src={a.image}
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body mt-4">
                                  <h5 className="card-title fw-bold">
                                    {a.title}
                                  </h5>
                                  <p className="card-text">{a.deskripsi}</p>
                                  <Button
                                    href="https://wa.me/2348100000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mx-1 px-4 fs-6 fw-medium border-0"
                                    size="l"
                                    style={{
                                      background: "#92201c",
                                      borderRadius: "30px",
                                    }}
                                  >
                                    <i className="fa fa-whatsapp px-2"></i>
                                    HUBUNGI KAMI
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      ""
                    )
                  )
                : ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
