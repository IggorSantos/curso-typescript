interface Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilarGames: (title: string) => void;
}

const tlou: Game = {
  title: "The Last Of Us",
  description: "The best game of the world!",
  genre: "Action",
  platform: ["PS3","PS4"],
  getSimilarGames: (title: string) => {
    console.log(`Alguns jogos similares ao ${title} são Uncharted, Metro, The Plague`)
  }

}
tlou.getSimilarGames(tlou.title)
