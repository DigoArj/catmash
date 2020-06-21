import React from 'react';
import { Cat, Versus } from 'Components';
import { useApp } from 'Stores';

export const Vote: React.FC = () => {
  const { currentMash, voteForLeft, voteForRight } = useApp();

  return currentMash ? (
    <>
      <Cat srcUrl={currentMash.left.imageUrl} alt={`cat ${currentMash.left.catId}`} onClick={voteForLeft} />
      <Versus />
      <Cat srcUrl={currentMash.right.imageUrl} alt={`cat ${currentMash.right.catId}`} onClick={voteForRight} />
    </>
  ) : null;
};
