import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f8f9fa;
  padding: 48px 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #646cff;
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 24px;
  margin-top: 24px;
  border-top: 1px solid #e9ecef;
  color: #666;
  font-size: 14px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <FooterLink href="/about">Company</FooterLink>
          <FooterLink href="/careers">Careers</FooterLink>
          <FooterLink href="/press">Press</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="/help">Help Center</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Terms of Service</FooterLink>
          <FooterLink href="/cookies">Cookie Policy</FooterLink>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © 2024 Your Company. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};