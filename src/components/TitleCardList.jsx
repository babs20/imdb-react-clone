import PropTypes from 'prop-types';
import TitleCard from './TitleCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function TitleCardList({ titles }) {
  const list = titles.map((title, index) => {
    return <TitleCard {...title} key={index} />;
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };

  return (
    <section className='flex flex-col px-14'>
      <div>
        <h2 className='mb-2 text-2xl font-bold text-gray-50'>
          Trending Movies
        </h2>
        <AliceCarousel
          items={list}
          infinite
          responsive={responsive}
          disableDotsControls
        />
      </div>
    </section>
  );
}

TitleCardList.propTypes = {
  titles: PropTypes.array.isRequired,
};
