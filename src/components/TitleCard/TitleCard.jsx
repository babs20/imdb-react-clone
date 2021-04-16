export default function TitleCard({ imageURL, name, genres, rating }) {
  return (
    <article className='w-64 text-xs text-gray-800 rounded-lg bg-gray-50'>
      <img src={imageURL} alt={`${name} Poster`} />
      <div className='flex flex-col p-3 space-y-0.5'>
        <h2 className='text-xl font-bold '>{name}</h2>
        <span>{genres}</span>
        <div className='flex items-center space-x-1.5 pt-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4 text-yellow-400'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
          <span>{`${rating} / 10`}</span>
        </div>
      </div>
    </article>
  );
}
