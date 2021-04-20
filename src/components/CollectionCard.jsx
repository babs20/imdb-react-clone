import PropTypes from 'prop-types';

export default function CollectionCard({
  collection: { imageURL, name, partTotal },
}) {
  return (
    <article className='w-64 space-y-1 text-xs text-gray-50'>
      <img src={imageURL} alt={`${name} Poster`} className='rounded-xl' />
      <div className='flex flex-col'>
        <h2 className='text-xl font-bold '>{name}</h2>
        <span>{partTotal} Movies</span>
      </div>
    </article>
  );
}

CollectionCard.propTypes = {
  collection: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    partTotal: PropTypes.string.isRequired,
  }),
};
