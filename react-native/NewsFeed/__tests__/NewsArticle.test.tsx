import React from 'react';
import {screen, render} from '@testing-library/react-native';
import NewsArticle from '../src/components/NewsArticle';
// import LinearGradient from 'react-native-linear-gradient';

const post = {
  author: 'Tanya Aldred (now) and Tim de Lisle (later)',
  content:
    '32nd over: Pakistan 133-2 (Shakeel 47, Babar 71) Andersons over starts with a mix-up between Shakeel and Babar, Babar sends Shakeel back and, if Crawley had hit the stumps from square leg, Shakeel wo… [+1631 chars]',
  description:
    '<ul><li>Updates from the second day’s play in Multan</li><li>Get in touch: contact Tanya by email or on Twitter</li></ul>29th over: Pakistan 107-2(Shakeel 32 Babar 63) There’s a haze to the Multan air but Jimmy Anderson has the ball regardless. Oh my tired ey…',
  publishedAt: '2022-12-10T04:50:28Z',
  source: {id: null, name: 'The Guardian'},
  title: 'Pakistan v England: second Test day two – live',
  url: 'https://www.theguardian.com/sport/live/2022/dec/10/pakistan-v-england-second-test-day-two-live',
  urlToImage:
    'https://i.guim.co.uk/img/media/9be8502f61e3b61b8ed36c3fd09ba69b6a1d8f5d/0_103_2892_1735/master/2892.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=de237429faab69618fff9f13a428a452',
};

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-navigation-shared-element', () => 'SharedElement');

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('NewsArticle', () => {
  it('NewsArticle renders correctly', () => {
    render(<NewsArticle post={post} index={1} />);
    console.log(screen);
    // expect(screen.getByText('test')).toBeVisible();
  });
});

// const imageElement = screen.getByText('test');
// expect(imageElement).toBeVisible();
