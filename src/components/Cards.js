import retirementIcon from "../images/retirement-icon.png"; // Import the retirement icon image
import siren from "../images/siren.png";
import wedding from "../images/wedding-ring.png";
import vacations from "../images/vacations.png";
import mortarboard from "../images/mortarboard.png";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Cards() {

  const handleCardClick = () =>{
    window.open('https://www.linkedin.com/in/santhanam1994', "_blank")
  }

  const inputData = [
    {
      id: 1,
      icon: retirementIcon,
      heading: "Dhairyadev & Sayalis Retirement Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Excellent",
      goalColor : 'success',
      goalProgress1: 40,
      goalProgress2: 15,
      goalProgress3: 22,
      text : 'Goal ahead by 16 months'
    },
    {
      id: 2,
      icon: siren,
      heading: "Dhairyadev & Sayalis Emergency Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Good",
      goalColor : 'success',
      goalProgress1: 40,
      goalProgress2: 15,
      goalProgress3: 25,
      text : 'On track'
    },

    {
      id: 3,
      icon: wedding,
      heading: "Dhairyadev & Sayalis Wedding Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Weak",
      goalColor : 'warning',
      goalProgress1: 20,
      goalProgress2: 5,
      goalProgress3: 30,
      text : 'Goal behind by 2 months'
    },

    {
      id: 4,
      icon: vacations,
      heading: "Dhairyadev & Sayalis Vacation Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Poor",
      goalColor : 'danger',
      goalProgress1: 15,
      goalProgress2: 20,
      goalProgress3: 30,
      text : 'Goal behind by 18 months'
    },

    {
      id: 5,
      icon: mortarboard,
      heading: "Dhairyadev & Sayalis Education Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Reached",
      goalColor : 'primary',
      goalProgress1: 60,
      goalProgress2: 5,
      goalProgress3: 20,
      text : 'Goal reached 3 months ahead'
    },
  ];

  return (
    <div className="container card custom-carousel p-3 mt-4">

      <div className="row justify-content-between">
      <div className="col-lg-8 col-md-8">
        <h5 className="fw-bold m-2">Track Goals</h5>
      </div>

      <div className="col-lg-3 col-md-3">
        <input type="search" className="form-control" placeholder="Search"/>
      </div>
      </div>
      <hr />

      <div className="row container ">
        {inputData.map((ele) => {
          return (

            <div
              className="col-lg-6 col-xl-4 col-sm-12 col-md-12 mb-3"
              key={ele.id}
              onClick={handleCardClick}
              style={{ cursor: "pointer" }}
            >
              <div className="card p-3 rounded-4 card-customize">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-xl-3">
                    <img
                      src={ele.icon}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>

                  <div className="col-lg-9 col-xl-9 mt-2">
                    <h6 className="fw-bolder">{ele.heading}</h6>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-lg-6 col-xl-6">
                    <h6 className="fw-bolder" style={{ color: "gray" }}>
                      Goals Created
                    </h6>
                    <p className="fw-bold">{ele.goalProgress}</p>
                  </div>

                  <div className="col-lg-6 col-xl-6">
                    <h6 className="fw-bolder" style={{ color: "gray" }}>
                      Goals Amount
                    </h6>
                    <p className="fw-bold">{ele.goalAmount}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-xl-6">
                    <h6 className="fw-bolder" style={{ color: "gray" }}>
                      Goals Date
                    </h6>
                    <p className="fw-bold">{ele.goalDated}</p>
                  </div>

                  <div className="col-lg-6 col-xl-6">
                    <h6 className="fw-bolder" style={{ color: "gray" }}>
                      Goals Health
                    </h6>
                    <p className={`fw-bolder text-${ele.goalColor}`}>{ele.goalHealth}</p>
                  </div>
                </div>
                <hr />

               {/* ProgressBar */}
               <ProgressBar>
                <ProgressBar  variant={ele.goalColor} now={ele.goalProgress1} key={1} />
                <ProgressBar striped variant={ele.goalColor} now={ele.goalProgress2} key={2} />
                <ProgressBar striped variant={ele.goalColor} now={ele.goalProgress3} key={3} />
               </ProgressBar>

               <p className={`text-${ele.goalColor}`}>{ele.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
