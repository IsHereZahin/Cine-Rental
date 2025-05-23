const movies = [
    {
        id: crypto.randomUUID(),
        cover: "marriage-strory.jpg",
        title: "Marriage Story",
        description:
            "A stage director and his actor wife struggle through a grueling divorce that pushes them to their personal and creative extremes.",
        genre: "Drama",
        rating: 3,
        price: 2,
    },
    {
        id: crypto.randomUUID(),
        cover: "once-in-ho.jpg",
        title: "Once Upon a Time in Hollywood",
        description:
            "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age.",
        genre: "Comedy-Drama",
        rating: 4,
        price: 3,
    },
    {
        id: crypto.randomUUID(),
        cover: "pain-and-gain.jpg",
        title: "Pain & Gain",
        description:
            "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        genre: "Action/Comedy",
        rating: 5,
        price: 2,
    },
    {
        id: crypto.randomUUID(),
        cover: "avatar.png",
        title: "Avatar: The Way of Water",
        description:
            "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Trouble follows them, and Jake must fight a difficult war to protect his people.",
        genre: "Sci-Fi",
        rating: 4,
        price: 3,
    },
    {
        id: crypto.randomUUID(),
        cover: "iron-man.png",
        title: "Iron Man",
        description:
            "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        genre: "Action",
        rating: 5,
        price: 4,
    },

];

function getAllMovies() {
    return movies;
}

export { getAllMovies };
