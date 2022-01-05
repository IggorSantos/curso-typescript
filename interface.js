var tlou = {
    title: "The Last Of Us",
    description: "The best game of the world!",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilarGames: function (title) {
        console.log("Alguns jogos similares ao " + title + " s\u00E3o Uncharted, Metro, The Plague");
    }
};
tlou.getSimilarGames(tlou.title);
