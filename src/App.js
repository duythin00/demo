import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Right from "./components/Right";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import DetailProduct from "./pages/detail/DetailProduct";
import Cart from "./pages/cart/Cart";
import Mid from "./pages/mid/mid";

function App() {
  return (
    <>
        <div className="container-fluid">
            <Header/>
            <Navbar/>
            <div className="row">
                <Left/>
                <div className="col-8 mid">
                    <Routes>
                        <Route path={'login'} element={<Login/>}>Login</Route>
                        <Route path={'register'} element={<Register/>}>Register</Route>
                        <Route path={'detail'} element={<DetailProduct/>}>detail</Route>
                        <Route path={'cart'} element={<Cart/>}>Cart</Route>
                        <Route path={''} element={<Mid/>}></Route>
                    </Routes>
                </div>
                <Right/>
            </div>
        </div>
    </>
  );
}

export default App;
