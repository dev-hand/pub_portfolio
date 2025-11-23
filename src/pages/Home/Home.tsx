import { HomeHeader } from './components/HomeHeader';
import { HomeContent } from './components/HomeContent';
import { HomeContainer } from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader />
      <HomeContent />
    </HomeContainer>
  );
};

export default Home;