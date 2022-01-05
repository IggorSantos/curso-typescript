var tlou = {
    title: "The Last Of Us",
    description: "The best game of the world!",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilarGames: function (title) {
        console.log("Alguns jogos similares ao " + title + " s\u00E3o Uncharted, Metro, The Plague");
    }
};
//tlou.getSimilarGames(tlou.title)
var leftBehind = {
    title: "The Last Of Us --Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS3"],
    originalGame: tlou,
    newContent: ["new caracteres", "more 3 hours"]
};
console.log(leftBehind);
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g, p) {
        this.title = t;
        this.description = d;
        this.genre = g;
        this.platform = p;
    }
    return CreateGame;
}());
