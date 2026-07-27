import React from 'react';
import { SpokenEnglishProvider } from '../spokenEnglish/context';
import { SpokenEnglishDashboard } from '../spokenEnglish';

const SpokenEnglishPage = () => {
  return (
    <SpokenEnglishProvider>
      <SpokenEnglishDashboard />
    </SpokenEnglishProvider>
  );
};

export default SpokenEnglishPage;