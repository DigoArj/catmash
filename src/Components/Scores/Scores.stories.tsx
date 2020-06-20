import React from 'react';
import { Scores } from 'Components';
import { Route, MemoryRouter, useLocation } from 'react-router-dom';
import { StoryFn } from '@storybook/addons';

export default {
  title: 'Components/Scores',
  component: Scores,

  decorators: [
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    (storyFn: StoryFn) => (
      <MemoryRouter initialEntries={['/']}>
        {/*
        // @ts-ignore */}
        <Route path="/" component={() => storyFn()} />
      </MemoryRouter>
    ),
  ],
};

export const Simple: React.FC = () => {
  const { pathname } = useLocation();

  return <Scores isOpen={pathname === '/scores'} />;
};
