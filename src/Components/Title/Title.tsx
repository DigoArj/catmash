import React from 'react';
import { css } from 'emotion';

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  user-select: none;

  > h1 {
    font-family: 'Trade Winds', cursive;
    font-size: 105px;
    line-height: 75px;
    padding-top: 32px;
  }

  > h5 {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const Title: React.FC = () => (
  <header className={styles}>
    <h1>catmash</h1>
    <h5>Lequel sera le plus choupinou ?</h5>
  </header>
);
