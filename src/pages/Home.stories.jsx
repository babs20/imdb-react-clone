import Home from './Home';
import '../styles/index.css';

export default {
  component: Home,
  title: 'Home/Default',
  decorators: [
    story => <main className='w-full h-screen bg-gray-800'>{story()}</main>,
  ],
};

const Template = args => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {
  titles: [
    {
      name: 'Violet Evergarden',
      imageURL:
        'https://image.tmdb.org/t/p/original/ImvHbM4GsJJykarnOzhtpG6ax6.jpg',
      rating: '8.7',
      genres: 'Animation • Sci-Fi & Fantasy • Drama',
    },
    {
      name: '5 Centimeters per Second',
      imageURL:
        'https://image.tmdb.org/t/p/original/t0ISGhwZtghakg46TWCOWBTIflZ.jpg',
      rating: '7.3',
      genres: 'Animation • Sci-Fi & Fantasy • Drama',
    },
    {
      name: 'Ergo Proxy',
      imageURL:
        'https://image.tmdb.org/t/p/original/wXaWK1dtA5EACL3ASDKGKBJePsS.jpg',
      rating: '7.5',
      genres: 'Animation • Sci-Fi & Fantasy • Drama',
    },
    {
      name: 'A Place Further Than the Universe',
      imageURL:
        'https://image.tmdb.org/t/p/original/iERXyBf0K6DfAQ8oKEYrdjf1vIs.jpg',
      rating: '7.7',
      genres: 'Animation • Sci-Fi & Fantasy • Drama',
    },
    {
      name: 'Asobi Asobase - workshop of fun -',
      imageURL:
        'https://image.tmdb.org/t/p/original/rAZRl8qvI1OldL2Smnu0MCMVzqP.jpg',
      rating: '8.8',
      genres: 'Animation • Sci-Fi & Fantasy • Drama',
    },
    {
      name: 'Land of the Lustrous',
      imageURL:
        'https://image.tmdb.org/t/p/original/pUy4Dcb6UstCI64AYqLbdPISkDS.jpg',
      rating: '7.8',
      genres: 'Animation • Sci-Fi & Fantasy • Drama',
    },
    {
      name: 'A Silent Voice: The Movie',
      imageURL:
        'https://image.tmdb.org/t/p/original/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg',
      rating: '8.4',
      genres: 'Animation • Sci-Fi & Fantasy • Drama',
    },
    {
      name: 'Akira',
      imageURL:
        'https://image.tmdb.org/t/p/original/5KlRFKKSbyCiyYpZSS3A6G5bW0K.jpg',
      rating: '7.9',
      genres: 'Animation • Sci-Fi & Fantasy • Drama',
    },
    {
      name: 'Monogatari',
      imageURL:
        'https://image.tmdb.org/t/p/original/zCEjjb1NH3LLsWeZx47wOeqkezf.jpg',
      rating: '8.1',
      genres: 'Animation • Sci-Fi & Fantasy • Drama',
    },
  ],
};
