import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

export const HomeHeader = () => {
  return (
    <HeaderContainer>
      <Logo>Home</Logo>
    </HeaderContainer>
  );
};