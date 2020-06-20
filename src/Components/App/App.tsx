import React from 'react';
import { css } from 'emotion';
import { Cat, Scores, Title, Versus } from 'Components';
import { useLocation } from 'react-router-dom';

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

  return (
    <div className={styles}>
      <Title />

      <main>
        <Cat srcUrl="http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg" alt="cat MTgwODA3MA" />
        <Versus />
        <Cat srcUrl="http://24.media.tumblr.com/tumblr_lzqv50jiCj1qzex9io1_1280.jpg" alt="cat 5v3" />
      </main>

      <Scores isOpen={pathname === '/scores'} />
    </div>
  );
};
