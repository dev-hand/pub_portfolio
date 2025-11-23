import styled from 'styled-components';

const ContentContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

export const HomeContent = () => {
  return (
    <ContentContainer>
      <Title>Welcome to Home Page</Title>
      <Description>
        This is a sample home page content. You can modify this content according to your needs.
      </Description>
    </ContentContainer>
  );
};