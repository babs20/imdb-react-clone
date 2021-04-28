import Nav from './Nav';
import '../../styles/index.css';

export default {
  component: Nav,
  title: 'TitlePage/Nav',
  // decorators: [
  //   story => <main className='w-full h-screen bg-gray-800'>{story()}</main>,
  // ],
};

const Template = args => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFocused: {
    info: true,
    episodes: false,
  },
};
