import TopNav from '../components/TopNav';
import TitleCardList from '../components/TitleCardList';

export default function Home({ titles }) {
  return (
    <main>
      <TopNav />
      <TitleCardList titles={titles} />
    </main>
  );
}
