import styled from 'styled-components';
import { Footer } from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};