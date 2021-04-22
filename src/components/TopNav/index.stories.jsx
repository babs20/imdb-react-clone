import TopNav from './index';
import '../../styles/index.css';

export default {
  component: TopNav,
  title: 'TopNav/Default',
};

const Template = args => <TopNav {...args} />;

export const Default = Template.bind({});
