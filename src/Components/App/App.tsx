import React from 'react';
import { css } from 'emotion';
import { Cat, Scores, Title } from 'Components';

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

    > .versus {
      font-family: 'Permanent Marker', cursive;
      font-size: 45px;
      user-select: none;

      > .letter-v,
      > .letter-s {
        position: relative;
      }

      > .letter-v {
        top: -5px;
      }
      > .letter-s {
        bottom: -5px;
      }
    }
  }
`;

export const App: React.FC = () => (
  <div className={styles}>
    <Title />

    <main>
      <Cat srcUrl="http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg" alt="cat MTgwODA3MA" />
      <div className="versus">
        <span className="letter-v">V</span>
        <span className="letter-s">S</span>
      </div>
      <Cat srcUrl="http://24.media.tumblr.com/tumblr_lzqv50jiCj1qzex9io1_1280.jpg" alt="cat 5v3" />
    </main>

    <Scores />
  </div>
);
