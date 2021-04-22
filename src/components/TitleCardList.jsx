import PropTypes from 'prop-types';
import TitleCard from './TitleCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TitleCardList({ titles }) {
  const list = titles.map((title, index) => {
    return <TitleCard {...title} key={index} />;
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className='flex flex-col px-14'>
      <div>
        <h2 className='mb-2 text-2xl font-bold text-gray-50'>
          Trending Movies
        </h2>
        <Slider {...settings}>{list}</Slider>
      </div>
    </section>
  );
}

TitleCardList.propTypes = {
  titles: PropTypes.array.isRequired,
};
