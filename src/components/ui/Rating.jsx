import star from "../../assets/imgs/star.svg";

export default function Rating({ value }) {
    const stars = Array(value).fill(star);
    return (
        <>
            {
                stars.map((star, index) => (
                    <img key={`star-${value}-${index}`} src={star} alt="star" />
                ))
            }
        </>
    );
}