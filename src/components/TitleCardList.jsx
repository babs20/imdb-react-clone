// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import TitleCard from './TitleCard';

export default function TitleCardList({ titles }) {
  const list = titles.map((title, index) => {
    return <TitleCard {...title} key={index} />;
  });

  return (
    <section className='flex flex-col px-14'>
      <h2 className='mb-2 text-2xl font-bold text-gray-50'>Trending Movies</h2>
      <div className='flex space-x-4'>{list}</div>
    </section>
  );
}

TitleCardList.propTypes = {
  titles: PropTypes.array.isRequired,
};
