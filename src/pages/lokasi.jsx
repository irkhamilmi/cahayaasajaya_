import { Col, Container, Row } from "react-bootstrap";
import { alokasi } from "../constant/lokasi";

import icwa from "./../assets/image/nav/wa.svg";
import ictlep from "./../assets/image/nav/telp.svg";
import iclokasi from "./../assets/image/nav/lokasi-icon.svg";
import bg from "../assets/image/video/lokasi.jpg";
// import Cardlok from "../components/lokasi/CardLokasi";
// import TitleSection from "../components/title/TitleSection";

function Lokasi() {
  return (
    <>
      <div
        className="dar"
        style={{
          backgroundImage: `url(${bg})`,
          height: "400px",
          width: "100%",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-6 fs-1 fw-bold px-4 py-4 text-white text-cus">
              Head Office & Warehouse
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ marginTop: "60px", marginBottom: "60px" }}
      >
        <Container>
          <div className="row row-cols-1 row-cols-sm-3 mt-4">
            {alokasi.map((lok) => {
              return (
                <div className="col" key={lok.id}>
                  <div className="col card text-black border shadow rounded-5 my-3">
                    <img
                      src={lok.image}
                      alt=""
                      className="rounded-top-5 w-full h-full object-cover"
                    />
                    <div className="position-absolute ">
                      <h4
                        className="font-bold bg-white text-primary fw-bold py-2 px-3 rounded-5 "
                        style={{ fontSize: "16px", margin: "20px" }}
                      >
                        {lok.daerah}
                      </h4>
                    </div>
                    <div className="p-3">
                      <img
                        src={iclokasi}
                        className="mx-2 mb-1 "
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <span>
                        <strong>{lok.title}</strong>
                      </span>
                      <div className="mx-2 px-4 ">{lok.jalan}</div>
                      <div>
                        <img
                          src={icwa}
                          className="mx-2 mb-1 "
                          alt=""
                          style={{ width: "18px" }}
                        />
                        {lok.nomor.wa}
                      </div>
                      <div>
                        <img
                          src={ictlep}
                          className="mx-2 mb-1 "
                          alt=""
                          style={{ width: "20px" }}
                        />
                        {lok.nomor.tlp}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Lokasi;
