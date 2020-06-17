import React from 'react';
import { render } from '@testing-library/react';
import { App } from 'Components';

it('should render without crashing', () => {
  render(<App />);
});
