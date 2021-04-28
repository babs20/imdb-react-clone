import Description from '../components/TitlePage/Description';
import Nav from '../components/TitlePage/Nav';
import TopNav from '../components/TopNav';

export default function TitlePage({ title }) {
  return (
    <div>
      <TopNav />
      <Description {...title} />
      <Nav />
    </div>
  );
}
