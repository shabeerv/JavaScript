import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';

import Tag from '../src/components/Tag';

it('renders default elements', async () => {
  const tagComp = render(
    <Tag
      category={'business'}
      selectedCategory={'business'}
      setSelectedCategory={jest.fn()}
    />,
  );
  const tag = tagComp.getByTestId('tag');
  // const tagText = tagComp.getByTestId('tagText');
  fireEvent.press(tag, 'Business');
  const tagName = screen.getByText('Business');
  expect(tagName).toBeDefined();
  // expect(tagText).toHaveTextContent('Business');
});
