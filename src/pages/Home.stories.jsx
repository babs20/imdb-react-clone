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
  ],
};
