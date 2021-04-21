import CollectionCard from './CollectionCard';
import '../styles/index.css';

export default {
  component: CollectionCard,
  title: 'Carousel/CollectionCard',
  decorators: [
    story => (
      <section className='w-full h-full p-16 bg-gray-800'>{story()}</section>
    ),
  ],
};

const Template = args => <CollectionCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  collection: {
    name: 'Star Wars Collection',
    imageURL:
      'https://image.tmdb.org/t/p/original/d8duYyyC9J5T825Hg7grmaabfxQ.jpg',
    partTotal: '9',
  },
};
