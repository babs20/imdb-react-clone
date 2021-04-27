import PropTypes from 'prop-types';

export default function Description({
  name,
  overview,
  imageURL,
  backgroundURL,
}) {
  return (
    <div className='relative block text-gray-50'>
      <div className='absolute w-full h-96'>
        <img
          src={`${backgroundURL}`}
          alt=''
          className='absolute object-cover object-center w-full h-full opacity-25'
        />
        <div
          style={{
            'background-image':
              'linear-gradient(to bottom, transparent, rgb(39, 39, 42) 95%)',
          }}
          className='absolute top-0 z-10 w-full h-full'
        />
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
    </div>
  );
}

Description.propTypes = {};
