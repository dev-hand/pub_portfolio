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

const DownloadSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const DownloadButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.key};
    color: ${({ theme }) => theme.colors.common.white};
    border-color: ${({ theme }) => theme.colors.key};
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const BasicInfo = () => {
  const profileImageUrl = ''; // 여기에 프로필 이미지 URL을 넣으세요
  
  // 파일 경로 (public/file 폴더에 파일을 추가한 후 경로를 수정하세요)
  const resumePath = '/file/손경남_경력기술서.pdf'; // 경력 기술서 파일 경로
  const portfolioPath = '/file/손경남_포트폴리오.pdf'; // 포트폴리오 파일 경로

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
      <DownloadSection>
        <DownloadButtons>
          <DownloadButton
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
          >
            경력 기술서 보기
          </DownloadButton>
          <DownloadButton
            href={portfolioPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            포트폴리오 보기
          </DownloadButton>
        </DownloadButtons>
      </DownloadSection>
    </Section>
  );
};

