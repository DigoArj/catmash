import React from 'react';
import { PositionedCat } from 'Components';

export default {
  title: 'Components/PositionedCat',
  component: PositionedCat,
};

export const Simple: React.FC = () => (
  <PositionedCat id="0" imgUrl="http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg" position={1} />
);
