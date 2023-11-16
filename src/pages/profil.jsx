
import bg from "../assets/image/video/video-image.png";


function profil() {
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
            <div className="col-6 col-sm-4 fs-1 fw-bold px-4 py-4 text-white text-cus">
              Profil
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-12 col-sm-6">
              <div className="w-75">
                <span className="fw-semibold fs-2" style={{ color: "#4D4DAB" }}>
                  Organisasi
                </span>
                <p className="mt-4">
                  DPS GROUP didirikan pada tahun 1994 sebagai Distributor Boral
                  (Jayaboard) Gypsum di Jabodetabek.
                </p>
                <p>
                  Saat ini DPS GROUP telah mendistribusikan berbagai produk
                  bahan bangunan bermerek internasional serta produk-produk
                  eksklusif.
                </p>
                <p>
                  DPS GROUP telah mendirikan fasilitas kantor dan gudang di
                  Jabodetabek, Surabaya, Medan, Pekanbaru dan Batam.
                </p>
                <p>
                  DPS GROUP memiliki lebih dari 150 karyawan untuk melayani
                  pelanggan dan permintaan pasar.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="card bg-dark text-white w-75 mx-auto">
                <img src={bg} className="card-img" alt="img" />
                <div className="card-img-overlay text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <span className="fw-semibold fs-2" style={{ color: "#4D4DAB" }}>
            Core Value
          </span>
          <div className="row row-cols-1 row-cols-sm-3 mt-4">
            <div className="col">
              <span className="fw-medium fs-5">KUALITAS</span>
              <p className="mt-2">
                Komitmen untuk memberikan layanan terbaik dan terus meningkatkan
                produk dan layanan
              </p>
            </div>
            <div className="col">
              <span className="fw-medium fs-5">KEPUASAN PELANGGAN</span>
              <p className="mt-2">
                Memberikan layanan pelanggan yang luar biasa
              </p>
            </div>
            <div className="col">
              <span className="fw-medium fs-5">INOVASI</span>
              <p className="mt-2">
                Mendorong dan menerapkan inovasi untuk lebih meningkatkan
                proses, produk, dan layanan kami
              </p>
            </div>
            <div className="col">
              <span className="fw-medium fs-5">KERJASAMA</span>
              <p className="mt-2">
                Bekerja sama untuk mencapai tujuan bersama dalam kelompok,
                bersama pemasok dan pelanggan
              </p>
            </div>
            <div className="col">
              <span className="fw-medium fs-5">KOMITMEN</span>
              <p className="mt-2">
                Komitmen tinggi dalam jadwal, kualitas dan kinerja yang
                profesional
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="row row-cols-1 row-cols-sm-2 bg-light align-items-center">
        <div className="col-12 col-sm-6 p-0 order-2 order-sm-0">
          <div className="w-50 mx-auto">
            <span className="fw-semibold fs-2" style={{ color: "#4D4DAB" }}>
              Tim Manajemen
            </span>
            <p className="mt-4">
              DPS GROUP didirikan pada tahun 1994 sebagai Distributor Boral
              (Jayaboard) Gypsum di Jabodetabek.
            </p>
            <p>
              Saat ini DPS GROUP telah mendistribusikan berbagai produk bahan
              bangunan bermerek internasional serta produk-produk eksklusif.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 p-0 order-1 order-sm-0">
          <img
            src={bg}
            alt="img"
            style={{
              width: "100%",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          />
        </div>
        {/* <div className="w-100 d-none d-md-block"></div> */}
        <div className="col-12 col-sm-6 p-0 order-2 order-sm-3">
          <img
            src={bg}
            alt="img"
            style={{
              width: "100%",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-12 col-sm-6 p-0 order-4 order-sm-3">
          <div className="w-50 mx-auto">
            <span className="fw-semibold fs-2" style={{ color: "#4D4DAB" }}>
              Multi Gudang & Pengiriman Tepat Waktu
            </span>
            <p className="mt-4">
              DPS GROUP didirikan pada tahun 1994 sebagai Distributor Boral
              (Jayaboard) Gypsum di Jabodetabek.
            </p>
            <p>
              Saat ini DPS GROUP telah mendistribusikan berbagai produk bahan
              bangunan bermerek internasional serta produk-produk eksklusif.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default profil;
