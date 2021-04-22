import TitleCardList from './TitleCardList';
import '../styles/index.css';
import * as Home from '../pages/Home.stories';

export default {
  component: TitleCardList,
  title: 'Carousel/TitleCardList',
  decorators: [story => <main className='bg-gray-800'>{story()}</main>],
};

const Template = args => <TitleCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...Home.Default.args,
};
