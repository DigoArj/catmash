import React from 'react';
import { CatList } from 'Components';
import { AppProvider } from 'Stores';

export default {
  title: 'Components/CatList',
  component: CatList,
};

export const Simple: React.FC = () => (
  <AppProvider>
    <CatList />
  </AppProvider>
);
