interface Cat {
  catId: string;
  imageUrl: string;
  score: number;
}

interface Mash {
  left: Cat;
  right: Cat;
}

interface AppContext {
  currentMash?: Mash;
  loadCats: () => Promise<Array<Cat>>;
  newMash: () => void;
  updateScore: (winner: Cat) => void;
  voteForLeft: () => void;
  voteForRight: () => void;
}

type CalculateNewScoresFn = (winnerScore: number, loserScore: number) => [number, number];

type GetRandomFn = (end: number) => number;
