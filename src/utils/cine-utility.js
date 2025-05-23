function getImgUrl(name) {
    return new URL(`../assets/imgs/movie-covers/${name}`, import.meta.url).href;
}

export { getImgUrl };
