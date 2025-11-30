import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  letter-spacing: -0.5px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Header = () => {
  const { theme } = useTheme();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Portfolio</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};