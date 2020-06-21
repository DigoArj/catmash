import React from 'react';
import Lottie from 'lottie-react-web';
import animationData from 'Assets/cats-loader.json';

export const Loader: React.FC = () => <Lottie options={{ animationData }} width={300} height={300} />;
