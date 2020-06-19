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
`;

export const Scores: React.FC = () => (
  <footer className={styles}>
    <div>Scruter les scores</div>
  </footer>
);
