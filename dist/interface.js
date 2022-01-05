"use strict";
var tlou = {
    title: "The Last Of Us",
    description: "The best game of the world!",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilarGames: function (title) {
        console.log("Uncharted, Metro, The Plague");
    }
};
tlou.getSimilarGames(tlou.title);
