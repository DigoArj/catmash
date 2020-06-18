import React from 'react';
import { render } from '@testing-library/react';
import { Cat } from 'Components';

it('should render without crashing', () => {
  render(<Cat srcUrl="http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg" alt="cat MTgwODA3MA" />);
});
