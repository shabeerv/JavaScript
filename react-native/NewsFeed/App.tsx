import React, {Fragment} from 'react';
import {RootNavigation} from './src/navigation/navigation';
import Loader from './src/components/Loader';

const App: React.FC = () => {
  return (
    <Fragment>
      <Loader />
      <RootNavigation />
    </Fragment>
  );
};

export default App;
