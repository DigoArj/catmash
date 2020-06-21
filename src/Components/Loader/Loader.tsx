import React from 'react';
import Lottie from 'lottie-react-web';
import animationData from 'Assets/cats-loader.json';
import animationDataWhite from 'Assets/cats-loader-white.json';
import { css, cx } from 'emotion';

const styles = css`
  height: 300px;
  width: 300px;
`;

interface Props {
  white?: boolean;
  className?: string;
}

export const Loader: React.FC<Props> = ({ white = false, className }) => (
  <div className={cx(styles, className)}>
    <Lottie options={{ animationData: white ? animationDataWhite : animationData }} direction={-1} />
  </div>
);
