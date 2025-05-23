import { useState } from "react";
import Content from "./components/sections/Content";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Sidebar from "./components/sections/Sidebar";
import CartDetails from "./components/ui/CartDetails";
import { MovieContext } from "./contexts/index";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartData, setCartData] = useState([]);
  return (
    <MovieContext.Provider value={{ cartData, setCartData }} >
      {
        showCart &&
        <CartDetails
          onClose={() => setShowCart(false)}
          onOpen={() => setShowCart(true)}
        />
      }
      <Header
        onClickCart={() => setShowCart(true)}
      />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <Content />
        </div>
      </main>
      <Footer />
    </MovieContext.Provider>
  );
}

export default App;
