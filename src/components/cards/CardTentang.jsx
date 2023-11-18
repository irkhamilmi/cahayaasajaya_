import gmbr from "./../../assets/image/video/tentang.jpg";
import "./../../style.css";
import { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Cardentang() {
  return (
    <>
      <div className="container mx-auto py-12 py-lg-3 ">
        <div className="d-flex flex-wrap align-items-center flex-lg-nowrap">
          <div className="position-relative">
            <img
              src={gmbr}
              alt=""
              className="rounded-5 "
              style={{ width: "850px", height: "550px" }}
            />
          </div>
          <div
            className="position-absolute"
            style={{ width: "500px", height: "500px", marginLeft: "600px" }}
          >
            <div
              className="text-white p-6 shadow-lg rounded-5 rounded-bottom-5 p-5"
              style={{ background: "#92201c" }}
            >
              <h3 className="fw-bold mb-4 mb-lg-4">Tentang DPS Group</h3>
              <div className="text-lg text-white mb-4 ">
                Selama lebih dari 28 tahun, DPS GROUP telah mendistribusikan
                beraneka produk material bangunan berkualitas serta memberikan
                kepuasan kepada pelanggan kami
                <br />
                <br />
                DPS GROUP saat ini memiliki kantor dan jaringan distribusi di
                kota DKI Jakarta, Surabaya, Medan, Pekanbaru, dan Batam.
              </div>
              <a
                href="/profil"
                className="position-relative btn btn-lg active text-white"
                role="button"
                aria-pressed="true"
                style={{
                  borderRadius: "30px",
                  background: "#92201c",
                  marginLeft: "220px",
                }}
              >
                SELANJUTNYA
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardentang;
