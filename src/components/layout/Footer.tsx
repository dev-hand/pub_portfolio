import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </FooterLink>
          <FooterLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </FooterLink>
          <FooterLink href="mailto:example@email.com">
            Email
          </FooterLink>
        </FooterLinks>
        <FooterText>
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};