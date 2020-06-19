import React from 'react';
import { css } from 'emotion';
import { Cat } from 'Components';

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

  > header,
  > footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
  }

  > header {
    font-family: 'Trade Winds', cursive;
    font-size: 55px;
    user-select: none;
    line-height: 75px;
    padding: 32px 0;

    > h5 {
      font-family: 'Itim', cursive;
      font-size: 30px;
      line-height: 40px;
    }

    > img {
      height: 100%;
    }
  }

  > footer {
    bottom: 0;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      padding: 0 32px;
      user-select: none;

      background: #bc4e9c;
      background: linear-gradient(15deg, #f80759, #bc4e9c);

      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      box-shadow: 0px -2px 4px 4px #00000040;

      transition: all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);

      &:hover {
        height: 48px;
        cursor: pointer;
      }
    }
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
    <header>
      <h1>catmash</h1>
      <h5>Lequel sera le plus choupinou ?</h5>
    </header>

    <main>
      <Cat srcUrl="http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg" alt="cat MTgwODA3MA" />
      <div className="versus">
        <span className="letter-v">V</span>
        <span className="letter-s">S</span>
      </div>
      <Cat srcUrl="http://24.media.tumblr.com/tumblr_lzqv50jiCj1qzex9io1_1280.jpg" alt="cat 5v3" />
    </main>

    <footer>
      <div>Scruter les scores</div>
    </footer>
  </div>
);
