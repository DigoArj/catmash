import React from 'react';
import { Cat } from 'Components';
import { css } from 'emotion';

const styles = css`
  display: flex;

  > span {
    font-family: 'Noticia Text', serif;
    font-weight: bold;
    font-size: 270px;
    position: relative;
    right: -50px;
    line-height: 250px;
    user-select: none;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > .positioned-cat {
    z-index: 1;
  }
`;

const spanStyles = (position: number) => {
  let from = '';
  let to = '';

  switch (position) {
    case 1:
      from = '#fec84e';
      to = '#ffdea8';
      break;
    case 2:
      from = '#f5f7fa';
      to = '#b8c6db';
      break;
    case 3:
      from = '#f2c17d';
      to = '#b82e1f';
      break;
    default:
      return '';
  }

  return css`
    background: linear-gradient(120deg, ${from} 0%, ${to} 74%);
  `;
};

interface Props {
  id: string;
  imgUrl: string;
  position: number;
  score?: number;
}

export const PositionedCat: React.FC<Props> = ({ id, imgUrl, score, position }) => (
  <li className={styles}>
    <span className={spanStyles(position)}>{position}</span>
    <Cat className="positioned-cat" srcUrl={imgUrl} alt={`cat ${id}`} score={score} />
  </li>
);
