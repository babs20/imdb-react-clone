import PropTypes from 'prop-types';

export default function Description({
  name,
  overview,
  imageURL,
  backgroundURL,
  rating,
  status,
  genres,
}) {
  return (
    <header className='relative block text-gray-50'>
      <div className='absolute w-full h-96'>
        <img
          src={`${backgroundURL}`}
          alt={`${name} Poster`}
          className='absolute object-cover object-center w-full h-full opacity-25'
        />
        <div className='absolute top-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-gray-800' />
      </div>
      <div className='flex p-16'>
        <img
          src={imageURL}
          alt={`${name} Poster`}
          className='z-10 w-full h-full'
          style={{ width: '200px', height: '300px' }}
        />
        <div className='z-10 ml-8'>
          <h1 className='text-3xl font-bold'>{name}</h1>
          <div className='flex items-center pt-1 space-x-6 text-sm font-regular'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 mr-1 text-yellow-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <span className='opacity-75'>{rating}/10</span>
            </div>
            <div className='flex'>
              {genres.slice(0, 3).map((genre, index) => (
                <span
                  className='flex items-center mr-1 opacity-75 text-gray-50 rounded-xl w-min whitespace-nowrap'
                  role='link'
                >
                  {`${genre}${index !== 2 ? ', ' : ''}`}
                </span>
              ))}
            </div>
            <span className='opacity-75'>Series {status}</span>
          </div>
          <p className='pt-1 whitespace-pre-line'>{overview}</p>
        </div>
      </div>
    </header>
  );
}

Description.propTypes = {
  name: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  backgroundURL: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};
