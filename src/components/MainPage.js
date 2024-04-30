import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of Input Data
const plans = [
  { id: 1, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 2, heading: "Emergency", text: "Your old age, taken care of" },
  { id: 3, heading: "Retirement", text: "Be prepared at all times" },
  { id: 4, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 5, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 6, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 7, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 8, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 9, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 10, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 11, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 12, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 13, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 14, heading: "Retirement", text: "Your old age, taken care of" },
  { id: 14, heading: "Retirement", text: "Your old age, taken care of" },
];

//Left Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        textAlign: "center",
        lineHeight: "27px",
        fontSize: "30px",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}

//Right Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        textAlign: "center",
        lineHeight: "27px",
        fontSize: "30px",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}

//Components
function Carousel() {
  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container card custom-carousel p-4">
      <Slider {...settings}>
        <div className="ps-4">
          <h6 className="fw-bold">
            What financial goal do you want to plan today?
          </h6>
          <p><small>Select a goal to start planning</small></p>
        </div>

        {plans.map((ele, i) => {
          return (
            <div className="ps-4 pe-5" key={i} >
              <h6 className="fw-bold">{ele.heading}</h6>
              <p className="text-muted">{ele.text}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
