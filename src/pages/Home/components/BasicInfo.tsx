import styled from 'styled-components';

const Section = styled.section`
  padding: 0 0 ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  
  &:first-child {
    padding-top: ${({ theme }) => theme.spacing.xl};
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.key};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  letter-spacing: -0.5px;
  line-height: 1.4;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ProfileImageContainer = styled.div`
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 2px solid ${({ theme }) => theme.colors.border.light};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.paper};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const InfoContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const InfoLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: 1.6;
`;

const EmailLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: 1.6;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.key};
  }
`;

export const BasicInfo = () => {
  const profileImageUrl = ''; // 여기에 프로필 이미지 URL을 넣으세요

  return (
    <Section>
      <SectionTitle>웹 퍼블리셔, 손경남입니다.</SectionTitle>
      <ContentWrapper>
        <ProfileImageContainer>
          {profileImageUrl ? (
            <ProfileImage src={profileImageUrl} alt="Profile" />
          ) : (
            <PlaceholderImage>사진</PlaceholderImage>
          )}
        </ProfileImageContainer>
        <InfoContainer>
          <InfoItem>
            <InfoLabel>이름</InfoLabel>
            <InfoValue>손경남</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>직무</InfoLabel>
            <InfoValue>웹 퍼블리셔</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>이메일</InfoLabel>
            <EmailLink href="mailto:dev.gngn@email.com">dev.gngn@email.com</EmailLink>
          </InfoItem>
          <InfoItem>
            <InfoLabel>연락처</InfoLabel>
            <InfoValue>010-2007-2441</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>위치</InfoLabel>
            <InfoValue>인천광역시, 서구</InfoValue>
          </InfoItem>
        </InfoContainer>
      </ContentWrapper>
    </Section>
  );
};

