import React from 'react';
import {ActivityIndicator} from 'react-native';

interface ILoaderProps {
  show: boolean;
}

const Loader: React.FC<ILoaderProps> = ({show}) => {
  return <>{show && <ActivityIndicator size={'large'} color={'#000'} />}</>;
};

export default Loader;
