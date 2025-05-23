import { useContext, useState } from "react";
import { MovieContext } from "../../contexts/index";
import { getImgUrl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { toast } from 'react-toastify';

export default function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { state, dispatch } = useContext(MovieContext);

    function handleModalClose() {
        setSelectedMovie(null);
        setShowModal(false);
    }

    function handleModalOpen(movie) {
        setSelectedMovie(movie);
        setShowModal(true);
    }

    function handleAddToCart(e, movie) {
        e.stopPropagation();
        const movieExists = state.cartData.find((item) => {
            return item.id === movie.id
        });
        if (movieExists) {
            toast.warning(`${movie.title} already exists in cart`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            dispatch({
                type: "addToCart",
                payload: {
                    ...movie
                }
            });
            toast.success(`${movie.title} added to cart`, {
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
    }

    return (
        <>
            {
                showModal &&
                <MovieDetailsModal
                    movie={selectedMovie}
                    onClose={handleModalClose}
                    onAddToCart={handleAddToCart}
                />
            }
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <div onClick={() => handleModalOpen(movie)} className="cursor-pointer">
                    <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt={movie.title} />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating} />
                        </div>
                        <button
                            className={`rounded-lg py-2 px-5 flex items-center justify-center gap-2 font-semibold text-sm
                                ${state.cartData.find((item) => item.id === movie.id)
                                    ? "disabled"
                                    : "bg-primary text-[#171923] hover:bg-primary-dark"
                                }`}
                            onClick={(e) => handleAddToCart(e, movie)}
                            disabled={!!state.cartData.find((item) => item.id === movie.id)}
                        >
                            <img src="./assets/tag.svg" alt="" />
                            <span>
                                ${movie.price} | {state.cartData.find((item) => item.id === movie.id) ? "Already Added" : "Add"} to Cart
                            </span>
                        </button>

                    </figcaption>
                </div>
            </figure>
        </>
    );
}