import artBaru from "./../../assets/image/video/artikel.jpeg";

function CardKantorBaru() {
  return (
    <>
      <div
        className="relative"
        style={{ background: "#92201c", width: "100%", height: "300px" }}
      ></div>
      <div style={{ background: "white" }}>
        <div className="relative">
          <div className="container mx-auto row  justify-content-center row-cols-sm-2 ">
            <div className="text-black px-0 my-5">
              <div className="p-3">
                <div>
                  <span>
                    <strong>
                      <h2 className="fw-bold">
                        Tampilan Wajah Baru DPS Bitung
                      </h2>
                    </strong>
                  </span>
                </div>
                <div style={{ color: "grey" }}>
                  <h6>26 Oktober 2023</h6>
                </div>
                <div>
                  <p>
                    Halo Sobat DPS, Apakah kalian sudah mengetahui tampilan
                    wajah baru dari kantor DPS Bitung? Beberapa produk yang
                    digunakan antara lain SHERA dan Luxalon, Pertama menggunakan
                    SHERA Strip V- Cut Edge Straight Grain Uncolored, SHERA
                    Strip memiliki kekuatan dan daya tahan yang baik terhadap
                    cuaca, menyediakan berbagai pilihan warna dengan tampilan
                    yang natural. Memiliki dimensi 0,8 x 100 x 3000 mm dan berat
                    per pcs 3,55 kg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardKantorBaru;
