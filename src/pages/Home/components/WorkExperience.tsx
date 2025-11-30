import styled from 'styled-components';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.key};
  margin-bottom: 0;
  letter-spacing: -0.5px;
  line-height: 1.4;
`;

const ExperienceBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 16px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ExperienceItem = styled.div`
  padding: 0;
  border-left: 2px solid ${({ theme }) => theme.colors.border.light};
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: -7px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.key};
    border: 3px solid ${({ theme }) => theme.colors.background.default};
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  letter-spacing: -0.3px;
  line-height: 1.5;
`;

const Position = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: 1.6;
`;

const Period = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

const Description = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const DescriptionItem = styled.li`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  &:before {
    content: '';
    position: absolute;
    left: ${({ theme }) => theme.spacing.xs};
    top: 11px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.common.black};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const WorkExperience = () => {

  const experiences = [
    {
      company: '코나아이',
      position: '플랫폼인터렉티브 UX 과장 팀원',
      startDate: '2024.01',
      endDate: '2025.01',
      description: [
        '코나아이의 지역화폐 및 코나카드 기능 고도화 및 운영 업무를 수행하였으며, 기존 퍼블리싱 파트의 비표준화된 코드와 공통 컴포넌트 부재로 인한 비효율성을 개선했습니다',
        '프로젝트 전반에 걸쳐 재사용 가능한 공통 기능 라이브러리를 구축하고 명확한 코드 규칙을 수립하여, 개발 생산성을 대폭 향상하고 코드 품질을 높였습니다'
      ]
    },
    {
      company: '엠몬스타',
      position: '퍼블리싱팀 매니저',
      startDate: '2018.02',
      endDate: '2023.12',
      description: [
        '아이스탁몰, 엔스테이션, 패션플러스 등 다수의 E-커머스 프로젝트에서 프론트 및 어드민 페이지 퍼블리싱을 수행했습니다',
        '또한 엠몬스타의 자사 SI 솔루션 구축 퍼블리싱을 담당하며 프로젝트 리딩 경험을 쌓았습니다',
        '프로젝트 전반의 관리, 사전 페이지 분석, 레이아웃 설계, 공통 템플릿 제작 등을 성공적으로 수행했습니다'
      ]
    },
    {
      company: '애드미션',
      position: '개발팀 팀원',
      startDate: '2016.08',
      endDate: '2017.11',
      description: [
        '홈페이지 빌더 서비스의 사용자 인터페이스(UI) 퍼블리싱을 담당하며 직관적인 사용자 경험을 구현했습니다',
        '더불어 JavaScript를 활용한 핵심 기능 개발에 적극적으로 참여하여 퍼블리싱과 개발 간의 시너지를 창출했습니다'
      ]
    }
  ];

  // 기간 계산 함수 (yyyy.mm 형식, 시작월과 종료월 포함)
  const calculateDuration = (startDate: string, endDate: string | null) => {
    if (!endDate) {
      // 재직중인 경우 현재 날짜까지 계산
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1;
      endDate = `${currentYear}.${currentMonth.toString().padStart(2, '0')}`;
    }
    
    const [startYear, startMonth] = startDate.split('.').map(Number);
    const [endYear, endMonth] = endDate.split('.').map(Number);
    
    let years = endYear - startYear;
    let months = endMonth - startMonth + 1; // 시작월과 종료월 포함
    
    if (months > 12) {
      years++;
      months -= 12;
    } else if (months < 0) {
      years--;
      months += 12;
    }
    
    if (years > 0 && months > 0) {
      return `${years}년 ${months}개월`;
    } else if (years > 0) {
      return `${years}년`;
    } else {
      return `${months}개월`;
    }
  };

  // 기간 텍스트 생성
  const formatPeriod = (startDate: string, endDate: string | null) => {
    if (!endDate) {
      const duration = calculateDuration(startDate, null);
      return `${startDate} ~ 재직중 (${duration})`;
    }
    const duration = calculateDuration(startDate, endDate);
    return `${startDate} ~ ${endDate} (${duration})`;
  };

  // 총 경력 계산 (시작월과 종료월 포함)
  const calculateTotalExperience = () => {
    let totalMonths = 0;
    
    experiences.forEach(exp => {
      const [startYear, startMonth] = exp.startDate.split('.').map(Number);
      let endYear: number, endMonth: number;
      
      if (!exp.endDate) {
        // 재직중인 경우 현재 날짜까지 계산
        const now = new Date();
        endYear = now.getFullYear();
        endMonth = now.getMonth() + 1;
      } else {
        [endYear, endMonth] = exp.endDate.split('.').map(Number);
      }
      
      let years = endYear - startYear;
      let months = endMonth - startMonth + 1; // 시작월과 종료월 포함
      
      if (months > 12) {
        years++;
        months -= 12;
      } else if (months < 0) {
        years--;
        months += 12;
      }
      
      totalMonths += years * 12 + months;
    });
    
    const totalYears = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    
    if (totalYears > 0 && remainingMonths > 0) {
      return `${totalYears}년 ${remainingMonths}개월`;
    } else if (totalYears > 0) {
      return `${totalYears}년`;
    } else {
      return `${remainingMonths}개월`;
    }
  };

  return (
    <Section>
      <TitleContainer>
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceBadge>총 {calculateTotalExperience()}</ExperienceBadge>
      </TitleContainer>
      <ExperienceList>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <CompanyHeader>
              <CompanyInfo>
                <CompanyName>{exp.company}</CompanyName>
                <Position>{exp.position}</Position>
              </CompanyInfo>
              <Period>{formatPeriod(exp.startDate, exp.endDate)}</Period>
            </CompanyHeader>
            <Description>
              {exp.description.map((desc, descIndex) => (
                <DescriptionItem key={descIndex}>{desc}</DescriptionItem>
              ))}
            </Description>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </Section>
  );
};

