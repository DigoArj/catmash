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
  loaded: boolean;
  currentMash: Mash;
  loadCats: () => Promise<Array<Cat>>;
  newMash: () => void;
  voteForLeft: () => void;
  voteForRight: () => void;
}

type CalculateNewScoresFn = (winnerScore: number, loserScore: number) => [number, number];

type GetRandomFn = (end: number) => number;
