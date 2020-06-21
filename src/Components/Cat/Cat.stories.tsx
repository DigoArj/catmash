import React from 'react';
import { Cat } from 'Components';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Cat',
  component: Cat,
};

export const Simple: React.FC = () => (
  <Cat srcUrl={text('image URL', 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg')} alt="cat MTgwODA3MA" />
);

export const Small: React.FC = () => (
  <Cat srcUrl={text('image URL', 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg')} alt="cat MTgwODA3MA" small />
);

export const WithRank: React.FC = () => (
  <Cat srcUrl={text('image URL', 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg')} alt="cat MTgwODA3MA" rank={42} />
);

export const WithRankSmall: React.FC = () => (
  <Cat srcUrl={text('image URL', 'http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg')} alt="cat MTgwODA3MA" small rank={42} />
);
