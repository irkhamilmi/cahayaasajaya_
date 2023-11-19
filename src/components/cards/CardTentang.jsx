import gmbr from "./../../assets/image/video/tentang.jpg";

function Cardentang() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center flex-lg-nowrap">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 mt-4 align-items-center">
            <div className="col">
              <img src={gmbr} alt="" className="cus-wid-img" />
            </div>
            <div className="col">
              <div
                className="text-white p-6 shadow-lg cus-tent p-5"
                style={{ background: "#92201c" }}
              >
                <h3 className="fw-bold mb-4 mb-lg-4">Tentang DPS Group</h3>
                <div className="fs-5 text-white mb-4">
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
                  }}
                >
                  SELANJUTNYA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardentang;
