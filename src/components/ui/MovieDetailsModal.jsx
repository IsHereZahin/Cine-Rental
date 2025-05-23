import { useContext } from "react";
import { MovieContext } from "../../contexts/index";
import { getImgUrl } from "../../utils/cine-utility";

export default function MovieDetailsModal({ movie, onClose, onAddToCart }) {
    const { state } = useContext(MovieContext);

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
                    <img
                        className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
                        src={getImgUrl(movie.cover)}
                        alt={movie.title}
                    />
                    <div className="p-5 lg:p-11">
                        <div className="">
                            <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">{movie.title}</h2>
                            <span
                                className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">{movie.genre}</span>
                            <div></div>
                        </div>
                        <p className="text-sm lg:text-base mb-8 lg:mb-16">{movie.description}</p>
                        <div className="grid lg:grid-cols-2 gap-2">
                            <button
                                className={`rounded-lg py-2 px-5 flex items-center justify-center gap-2 font-semibold text-sm
                                ${state.cartData.find((item) => item.id === movie.id)
                                        ? "disabled"
                                        : "bg-primary text-[#171923] hover:bg-primary-dark"
                                    }`}
                                onClick={(e) => onAddToCart(e, movie)}
                                disabled={!!state.cartData.find((item) => item.id === movie.id)}
                            >
                                <img src="./assets/tag.svg" alt="" />
                                <span>
                                    ${movie.price} | {state.cartData.find((item) => item.id === movie.id) ? "Already Added" : "Add"} to Cart
                                </span>
                            </button>
                            <a
                                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                                href="#"
                                onClick={onClose}
                            >
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}