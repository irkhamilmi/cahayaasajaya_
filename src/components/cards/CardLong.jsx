function cardLong() {
  return (
    <>
      <div
        className="card border-0 p-5"
        style={{ width: "100%", borderRadius: "20px", background: "#F1F5F9" }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-sm-10">
              <h1 className="card-title font-weight-bold">Gratis Konsultasi</h1>
              <p className="card-text p-0 m-0">
                Punya pertanyaan seputar produk material bangunan?
              </p>
              <p>
                Tanyakan saja kepada kami, dengan senang hati kami siap membantu
                Anda
              </p>
            </div>
            <div className="col-sm-2 my-auto">
              <a
                href="#"
                className="btn btn-lg active text-white"
                role="button"
                aria-pressed="true"
                style={{
                  borderRadius: "30px",
                  background: "#92201c",
                  // marginLeft: "220px",
                }}
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cardLong;
