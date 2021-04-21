// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import TitleCard from './TitleCard';

export default function TitleCardList({ titles }) {
  const list = titles.map((title, index) => {
    return <TitleCard {...title} key={index} />;
  });

  return <section className='flex'>{list}</section>;
}

TitleCardList.propTypes = {
  titles: PropTypes.array.isRequired,
};
