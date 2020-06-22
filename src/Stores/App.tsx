import React, { useContext, createContext, useState, useCallback, useEffect } from 'react';
import { calculateNewScores, getRandom } from 'Utils';
import { API } from 'aws-amplify';

const AppContext = createContext<AppContext>({
  loaded: false,
  currentMash: {} as Mash,
  loadCats: () => Promise.resolve([]),
  newMash: () => Promise.resolve(),
  voteForLeft: () => {},
  voteForRight: () => {},
});

export const AppProvider: React.FC = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentMash, setCurrentMash] = useState<Mash>({} as Mash);

  const loadCats = useCallback((): Promise<Array<Cat>> => API.get('cats', '/cats', {}), []);

  const newMash = useCallback(
    () =>
      loadCats().then(cats => {
        const lastIndex = cats.length - 1;
        const indexOffset = 1 + getRandom(7);

        const leftIndex = getRandom(lastIndex);

        // choose a random index around left index so that we have cats of roughly the same level
        const rightIndex = leftIndex === lastIndex ? leftIndex - indexOffset : Math.min(leftIndex + indexOffset, lastIndex);

        setCurrentMash({
          left: cats[leftIndex],
          right: cats[rightIndex],
        });
      }),
    [loadCats],
  );

  const updateScores = useCallback(
    async (winner: Cat) => {
      if (!currentMash) return;

      const loser = currentMash.left.catId !== winner.catId ? currentMash.left : currentMash.right;

      const [winnerScore, loserScore] = calculateNewScores(winner.score, loser.score);

      await API.put('cats', `/cats/${winner.catId}`, { body: { score: winnerScore } });
      await API.put('cats', `/cats/${loser.catId}`, { body: { score: loserScore } });
    },
    [currentMash],
  );

  const voteFor = useCallback(
    (cat: Cat) => {
      setLoaded(false);

      updateScores(cat)
        .then(newMash)
        .then(() => setLoaded(true));
    },
    [updateScores, newMash],
  );

  const voteForLeft = useCallback(() => voteFor(currentMash.left), [currentMash, voteFor]);

  const voteForRight = useCallback(() => voteFor(currentMash.right), [currentMash, voteFor]);

  // init first mash
  useEffect(
    () => {
      newMash().then(() => setLoaded(true));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const value: AppContext = {
    loaded,
    currentMash,
    loadCats,
    newMash,
    voteForLeft,
    voteForRight,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContext => useContext(AppContext);
