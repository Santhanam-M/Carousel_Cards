import retirementIcon from "../images/retirement-icon.png"; // Import the retirement icon image
import siren from "../images/siren.png";
import wedding from "../images/wedding-ring.png";
import vacations from "../images/vacations.png";
import mortarboard from "../images/mortarboard.png";

function Cards() {
  const inputData = [
    {
      id: 1,
      icon: retirementIcon,
      heading: "Dhairyadev & Sayalis Retirement Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Excellent",
    },
    {
      id: 2,
      icon: siren,
      heading: "Dhairyadev & Sayalis Emergency Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Good",
    },

    {
      id: 3,
      icon: wedding,
      heading: "Dhairyadev & Sayalis Wedding Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Good",
    },

    {
      id: 4,
      icon: vacations,
      heading: "Dhairyadev & Sayalis Vacation Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Poor",
    },

    {
      id: 5,
      icon: mortarboard,
      heading: "Dhairyadev & Sayalis Education Plan 1",
      goalProgress: "11,24,00,000",
      goalAmount: "15,00,00,000",
      goalDated: "March 2025",
      goalHealth: "Weak",
    },
  ];

  return (
    <div className="container card custom-carousel p-3 mt-4">
      <h5 className="fw-bold m-2">Track Goals</h5>
      <hr />

      <div className="row container-fluid ">
        {inputData.map((ele) => {
          return (
            <div
              className="col-lg-4 col-xl-4 col-sm-6 col-md-4 mb-3"
              key={ele.id}
            >
              <div className="card p-3 rounded-4">
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
                    <p className="fw-bold">{ele.goalHealth}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
