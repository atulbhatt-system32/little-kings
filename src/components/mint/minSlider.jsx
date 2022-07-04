import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import sliderImg_1 from "../../image/mintImg_1.png";
import sliderImg_2 from "../../image/mintImg_2.png";

const sliderData = {
  nav: false,
  loop: true,
  margin: 17,
  dots: false,
  stagePadding: 100,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3,
      stagePadding: 0,
    },
    420: {
      items: 2,
      stagePadding: 100,
    },
    575: {
      items: 4,
      stagePadding: 30,
    },
    768: {
      items: 4,
    },
    991: {
      items: 5,
    },
    1200: {
      items: 7,
    },
  },
};

const sliderData1 = {
  nav: false,
  loop: true,
  margin: 17,
  dots: false,
  stagePadding: 100,
  autoplay: true,
  autoplaySpeed: 2500,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  rtl: true,
  responsive: {
    0: {
      items: 3,
      stagePadding: 0,
    },
    420: {
      items: 2,
      stagePadding: 100,
    },
    575: {
      items: 4,
      stagePadding: 30,
    },
    768: {
      items: 4,
    },
    991: {
      items: 5,
    },
    1200: {
      items: 7,
    },
  },
};

const imgData = [{ image: sliderImg_1 }, { image: sliderImg_2 }];

const MinSlider = () => {
  return (
    <section className="minSliderSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 pl-0 pr-0">
            <OwlCarousel OwlCarousel className="owl-theme" {...sliderData}>
              {imgData.map((m) => (
                <div className="item" key={m.image}>
                  <img src={m.image} />
                </div>
              ))}
            </OwlCarousel>

            <OwlCarousel OwlCarousel className="owl-theme d-block d-sm-none mt-4" {...sliderData1}>
              {imgData.map((m) => (
                <div className="item" key={m.image}>
                  <img src={m.image} />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinSlider;
