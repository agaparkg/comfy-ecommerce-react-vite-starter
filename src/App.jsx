import "./App.css";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Cart />
      <CheckoutModal />
      <Home />
      <Products />
    </div>
  );
}

export default App;
