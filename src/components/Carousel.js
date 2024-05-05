import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import retirementIcon from '../images/retirement-icon.png'; // Import the retirement icon image
import siren from '../images/siren.png';
import wedding from '../images/wedding-ring.png'
import vacations from '../images/vacations.png'
import mortarboard from '../images/mortarboard.png'
import wealth from '../images/wealth.png'

// Array of Input Data
const plans = [
  { id: 1, icon :retirementIcon , heading: "Retirement", text: "Your old age, taken care of" },
  { id: 2, icon :siren, heading: "Emergency", text: "Be prepared at all times" },
  { id: 3, icon: wedding, heading: "Wedding", text: "Plan your dream wedding today" },
  { id: 4, icon: vacations, heading: "Vacation", text: "Never too late for the Bahamas!" },
  { id: 5, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 6, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 7, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 8, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 9, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 10, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 11, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 12, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 13, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 14, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
  { id: 15, icon : mortarboard, heading: "Education", text: "Build your career, tension-free" },
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

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <div className="container card custom-carousel p-4">
      <Slider {...settings} responsive={responsiveSettings}>
        <div className="ps-4">
          <h6 className="fw-bold">
            What financial goal do you want to plan today?
          </h6>

          <p><small>Select a goal to start planning</small></p>

          <div className="d-flex justify-content-center me-5">
            <img src={wealth} style={{ width: '70px', height: '70px' }}/>
          </div>
          
        </div>

        {plans.map((ele, i) => {
          return (
            <div className="ps-4 pe-4" key={i} >
                <a href="https://www.linkedin.com/in/santhanam1994" key={i} target="_blank">
                  <img src={ele.icon} style={{width : '50px', height: '50px'}}/>
                </a>
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
