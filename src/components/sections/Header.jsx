import { useContext } from "react";
import moon from "../../assets/imgs/icons/moon.svg";
import sun from "../../assets/imgs/icons/sun.svg";
import logo from "../../assets/imgs/logo.svg";
import ring from "../../assets/imgs/ring.svg";
import cart from "../../assets/imgs/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../../contexts/index";

export default function Header({ onClickCart }) {
    const { cartData } = useContext(MovieContext);
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    // console.log(cartData);

    return (
        <header>
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={logo} width="139" height="26" alt="" />
                </a>

                <ul className="flex items-center space-x-4">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ring} width="24" height="24" alt="" />
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            aria-label="Toggle Dark Mode"
                        >
                            <img src={darkMode ? moon : sun} width="24" height="24" alt={darkMode ? "Moon icon" : "Sun icon"} />
                        </button>
                    </li>
                    <li>
                        <a
                            className="relative bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                            onClick={onClickCart}
                        >
                            <img src={cart} width="24" height="24" alt="Cart" />

                            {cartData.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                    {cartData.length}
                                </span>
                            )}
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}