import React from 'react';
import {render} from '@testing-library/react-native';
import NewsTags from '../src/components/NewsTags';

it('renders default elements', async () => {
  render(
    <NewsTags selectedCategory={'business'} setSelectedCategory={jest.fn()} />,
  );
});
