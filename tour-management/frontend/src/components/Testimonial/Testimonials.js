import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            mollitia accusantium, libero, amet modi nam nihil nesciunt odit
            ipsum laborum recusandae iste, tenetur voluptatibus?
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="John Doe" />
            <div>
              <h6 className="mb-0 mt-3">Alice Johnson</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            mollitia accusantium, libero, amet modi nam nihil nesciunt odit
            ipsum laborum recusandae iste, tenetur voluptatibus?
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="Jane Smith" />
            <div>
              <h6 className="mb-0 mt-3">Lia Franklin</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            mollitia accusantium, libero, amet modi nam nihil nesciunt odit
            ipsum laborum recusandae iste, tenetur voluptatibus?
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img
              src={ava03}
              className="w-25 h-25 rounded-2"
              alt="Mark Wilson"
            />
            <div>
              <h6 className="mb-0 mt-3">Mark Wilson</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            mollitia accusantium, libero, amet modi nam nihil nesciunt odit
            ipsum laborum recusandae iste, tenetur voluptatibus?
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img
              src={ava03}
              className="w-25 h-25 rounded-2"
              alt="Mark Wilson"
            />
            <div>
              <h6 className="mb-0 mt-3">Mark Wilson</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Testimonials;