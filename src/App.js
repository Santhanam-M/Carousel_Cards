import SideBar from "./components/SideBar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import './styles/styles.css'

function App() {
  return (
    <div className="container-fluid mt-5 ">
      <div className="row">
        <div className="col-xl-2 col-md-4">
          <SideBar />
        </div>

        <div className="col-xl-10 col-md-8">
          <Carousel />
          <Cards/>
        </div>
      </div>
    </div>
  );
}

export default App;
