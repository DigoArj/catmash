import React from 'react';
import Lottie from 'lottie-react-web';
import animationData from 'Assets/cats-loader.json';
import { css, cx } from 'emotion';

const styles = css`
  height: 300px;
  width: 300px;
`;

interface Props {
  className?: string;
}

export const Loader: React.FC<Props> = ({ className }) => (
  <div className={cx(styles, className)}>
    <Lottie options={{ animationData }} />
  </div>
);
