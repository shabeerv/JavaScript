import React, {Fragment} from 'react';
import {RootNavigation} from './src/navigation/navigation';
import {isLoadingSelector} from './src/selectors/statusSelector';
import loadingList from './src/helpers/ActionTracker';
import {useAppSelector} from './src/hooks/useAppSelector';
import Loader from './src/components/Loader';

const App: React.FC = () => {
  const load = useAppSelector(state => isLoadingSelector(loadingList, state));
  return (
    <Fragment>
      <Loader show={load} />
      <RootNavigation />
    </Fragment>
  );
};

export default App;
