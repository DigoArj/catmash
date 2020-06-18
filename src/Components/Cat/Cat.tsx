import React from 'react';
import { css } from 'emotion';

const styles = css`
  height: 250px;
  width: 250px;
  overflow: hidden;
  border: 4px solid darkgrey;
  border-radius: 15%;
  box-sizing: border-box;
  box-shadow: 0 4px 4px #00000040;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

interface Props {
  srcUrl: string;
  alt: string;
}

export const Cat: React.FC<Props> = ({ srcUrl, alt }) => (
  <div className={styles}>
    <img src={srcUrl} alt={alt} />
  </div>
);
