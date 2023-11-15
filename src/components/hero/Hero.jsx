import Carousel from "react-bootstrap/Carousel"
import Image from 'react-bootstrap/Image'


function Hero() {
  return (
    <>
    <div className="relative bg-primary pt-4 pb-12">
          <div className="row">
            <div className="col-sm-3 relative container mx-auto  items-center">
             <div className="w-full">  
            <div className="py-8">
              <h1 className="font-semibold text-white text-[32px] mb-4">Distributor Aneka Produk Bangunan, Plafon dan Partisi</h1>
            </div>
              <a
                href="/brand"
                className="btn bg-white text-primary font-medium text-sm btn-lg active"
                role="button"
                aria-pressed="true"
              >
                <svg class="svg-icon h-5 w-5" width="20" height="20" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H21C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H17V20.993C17 21.549 16.551 22 15.993 22H3.007C2.87472 22.0001 2.74372 21.9742 2.62148 21.9236C2.49925 21.8731 2.38819 21.7989 2.29465 21.7053C2.20112 21.6118 2.12695 21.5008 2.07639 21.3785C2.02583 21.2563 1.99987 21.1253 2 20.993L2.003 8.007C2.003 7.451 2.452 7 3.01 7H7ZM9 7H15.993C16.549 7 17 7.449 17 8.007V15H20V4H9V7ZM4.003 9L4 20H15V9H4.003Z" fill="currentColor"></path></svg>
                Hubungi Kami
              </a>
            </div>
            </div> 

            <div className="col-sm-7">
            <div className="w-full mx-5 my-3">
            <Carousel>
      <Carousel.Item>
        <Image rounded className="w-full h-full object-cover" src="https://dps-interdesign.com/wp-content/uploads/2023/01/home-slide-05.jpg" alt="first" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image rounded className="w-full h-full object-cover" src="https://dps-interdesign.com/wp-content/uploads/2023/01/home-slide-06.jpg" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image rounded className="w-full h-full object-cover" src="https://dps-interdesign.com/wp-content/uploads/2023/01/home-slide-07.jpg" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero