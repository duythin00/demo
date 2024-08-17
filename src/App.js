import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Right from "./components/Right";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
        <div className="container-fluid">
            <Header/>
            <Navbar/>
            <div className="row">
                <Left/>
                <div className="col-7 mid">
                    <Outlet>

                    </Outlet>
                </div>
                <Right/>
            </div>
        </div>
    </>
  );
}

export default App;
