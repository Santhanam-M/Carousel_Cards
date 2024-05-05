import Fabits from "../images/Fabits_img.png";

function SideBar() {
  return (
    <div className="sidebar sticky-top container">
      <img src={Fabits} style={{ width: "50%", height: "50%" }} alt="logo" />

      <div className="list-group mt-4">
        <ul>
          <i className="fa fa-home" aria-hidden="true"></i> Home
        </ul>

        <h5 className="fw-bolder">Finance</h5>
        <ul><i className="fa-solid fa-bullseye"></i> Plan a Goal</ul>
        <ul><i className="fa-solid fa-money-bill"></i> Discover Top Funds</ul>
        <ul><i className="fas fa-hand-holding-usd"></i> My Investments</ul>

        <h5 className="fw-bolder">Insurance</h5>
        <ul><i className="fas fa-shield-alt"></i> Insurance</ul>
      </div>
    </div>
  );
}

export default SideBar;
