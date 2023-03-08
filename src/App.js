import "./App.css";
import NavBar from "./Component/NavBar/Navigation";
import MainPage from "./Component/HomePage/MainPage";
import DisplayContent from "./Component/DisplayContent/DisplayContent";
import PlaceOrder from "./Component/PlaceOrder/PlaceOrder";
import Checkout from "./Component/Checkout/Checkout";
import CartContextProvider from "./Component/CartContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <CartContextProvider>
          <NavBar />
          <DisplayContent />
          <Routes>
            <Route path="/display" element={<DisplayContent />}></Route>
            <Route path="/order/:id" element={<PlaceOrder />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="" element={<MainPage />}></Route>
          </Routes>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
