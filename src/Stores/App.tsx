import React, { useContext, createContext, useState, useCallback } from 'react';
import { calculateNewScores, getRandom } from 'Utils';
import { API } from 'aws-amplify';

const AppContext = createContext<AppContext>({
  currentMash: undefined,
  loadCats: () => Promise.resolve([]),
  newMash: () => {},
  updateScore: () => Promise.resolve(),
});

export const AppProvider: React.FC = ({ children }) => {
  const [currentMash, setCurrentMash] = useState<Mash>();

  const loadCats = useCallback((): Promise<Array<Cat>> => API.get('cats', '/cats', {}), []);

  const newMash = useCallback(() => {
    loadCats().then(cats => {
      const leftIndex = getRandom(cats.length);

      // choose a random index around left index so that we have cats of roughly the same level
      const rightIndex = leftIndex === cats.length - 1 ? leftIndex - 1 - getRandom(7) : Math.min(leftIndex + 1 + getRandom(7), cats.length);

      setCurrentMash({
        left: cats[leftIndex],
        right: cats[rightIndex],
      });
    });
  }, [loadCats]);

  const updateScore = useCallback(
    async (winner: Cat) => {
      if (!currentMash) return;

      const loser = currentMash.left.catId !== winner.catId ? currentMash.left : currentMash.right;

      const [winnerScore, loserScore] = calculateNewScores(winner.score, loser.score);

      await API.put('cats', `/cats/${winner.catId}`, { body: { score: winnerScore } });
      await API.put('cats', `/cats/${loser.catId}`, { body: { score: loserScore } });
    },
    [currentMash],
  );

  return <AppContext.Provider value={{ currentMash, loadCats, newMash, updateScore }}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContext => useContext(AppContext);
