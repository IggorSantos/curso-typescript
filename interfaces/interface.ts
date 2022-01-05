interface Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilarGames?: (title: string) => void;
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

interface DLC extends Game{
  originalGame: Game,
  newContent: string[],
}

//tlou.getSimilarGames(tlou.title)
const leftBehind: DLC = {
  title: "The Last Of Us --Left Behind",
  description: "You play as Ellie before the original game",
  genre: "Action",
  platform: ["PS3"],
  originalGame: tlou,
  newContent: ["new caracteres","more 3 hours"]
}

console.log(leftBehind)

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];

  constructor(t: string, d: string, g: string, p: string[]){
    this.title = t;
    this.description = d;
    this.genre = g;
    this.platform = p;
  }
}
