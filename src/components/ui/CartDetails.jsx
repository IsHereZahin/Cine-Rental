import { useContext } from "react";
import deleteIcon from "../../assets/imgs/delete.svg";
import checkout from "../../assets/imgs/icons/checkout.svg";
import { MovieContext } from "../../contexts/index";
import { getImgUrl } from "../../utils/cine-utility";
import { toast } from 'react-toastify';

export default function CartDetails({ onClose }) {
    const { state, dispatch } = useContext(MovieContext);

    function handleRemoveFromCart(e, movie) {
        e.stopPropagation();
        dispatch({
            type: "removeFromCart",
            payload: {
                ...movie
            }
        });
        toast.success(`${movie.title} removed from cart`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    function handleCheckout() {
        toast.warning("Checkout feature is not implemented yet.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
                <div
                    className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9"
                >
                    <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">Your Carts
                        <span className="text-primary"> ({state.cartData.length})</span>
                    </h2>
                    <div
                        className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14"
                    >
                        {
                            state.cartData.length < 1 ? (
                                <p className="text-center text-gray-500">Your cart is empty.</p>
                            ) : (
                                state.cartData.map((movie) => (
                                    <div
                                        key={movie.id}
                                        className="grid grid-cols-[1fr_auto] gap-4 border-b border-black/10 pb-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                className="w-16 h-20 object-cover rounded overflow-hidden"
                                                src={getImgUrl(movie.cover)}
                                                alt={movie.title}
                                            />
                                            <div>
                                                <h3 className="text-base md:text-xl font-bold">{movie.title}</h3>
                                                <p className="max-md:text-xs text-[#575A6E]">{movie.genre}</p>
                                                <span className="max-md:text-xs">Price: <b>${movie.price}</b></span>
                                            </div>
                                        </div>
                                        <div className="flex justify-between gap-4 items-center">
                                            <button
                                                onClick={(e) => handleRemoveFromCart(e, movie)}
                                                className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                                            >
                                                <img src={deleteIcon} className="w-5 h-5" alt="delete" />
                                                <span className="max-md:hidden">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <a
                            className={`rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-sm ${state.cartData.length < 1
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-primary text-[#171923]"
                                }`}
                            disabled={state.cartData.length < 1}
                            onClick={handleCheckout}
                            href="#"
                        >
                            <img
                                src={checkout}
                                width="24" height="24" alt="checkout" />
                            <span>Checkout</span>
                        </a>
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
    );
}