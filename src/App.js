import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import './styles/styles.css'

function App() {
  return (
    <div className="container-fluid mt-5 ">
      <div className="row">
        <div className="col-xl-2 col-md-2">
          <SideBar />
        </div>

        <div className="col-xl-10 col-md-10">
          <MainPage />
        </div>
      </div>
    </div>
  );
}

export default App;
