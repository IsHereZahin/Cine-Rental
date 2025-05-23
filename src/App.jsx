import { useState } from "react";
import { MovieContext, ThemeContext } from "./contexts/index";
import Store from "./pages/Store";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
      <MovieContext.Provider value={{ cartData, setCartData }} >
        <Store />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
