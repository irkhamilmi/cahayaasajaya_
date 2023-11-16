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

import facebook from "./../../assets/icons/fb.svg";
import ig from "./../../assets/icons/ig.svg";
import tokoped from "./../../assets/icons/toko.svg";

function Header() {
  return (
    <>
     
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-body-tertiary p-0">
            <Container className="mx-auto my-1 container">
              <Navbar.Brand href="/">
                <svg
                  className="svg-icon"
                  width="116"
                  height="46"
                  viewBox="0 0 116 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#4D4DAB">
                    <path d="M38.1976 0.00012207H20.104V5C27.7827 5 34.5038 9.07875 38.1976 15.1772V0.00012207Z"></path>
                    <path d="M35.7985 38.5C32.1141 43.0722 26.4527 45.9999 20.104 45.9999C13.7552 45.9999 8.09384 43.0722 4.40948 38.5H21.0453C22.262 40.5922 24.5359 41.9999 27.1403 41.9999C29.7447 41.9999 32.0187 40.5922 33.2353 38.5H35.7985Z"></path>
                    <path d="M36.5541 37.5C38.8562 34.247 40.208 30.2805 40.208 25.9999C40.208 14.9542 31.2071 5.99988 20.104 5.99988C9.00086 5.99988 0 14.9542 0 25.9999C0 30.2805 1.35179 34.247 3.65386 37.5H20.566C20.2675 36.7236 20.1039 35.8807 20.1039 34.9999C20.1039 31.1339 23.2542 27.9999 27.1403 27.9999C31.0264 27.9999 34.1767 31.1339 34.1767 34.9999C34.1767 35.8807 34.0132 36.7236 33.7147 37.5H36.5541Z"></path>
                    <path d="M114.465 28.4524L114.264 20.2501H113.715C113.557 20.9881 113.386 21.4538 113.204 21.6474C113.021 21.841 112.771 21.9378 112.454 21.9378C112.125 21.9378 111.547 21.7442 110.718 21.3571C109.902 20.9578 109.207 20.6856 108.635 20.5405C107.879 20.3469 107.099 20.2501 106.295 20.2501C104.09 20.2501 102.262 20.9397 100.812 22.3188C99.3624 23.698 98.6375 25.3675 98.6375 27.3273C98.6375 28.4766 98.8994 29.5291 99.4233 30.4848C99.9595 31.4405 100.721 32.3055 101.708 33.0798C102.695 33.854 104.315 34.7916 106.569 35.8925C108.178 36.6788 109.299 37.32 109.932 37.816C110.566 38.2999 111.035 38.8141 111.34 39.3585C111.656 39.9029 111.815 40.4654 111.815 41.0461C111.815 42.026 111.407 42.885 110.59 43.6229C109.786 44.3609 108.702 44.7299 107.337 44.7299C105.57 44.7299 103.919 44.0463 102.384 42.6793C100.861 41.3002 99.8315 39.304 99.2954 36.6909H98.6192V45.982H99.2954C99.5147 45.486 99.8011 45.117 100.154 44.875C100.508 44.6331 100.843 44.5121 101.16 44.5121C101.537 44.5121 102.019 44.6331 102.603 44.875C103.651 45.3106 104.522 45.6069 105.217 45.7642C105.911 45.9215 106.649 46.0001 107.428 46.0001C109.914 46.0001 111.961 45.2622 113.569 43.7862C115.19 42.2982 116 40.5259 116 38.4693C116 36.8482 115.5 35.4086 114.501 34.1504C113.49 32.8922 111.534 31.5554 108.635 30.14C106.563 29.1238 105.241 28.4161 104.669 28.0169C103.889 27.4604 103.322 26.8978 102.969 26.3292C102.713 25.9058 102.585 25.4219 102.585 24.8775C102.585 24.0186 102.945 23.2625 103.663 22.6092C104.395 21.9438 105.381 21.6111 106.624 21.6111C108.233 21.6111 109.725 22.2402 111.102 23.4984C112.491 24.7444 113.362 26.3958 113.715 28.4524H114.465Z"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M47.2444 45.4194V44.748H48.0668C48.7857 44.748 49.334 44.6391 49.7117 44.4214C50.1016 44.1915 50.3879 43.883 50.5707 43.4959C50.6803 43.2418 50.7351 42.4797 50.7351 41.2094V25.0227C50.7351 23.7645 50.6681 22.9782 50.5341 22.6636C50.4001 22.3491 50.1259 22.0769 49.7117 21.847C49.3096 21.6051 48.7613 21.4841 48.0668 21.4841H47.2444V20.8127H58.3381C61.2989 20.8127 63.6809 21.2119 65.4842 22.0103C67.6895 22.9903 69.3587 24.4722 70.4919 26.4563C71.6372 28.4403 72.2099 30.6844 72.2099 33.1886C72.2099 34.9186 71.9296 36.5155 71.3692 37.9793C70.8087 39.4311 70.0837 40.6348 69.1943 41.5905C68.3048 42.5341 67.2752 43.2963 66.1056 43.877C64.9481 44.4456 63.5286 44.8871 61.8472 45.2017C61.1039 45.3468 59.9342 45.4194 58.3381 45.4194H47.2444ZM56.6932 22.21V41.409C56.6932 42.4252 56.742 43.0483 56.8394 43.2781C56.9369 43.508 57.1014 43.6834 57.3329 43.8044C57.6619 43.9859 58.1371 44.0766 58.7585 44.0766C60.7932 44.0766 62.3467 43.387 63.4189 42.0079C64.881 40.1448 65.6121 37.2535 65.6121 33.3338C65.6121 30.1763 65.1125 27.6539 64.1134 25.7667C63.3215 24.2908 62.3041 23.2866 61.0613 22.7544C60.184 22.3793 58.728 22.1979 56.6932 22.21Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M83.9067 34.2774V41.1005C83.9067 42.4313 83.9859 43.2721 84.1443 43.6229C84.3149 43.9617 84.6073 44.2339 85.0216 44.4395C85.448 44.6452 86.2217 44.748 87.3427 44.748V45.4194H74.7503V44.748C75.8956 44.748 76.6693 44.6452 77.0714 44.4395C77.4856 44.2218 77.772 43.9435 77.9304 43.6048C78.1009 43.266 78.1862 42.4313 78.1862 41.1005V25.1316C78.1862 23.8008 78.1009 22.9661 77.9304 22.6273C77.772 22.2765 77.4856 21.9982 77.0714 21.7926C76.6571 21.5869 75.8834 21.4841 74.7503 21.4841V20.8127H85.5516C89.1094 20.8127 91.662 21.4417 93.2094 22.6999C94.7568 23.9581 95.5305 25.5308 95.5305 27.418C95.5305 29.0149 95.0309 30.382 94.0318 31.5191C93.0327 32.6563 91.6559 33.4306 89.9014 33.8419C88.7195 34.1323 86.7213 34.2774 83.9067 34.2774ZM83.9067 22.2281V32.862C84.3088 32.8862 84.6134 32.8983 84.8205 32.8983C86.307 32.8983 87.4523 32.4628 88.2565 31.5917C89.0607 30.7086 89.4627 29.3476 89.4627 27.5088C89.4627 25.682 89.0607 24.3452 88.2565 23.4984C87.4523 22.6515 86.2522 22.2281 84.6561 22.2281H83.9067Z"
                    ></path>
                  </g>
                </svg>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="align-text-bottom mt-4 mb-0">
                  <Nav className="justify-content-start flex-grow-1 fs-6 fw-semibold align-text-bottom">
                    <Nav.Link href="/">
                      <span>Home</span>
                    </Nav.Link>
                    <Nav.Link href="/profil">Profil</Nav.Link>
                    <NavDropdown title="Produk" id="basic-nav-dropdown">
                      <div className="eventsNav">
                        <Row>
                          <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>Catering</Dropdown.Header>
                            <Dropdown.Item>
                              <Link href="/">
                                <a className="nav-link" role="button">
                                  Corporate
                                </a>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link href="/">
                                <a className="nav-link" role="button">
                                  Private
                                </a>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Classes</Dropdown.Header>
                            <Dropdown.Item>
                              <Link href="/">
                                <a className="nav-link" role="button">
                                  Barista 101
                                </a>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link href="/">
                                <a className="nav-link" role="button">
                                  History of Coffee
                                </a>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link href="/">
                                <a className="nav-link" role="button">
                                  Intro to Cafe Snobbery
                                </a>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider className="d-md-none" />
                          </Col>

                          <Col xs="12" md="6" className="text-left">
                            <Dropdown.Header>Rentals</Dropdown.Header>
                            <Dropdown.Item>
                              <Link href="/">
                                <a className="nav-link" role="button">
                                  Fireside Room
                                </a>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link href="/">
                                <a className="nav-link" role="button">
                                  Roasting Room
                                </a>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Seasonal</Dropdown.Header>
                            <Dropdown.Item>
                              <Link href="/">
                                <a className="nav-link" role="button">
                                  Coldbrew Night
                                </a>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link href="/">
                                <a className="nav-link text-wrap" role="button">
                                  Campfire Coffee Class
                                </a>
                              </Link>
                            </Dropdown.Item>
                          </Col>
                        </Row>
                      </div>
                    </NavDropdown>
                    <Nav.Link href="/lokasi">Lokasi</Nav.Link>
                    <Nav.Link href="/artikel">Artikel</Nav.Link>
                  </Nav>
                  <div className="align-items-center">
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
                      className="mx-3 px-4 fs-7 fw-bold"
                      size="l"
                      style={{ background: "#4D4DAB", borderRadius: "30px" }}
                    >
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
