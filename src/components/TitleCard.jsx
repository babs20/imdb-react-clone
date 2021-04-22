import PropTypes from 'prop-types';

export default function TitleCard({ imageURL, name, genres, rating }) {
  return (
    <article className='w-40 space-y-1 text-xs text-gray-50'>
      <div className='object-cover aspect-w-17 aspect-h-25'>
        <img src={imageURL} alt={`${name} Poster`} />
      </div>
      <div className='flex flex-col'>
        <h2 className='font-bold '>{name}</h2>
      </div>
    </article>
  );
}

TitleCard.propTypes = {
  imageURL: PropTypes.string,
  name: PropTypes.string.isRequired,
  genres: PropTypes.string,
  rating: PropTypes.string.isRequired,
};
