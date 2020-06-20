import React from 'react';
import { css, cx } from 'emotion';

const styles = css`
  height: 250px;
  width: 250px;
  overflow: hidden;
  border: 4px solid darkgrey;
  background-color: darkgrey;
  border-radius: 15%;
  box-sizing: border-box;
  box-shadow: 0 4px 4px #00000040;

  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    user-select: none;
  }
`;

interface Props {
  srcUrl: string;
  alt: string;
  className?: string;
}

export const Cat: React.FC<Props> = ({ srcUrl, alt, className }) => (
  <div className={cx(styles, className)}>
    <img src={srcUrl} alt={alt} />
  </div>
);
