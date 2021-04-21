import Search from './Search';
import '../../styles/index.css';

export default {
  component: Search,
  title: 'TopNav/Search',
  decorators: [
    story => (
      <nav className='flex items-center w-full h-16 p-4 bg-gray-800'>
        {story()}
      </nav>
    ),
  ],
};

const Template = args => <Search {...args} />;

export const Default = Template.bind({});
