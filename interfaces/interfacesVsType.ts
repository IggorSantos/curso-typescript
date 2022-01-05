//Interface pode ser declarada novamente é ter mais propriedades adicionadas e types não
interface IGame {
  name: string;
}
interface IGame {
  genre: string;
}

type Game = {
  name: string;
}
type Game = {
  genre: string;
}
