import React from 'react';
import { css } from 'emotion';
import { Loader, Scores, Title, Vote } from 'Components';
import { useLocation } from 'react-router-dom';
import { useApp } from 'Stores';

const styles = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  background: #200122;
  background: linear-gradient(105deg, #6f0000, #200122);

  > * {
    width: 1280px;
    margin: 0 auto;
  }

  > main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const App: React.FC = () => {
  const { pathname } = useLocation();
  const { loaded } = useApp();

  return (
    <div className={styles}>
      <Title />

      <main>{loaded ? <Vote /> : <Loader white />}</main>

      <Scores isOpen={pathname === '/scores'} />
    </div>
  );
};
