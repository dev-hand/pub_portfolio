import { BasicInfo } from './components/BasicInfo';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { WorkExperience } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { HomeContainer } from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <BasicInfo />
      <About />
      <TechStack />
      <WorkExperience />
      <Projects />
    </HomeContainer>
  );
};

export default Home;