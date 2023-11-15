import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";

function Header() {
  return (
    <>
      <div>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container className="mx-auto my-3 container">
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
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">
                      <span>Home</span>
                    </Nav.Link>
                    <Nav.Link href="/profil">Profil</Nav.Link>
                    <NavDropdown
                      title="Produk"
                      href="/produk"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/lokasi">Lokasi</Nav.Link>
                    <Nav.Link href="/artikel">Artikel</Nav.Link>
                  </Nav>

                  <a
                    href="https://www.tokopedia.com/atappla"
                    target="_blank"
                    rel="noreferrer"
                    className="-mt-1.5 mr-0.5 inline-block"
                  >
                    <svg
                      className="svg-icon h-7 w-7"
                      width="28"
                      height="28"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 260 294"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M130.059 67.7882C143.847 60.8945 160.576 57.1406 175.889 55.8133L193.083 54.3177C211.932 52.6933 230.791 53.6838 249.65 53.6838H260V64.0343C260 109.963 260 155.911 260 201.849V207.128C260 254.552 221.223 293.33 173.779 293.33H0V53.6838H10.3406C29.229 53.6838 48.0183 52.4457 66.8968 53.9116L84.1013 55.2092C100.434 56.4373 115.39 60.4092 130.059 67.7882Z"
                        fill="#4D4C4B"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.3406 64.0343V182.089V201.849V207.128V282.999H86.1912H98.1166H173.779C215.518 282.999 249.65 248.847 249.65 207.128V201.849C249.65 156.178 249.65 111.627 249.65 64.0343C231.524 64.0343 212.368 63.5886 193.985 64.6286L176.78 66.1143C159.942 68.1547 142.906 72.0869 130 79.5353C116.064 71.4827 100.87 67.4812 83.3189 65.52L66.1143 64.2126C47.3547 63.341 28.1196 64.0343 10.3406 64.0343Z"
                        fill="#5FB74E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31.7944 282.999H86.1914H98.1167H173.779C192.271 282.999 209.258 276.293 222.441 265.21C207.039 229.404 171.442 204.345 129.99 204.345C81.9719 204.345 41.8081 237.982 31.7944 282.999Z"
                        fill="#89C45F"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M130 282.999L174.67 282.335C192.905 282.335 209.515 275.897 222.451 265.22C239.101 251.452 249.65 230.613 249.65 207.128V201.849C249.65 156.178 249.65 111.627 249.65 64.0343C231.524 64.0343 212.368 63.5886 193.985 64.6286L176.78 66.1143C159.942 68.1547 142.906 72.0868 130 79.5352V282.999Z"
                        fill="#4A9E4B"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M130 282.999H174.056C192.549 282.999 209.258 276.293 222.451 265.22C207.218 229.81 170.847 204.91 130 204.365V282.999Z"
                        fill="#5FB74E"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M193.985 57.4575C190.696 25.168 163.399 0 130.267 0C97.1459 0 69.8682 24.9501 66.1143 57.0613L83.3188 58.3688C86.3596 35.1817 106.12 17.2442 130.198 17.2442C154.267 17.2442 174.205 35.4789 176.78 58.9432L193.985 57.4575Z"
                        fill="#4D4C4B"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M157.981 214.438C150.483 222.372 142.995 230.296 135.507 238.239L129.99 244.083L124.483 238.239C116.995 230.315 109.507 222.372 102.009 214.438L98.1365 210.318L100.969 205.435C106.981 195.064 118.223 189.488 129.99 189.488C141.777 189.488 153.009 195.064 159.021 205.435L161.864 210.318L157.981 214.438Z"
                        fill="#4D4C4B"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M152.464 209.238C144.986 217.172 137.478 225.096 129.99 233.039C122.502 225.096 115.014 217.172 107.516 209.238C112.251 201.087 121.135 197.055 129.99 197.065C138.855 197.055 147.73 201.087 152.464 209.238Z"
                        fill="#FDF8B4"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M152.464 209.238C144.986 217.172 137.478 225.096 129.99 233.039V197.065C138.855 197.055 147.729 201.087 152.464 209.238Z"
                        fill="#FCD066"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M73.84 93.8773C107.407 93.8773 134.635 121.115 134.635 154.663C134.635 188.23 107.407 215.458 73.84 215.458C40.2727 215.458 13.0544 188.23 13.0544 154.663C13.0544 121.115 40.2727 93.8773 73.84 93.8773Z"
                        fill="#4D4C4B"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M73.8401 104.218C96.829 104.218 116.242 119.61 122.314 140.648C116.242 161.675 96.829 177.067 73.8401 177.067C50.8412 177.067 31.4576 161.675 25.3761 140.648C31.4576 119.61 50.8412 104.218 73.8401 104.218Z"
                        fill="#FEFEFE"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M186.15 93.8773C219.717 93.8773 246.936 121.115 246.936 154.663C246.936 188.23 219.717 215.458 186.15 215.458C152.583 215.458 125.355 188.25 125.355 154.663C125.355 121.115 152.583 93.8773 186.15 93.8773Z"
                        fill="#4D4C4B"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M186.15 104.218C214.002 104.218 236.595 126.811 236.595 154.663C236.595 182.525 214.002 205.118 186.15 205.118C158.288 205.118 135.705 182.525 135.705 154.663C135.705 126.811 158.288 104.218 186.15 104.218Z"
                        fill="#EEEFEE"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M186.15 104.218C209.139 104.218 228.543 119.61 234.614 140.648C228.543 161.675 209.139 177.067 186.15 177.067C163.151 177.067 143.748 161.675 137.666 140.648C143.748 119.61 163.151 104.218 186.15 104.218Z"
                        fill="#FEFEFE"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M80.1791 123.294C98.176 123.294 112.766 137.884 112.766 155.851C112.766 173.858 98.176 188.448 80.1791 188.448C62.1821 188.448 47.5924 173.858 47.5924 155.851C47.5924 149.859 49.2267 144.243 52.0594 139.41C54.3871 145.164 60.013 149.205 66.6095 149.205C75.2762 149.205 82.3086 142.193 82.3086 133.526C82.3086 129.624 80.8823 126.058 78.5349 123.324C79.0796 123.294 79.6343 123.294 80.1791 123.294Z"
                        fill="#4D4C4B"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M179.801 123.294C197.808 123.294 212.388 137.884 212.388 155.851C212.388 173.858 197.808 188.448 179.791 188.448C161.814 188.448 147.224 173.858 147.224 155.851C147.224 149.859 148.849 144.243 151.672 139.41C154.009 145.164 159.645 149.205 166.242 149.205C174.898 149.205 181.921 142.193 181.921 133.526C181.921 129.624 180.514 126.058 178.167 123.324C178.712 123.294 179.247 123.294 179.801 123.294Z"
                        fill="#4D4C4B"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/dps.interdesign"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-slate-500 hover:text-primary mx-2"
                  >
                    <svg
                      className="svg-icon h-7 w-7"
                      width="28"
                      height="28"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_47_429)">
                        <path
                          d="M64.031 0.969666C37.7123 0.969666 30.0151 0.996816 28.5189 1.12093C23.1179 1.56989 19.757 2.42029 16.0955 4.24326C13.2738 5.64443 11.0484 7.26863 8.8521 9.54541C4.85223 13.6975 2.42806 18.8057 1.55051 24.8778C1.12385 27.8256 0.999736 28.4268 0.974524 43.4838C0.964828 48.5028 0.974524 55.1081 0.974524 63.968C0.974524 90.2654 1.00361 97.9548 1.12967 99.4481C1.56602 104.704 2.39024 108.01 4.13564 111.627C7.4713 118.551 13.842 123.748 21.3472 125.687C23.946 126.356 26.8162 126.725 30.5009 126.899C32.0621 126.967 47.9743 127.016 63.8963 127.016C79.8182 127.016 95.7401 126.996 97.2625 126.919C101.529 126.718 104.007 126.385 106.746 125.678C114.3 123.729 120.554 118.609 123.957 111.588C125.669 108.059 126.537 104.626 126.929 99.645C127.015 98.559 127.051 81.2436 127.051 63.9515C127.051 46.6565 127.012 29.3732 126.927 28.2871C126.529 23.2255 125.661 19.8219 123.894 16.2245C122.445 13.2796 120.835 11.0804 118.498 8.83173C114.328 4.84834 109.227 2.42417 103.149 1.54759C100.204 1.1219 99.6178 0.995847 84.5492 0.969666H64.031Z"
                          fill="url(#paint0_radial_47_429)"
                        ></path>
                        <path
                          d="M64.031 0.969666C37.7123 0.969666 30.0151 0.996816 28.5189 1.12093C23.1179 1.56989 19.757 2.42029 16.0955 4.24326C13.2738 5.64443 11.0484 7.26863 8.8521 9.54541C4.85223 13.6975 2.42806 18.8057 1.55051 24.8778C1.12385 27.8256 0.999736 28.4268 0.974524 43.4838C0.964828 48.5028 0.974524 55.1081 0.974524 63.968C0.974524 90.2654 1.00361 97.9548 1.12967 99.4481C1.56602 104.704 2.39024 108.01 4.13564 111.627C7.4713 118.551 13.842 123.748 21.3472 125.687C23.946 126.356 26.8162 126.725 30.5009 126.899C32.0621 126.967 47.9743 127.016 63.8963 127.016C79.8182 127.016 95.7401 126.996 97.2625 126.919C101.529 126.718 104.007 126.385 106.746 125.678C114.3 123.729 120.554 118.609 123.957 111.588C125.669 108.059 126.537 104.626 126.929 99.645C127.015 98.559 127.051 81.2436 127.051 63.9515C127.051 46.6565 127.012 29.3732 126.927 28.2871C126.529 23.2255 125.661 19.8219 123.894 16.2245C122.445 13.2796 120.835 11.0804 118.498 8.83173C114.328 4.84834 109.227 2.42417 103.149 1.54759C100.204 1.1219 99.6178 0.995847 84.5492 0.969666H64.031Z"
                          fill="url(#paint1_radial_47_429)"
                        ></path>
                        <path
                          d="M64.0019 17.454C51.3613 17.454 49.7749 17.5093 44.8102 17.7352C39.8552 17.9621 36.473 18.7466 33.5136 19.8976C30.4524 21.0864 27.8556 22.6766 25.2685 25.2647C22.6795 27.8518 21.0893 30.4485 19.8966 33.5088C18.7427 36.4692 17.9572 39.8524 17.7342 44.8054C17.5122 49.7701 17.454 51.3575 17.454 63.9981C17.454 76.6386 17.5102 78.2202 17.7352 83.1849C17.9631 88.1399 18.7475 91.5221 19.8975 94.4815C21.0873 97.5427 22.6776 100.14 25.2656 102.727C27.8517 105.316 30.4485 106.91 33.5078 108.099C36.4692 109.25 39.8523 110.034 44.8064 110.261C49.7711 110.487 51.3565 110.542 63.9961 110.542C76.6376 110.542 78.2192 110.487 83.1839 110.261C88.1389 110.034 91.525 109.25 94.4863 108.099C97.5466 106.91 100.139 105.316 102.726 102.727C105.315 100.14 106.905 97.5427 108.098 94.4825C109.242 91.5221 110.027 88.1389 110.26 83.1858C110.483 78.2211 110.541 76.6386 110.541 63.9981C110.541 51.3575 110.483 49.7711 110.26 44.8064C110.027 39.8514 109.242 36.4692 108.098 33.5098C106.905 30.4485 105.315 27.8518 102.726 25.2647C100.137 22.6757 97.5476 21.0854 94.4834 19.8976C91.5162 18.7466 88.1321 17.9621 83.1771 17.7352C78.2124 17.5093 76.6318 17.454 63.9874 17.454H64.0019ZM59.8265 25.8416C61.0658 25.8397 62.4485 25.8416 64.0019 25.8416C76.4292 25.8416 77.9021 25.8862 82.8096 26.1093C87.3476 26.3168 89.8106 27.0751 91.4513 27.7121C93.6233 28.5557 95.1719 29.5642 96.7999 31.1932C98.429 32.8223 99.4374 34.3737 100.283 36.5458C100.92 38.1845 101.679 40.6475 101.886 45.1855C102.109 50.0921 102.157 51.5659 102.157 63.9874C102.157 76.4088 102.109 77.8827 101.886 82.7892C101.678 87.3273 100.92 89.7902 100.283 91.429C99.4394 93.601 98.429 95.1477 96.7999 96.7757C95.1709 98.4048 93.6243 99.4132 91.4513 100.257C89.8125 100.897 87.3476 101.653 82.8096 101.861C77.9031 102.084 76.4292 102.132 64.0019 102.132C51.5737 102.132 50.1008 102.084 45.1942 101.861C40.6562 101.651 38.1932 100.893 36.5516 100.256C34.3795 99.4123 32.8281 98.4038 31.199 96.7748C29.57 95.1457 28.5615 93.5981 27.716 91.4251C27.0789 89.7864 26.3197 87.3234 26.1131 82.7854C25.8901 77.8788 25.8455 76.4049 25.8455 63.9758C25.8455 51.5466 25.8901 50.0804 26.1131 45.1739C26.3206 40.6359 27.0789 38.1729 27.716 36.5322C28.5596 34.3602 29.57 32.8087 31.199 31.1797C32.8281 29.5506 34.3795 28.5422 36.5516 27.6966C38.1923 27.0566 40.6562 26.3003 45.1942 26.0918C49.4879 25.8979 51.1519 25.8397 59.8265 25.83V25.8416ZM88.8467 33.5699C85.7632 33.5699 83.2614 36.0687 83.2614 39.1532C83.2614 42.2368 85.7632 44.7385 88.8467 44.7385C91.9303 44.7385 94.432 42.2368 94.432 39.1532C94.432 36.0697 91.9303 33.5679 88.8467 33.5679V33.5699ZM64.0019 40.0957C50.8018 40.0957 40.0996 50.798 40.0996 63.9981C40.0996 77.1981 50.8018 87.8955 64.0019 87.8955C77.202 87.8955 87.9003 77.1981 87.9003 63.9981C87.9003 50.798 77.202 40.0957 64.0019 40.0957ZM64.0019 48.4834C72.5699 48.4834 79.5166 55.4291 79.5166 63.9981C79.5166 72.566 72.5699 79.5127 64.0019 79.5127C55.4329 79.5127 48.4872 72.566 48.4872 63.9981C48.4872 55.4291 55.4329 48.4834 64.0019 48.4834Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_47_429"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(34.4605 136.724) rotate(-90) scale(124.921 116.218)"
                        >
                          <stop stopColor="#FFDD55"></stop>
                          <stop offset="0.1" stopColor="#FFDD55"></stop>
                          <stop offset="0.5" stopColor="#FF543E"></stop>
                          <stop offset="1" stopColor="#C837AB"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_47_429"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(-20.1489 10.0498) rotate(78.6776) scale(55.8408 230.236)"
                        >
                          <stop stopColor="#3771C8"></stop>
                          <stop offset="0.128" stopColor="#3771C8"></stop>
                          <stop
                            offset="1"
                            stopColor="#6600FF"
                            stopOpacity="0"
                          ></stop>
                        </radialGradient>
                        <clipPath id="clip0_47_429">
                          <rect
                            width="128"
                            height="127.996"
                            fill="white"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/dps.interdesign"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-slate-500 hover:text-primary"
                  >
                    <svg
                      className="svg-icon h-7 w-7"
                      width="28"
                      height="28"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_47_426)">
                        <path
                          d="M53.44 127.36C23.04 121.92 0 95.68 0 64C0 28.8 28.8 0 64 0C99.2 0 128 28.8 128 64C128 95.68 104.96 121.92 74.56 127.36L71.04 124.48H56.96L53.44 127.36Z"
                          fill="url(#paint0_linear_47_426)"
                        ></path>
                        <path
                          d="M88.96 81.92L91.84 64H74.88V51.52C74.88 46.4 76.8 42.56 84.48 42.56H92.8V26.24C88.32 25.6 83.2 24.96 78.72 24.96C64 24.96 53.76 33.92 53.76 49.92V64H37.76V81.92H53.76V127.04C57.28 127.68 60.8 128 64.32 128C67.84 128 71.36 127.68 74.88 127.04V81.92H88.96Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_47_426"
                          x1="64.0032"
                          y1="123.549"
                          x2="64.0032"
                          y2="-0.0235769"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0062E0"></stop>
                          <stop offset="1" stopColor="#19AFFF"></stop>
                        </linearGradient>
                        <clipPath id="clip0_47_426">
                          <rect width="128" height="128" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <Button
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    variant="primary"
                    className="mx-3 my-0"
                    size="l"
                  >
                    HUBUNGI KAMI
                  </Button>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default Header;
