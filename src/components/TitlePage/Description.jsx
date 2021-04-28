import PropTypes from 'prop-types';

export default function Description({
  name,
  overview,
  imageURL,
  backgroundURL,
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
        <img src={imageURL} alt={`${name} Poster`} className='z-10 w-40' />
        <div className='z-10 ml-8'>
          <h1 className='text-3xl font-bold'>{name}</h1>
          <p className='pt-1 text-sm leading-relaxed whitespace-pre-line'>
            {overview}
          </p>
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
};
