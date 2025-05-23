import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./contexts/index";
import Store from "./pages/Store";
import { CartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
      <MovieContext.Provider value={{ state, dispatch }} >
        <Store />
        <ToastContainer />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
