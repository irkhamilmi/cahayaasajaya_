import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Button,
  Offcanvas,
  Row,
  Dropdown,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// import inchm from "./../../assets/image/nav/home-icon.svg";
import icbrand from "./../../assets/image/nav/logos.png";
// import icprof from "./../../assets/image/nav/profil-icon.svg";
// import icprod from "./../../assets/image/nav/produk-icon.svg";
// import iclokasi from "./../../assets/image/nav/lokasi-icon.svg";
// import icartikel from "./../../assets/image/nav/artikel-icon.svg";

import facebook from "./../../assets/icons/fb.svg";
import ig from "./../../assets/icons/ig.svg";
import tokoped from "./../../assets/icons/toko.svg";

import brand from "../../constant/brand.json";
import kategori from "../../constant/kategori.json";

function Header() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary p-0">
          <Container className="mx-auto my-0 container">
            <Navbar.Brand href="/">
              <img
                src={icbrand}
                className="mx-1 mb-1 "
                alt="logo brand"
                style={{ width: "80px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {/* Offcanvas */}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="align-text-bottom mt-4 mb-0">
                <Nav className="justify-content-start flex-grow-1 fs-6 fw-semibold align-text-bottom">
                  <Nav.Link href="/">
                    {/* <img src={inchm} className="mx-2 mb-1" alt="" /> */}
                    <span className="mx-3">Home</span>
                  </Nav.Link>
                  <Nav.Link href="/profil">
                    {/* <img src={icprof} className="mx-2 mb-1" alt="" /> */}
                    <span className="mx-3">Profil</span>
                    
                  </Nav.Link>
                  {/* <img src={icprod} className="mx-2 mb-1" alt="" style={{width:"20px"}} /> */}
                  <NavDropdown title="Produk" className="mx-3" id="basic-nav-dropdown">
                    <div className="eventsNav">
                      <Row>
                        <Col xs="12" md="5" className="text-left">
                          <Dropdown.Header>BRAND</Dropdown.Header>
                          {brand?.data?.map((v, i) => {
                            return (
                              <Dropdown.Item key={i}>
                                <Link to={v.path} className="linkm">
                                  {v.nama}
                                </Link>
                              </Dropdown.Item>
                            );
                          })}
                        </Col>

                        <Col xs="12" md="5" className="text-left">
                          <Dropdown.Header>KATEGORI</Dropdown.Header>
                          {kategori?.data?.map((v, i) => {
                            return (
                              <Dropdown.Item key={i}>
                                <Link to={v.path} className="linkm">
                                  {v.nama}
                                </Link>
                              </Dropdown.Item>
                            );
                          })}
                        </Col>
                      </Row>
                    </div>
                  </NavDropdown>

                  <Nav.Link href="/lokasi">
                    {/* <img src={iclokasi} className="mx-2 mb-1" alt="" /> */}
                    <span className="mx-3">Lokasi</span>

                    
                  </Nav.Link>
                  <Nav.Link href="/artikel">
                    {/* <img src={icartikel} className="mx-2 mb-1" alt="" /> */}
                    <span className="mx-3">Artikel</span>
                    
                  </Nav.Link>
                </Nav>
                <div className="align-items-center ">
                  <a
                    href="https://www.tokopedia.com/atappla"
                    target="_blank"
                    rel="noreferrer"
                    className="-mt-1.5 mr-0.5 inline-block"
                  >
                    <img src={tokoped} alt="icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/dps.interdesign"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-slate-500 hover:text-primary mx-2"
                  >
                    <img src={ig} alt="icon" />
                  </a>
                  <a
                    href="https://www.facebook.com/dps.interdesign"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-slate-500 hover:text-primary"
                  >
                    <img src={facebook} alt="icon" />
                  </a>
                  <Button
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    variant="primary"
                    className="mx-3 px-4 py-2 fs-7 fw-bold border-0"
                    size="l"
                    style={{ background: "#92201c", borderRadius: "30px" }}
                  >
                    <i className="fa fa-whatsapp px-2"></i>
                    HUBUNGI KAMI
                  </Button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
