function cardLong() {
  return (
    <>
      <div
        className="card border-0 p-5"
        style={{ width: "100%", borderRadius: "20px", background: "#F1F5F9" }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-sm-9">
              <h1 className="card-title font-weight-bold">Gratis Konsultasi</h1>
              <p className="card-text p-0 m-0">
                Punya pertanyaan seputar produk material bangunan?
              </p>
              <p>
                Tanyakan saja kepada kami, dengan senang hati kami siap membantu
                Anda
              </p>
            </div>
            <div className="col-sm-3 my-auto">
              <a
                href="https://wa.me/2348100000000"
                className=" btn btn-lg active text-white px-4"
                role="button"
                aria-pressed="true"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderRadius: "30px",
                  background: "#92201c",
                }}
              >
                <i className="fa fa-whatsapp px-2"></i>
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
