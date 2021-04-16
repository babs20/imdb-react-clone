import TitleCard from './TitleCard';
import '../../styles/index.css';

export default {
  component: TitleCard,
  title: 'TitleCard',
  decorators: [
    story => <div className='w-full h-full p-16 bg-gray-800'>{story()}</div>,
  ],
};

const Template = args => <TitleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageURL:
    'https://image.tmdb.org/t/p/original/ImvHbM4GsJJykarnOzhtpG6ax6.jpg',
  name: 'Violet Evergarden',
  genres: 'Animation • Sci-Fi & Fantasy • Drama',
  rating: '8.7',
};
