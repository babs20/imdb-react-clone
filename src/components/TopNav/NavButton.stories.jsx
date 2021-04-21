import NavButton from './NavButton';
import '../../styles/index.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default {
  component: NavButton,
  title: 'TopNav/NavButton',
  decorators: [
    story => (
      <nav className='flex items-center w-full h-16 p-4 bg-gray-800'>
        <Router history={history}>{story()}</Router>
      </nav>
    ),
  ],
};

const Template = args => <NavButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  location: 'Movies',
  path: '/movies',
};
