import React from 'react';
import { css } from 'emotion';

const styles = css`
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
`;

export const Versus: React.FC = () => (
  <div className={styles}>
    <span className="letter-v">V</span>
    <span className="letter-s">S</span>
  </div>
);
