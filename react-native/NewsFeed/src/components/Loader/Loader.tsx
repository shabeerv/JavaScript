import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useAppSelector} from '../../hooks/useAppSelector';
import {isLoadingSelector} from '../../selectors/statusSelector';
import {loadingList} from '../../helpers/ActionTracker';

const Loader = () => {
  const load = useAppSelector(state => isLoadingSelector(loadingList, state));

  return <>{load && <ActivityIndicator size={'large'} color={'#000'} />}</>;
};

export default Loader;
