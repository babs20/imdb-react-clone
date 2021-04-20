import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavButton({ location, path }) {
  return (
    <Link
      to={`${path}`}
      className='px-2 py-2 font-bold rounded-lg text-gray-50 hover:bg-gray-500'
      role='link'
    >
      {location}
    </Link>
  );
}

NavButton.propTypes = {
  location: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
