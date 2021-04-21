import TitleCardList from './TitleCardList';
import '../styles/index.css';
import * as Home from '../pages/Home.stories';

export default {
  component: TitleCardList,
  title: 'Carousel/TitleCardList',
  decorators: [
    story => <div className='w-full h-full p-16 bg-gray-800'>{story()}</div>,
  ],
};

const Template = args => <TitleCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...Home.Default.args,
};
