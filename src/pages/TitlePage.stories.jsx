import TitlePage from './TitlePage';
import '../styles/index.css';
import * as Description from '../components/TitlePage/Description.stories';

export default {
  component: TitlePage,
  title: 'TitlePage/Demos',
  decorators: [
    story => <main className='w-full h-screen bg-gray-800'>{story()}</main>,
  ],
};

const Template = args => <TitlePage {...args} />;

export const Universe = Template.bind({});
Universe.args = {
  title: {
    name: 'A Place Further Than the Universe',
    imageURL:
      'https://image.tmdb.org/t/p/original/iERXyBf0K6DfAQ8oKEYrdjf1vIs.jpg',
    rating: '7.7',
    genres: ['Animation', 'Comedy', 'Drama'],
    backgroundURL:
      'https://image.tmdb.org/t/p/original/gHaqtksrERg4PhDzsnrvW7dTs6z.jpg',
    status: 'Ended',
    overview:
      "Scenery that we have never seen. Sounds that we have never heard. Scent that we have never smelled. Food that we have never tasted. And the surge of emotion that we have never experienced. This is the expedition of recollecting the pieces torn apart and sensation left alone. When we reach that place, what will we think? Howling, 40 degree angle. Raging, 50 degree angle. Shouting, 60 degree angle. A wilderness beyond the heavy sea. The furthest south, far from civilization. At the top of the Earth. We will find lights through the girls' eyes to live tomorrow.",
  },
};

export const Violet = Template.bind({});
Violet.args = {
  title: {
    ...Description.Violet.args,
  },
};

export const Ergo = Template.bind({});
Ergo.args = {
  title: {
    ...Description.Ergo.args,
  },
};

export const Lustrous = Template.bind({});
Lustrous.args = {
  title: {
    ...Description.Lustrous.args,
  },
};
