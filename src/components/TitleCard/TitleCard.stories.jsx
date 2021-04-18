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
  title: {
    name: 'Violet Evergarden',
    imageURL:
      'https://image.tmdb.org/t/p/original/ImvHbM4GsJJykarnOzhtpG6ax6.jpg',
    genres: 'Animation • Sci-Fi & Fantasy • Drama',
    rating: '8.7',
  },
};

const overview =
  'The Great War finally came to an end after four long years of conflict; fractured in two, the continent of Telesis slowly began to flourish once again. Caught up in the bloodshed was Violet Evergarden, a young girl raised for the sole purpose of decimating enemy lines. Hospitalized and maimed in a bloody skirmish during the War\'s final leg, she was left with only words from the person she held dearest, but with no understanding of their meaning.\n\nRecovering from her wounds, Violet starts a new life working at CH Postal Services after a falling out with her new intended guardian family. There, she witnesses by pure chance the work of an "Auto Memoir Doll," amanuenses that transcribe people\'s thoughts and feelings into words on paper. Moved by the notion, Violet begins work as an Auto Memoir Doll, a trade that will take her on an adventure, one that will reshape the lives of her clients and hopefully lead to self-discovery.';
export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  title: {
    ...Default.args.title,
    overview: overview,
  },
};
