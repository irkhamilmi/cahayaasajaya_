import art from "../assets/image/video/artikel.jpeg";

const artikel = () => {
  return (
    <>
      <div
        className="relative"
        style={{ background: "#92201c", padding: "80px " }}
      >
        <div className="container mx-auto text-white">
          <h1 className="text-center fw-bold">Artikel</h1>
          <div className="text-center mt-4">
            <span>
              <span>
                <a href="/#" className="text-white">
                  Home
                </a>
              </span>
              <span className="">Artikel</span>
            </span>
          </div>
        </div>
      </div>
      <div style={{ background: "#F1F5F9" }}>
        <div className="relative">
          <a href="/kantor-baru" style={{ textDecoration: "none" }}>
            <div className="container mx-auto row row-cols-1 row-cols-sm-3 ">
              <div className="col card text-black border shadow rounded-5 px-0 my-5">
                <img
                  src={art}
                  alt=""
                  className="rounded-top-5 w-full h-full "
                />
                <div className="p-3">
                  <div style={{ color: "grey" }}>
                    <h6>26 Oktober 2023</h6>
                  </div>
                  <span>
                    <strong>
                      <h3>Tampilan Wajah Baru DPS Bitung</h3>
                    </strong>
                  </span>
                  <div>
                    <p>
                      Halo Sobat DPS, Apakah kalian sudah mengetahui tampilan
                      wajah baru dari kantor DPS Bitung? Beberapa produk yang
                      digunakan antara lain SHERA dan Luxalon, Pertama
                      menggunakan SHERA Strip V- Cut Edge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default artikel;
