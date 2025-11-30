import styled from 'styled-components';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  
  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing.xl};
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

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ProjectCard = styled.div`
  padding: 0;
  transition: opacity 0.2s ease;
`;

const ProjectHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: -0.4px;
  line-height: 1.4;
`;

const ProjectPeriod = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: -0.2px;
`;

const ProjectContribution = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

const ProjectDescription = styled.ul`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.9;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-left: 0;
  list-style: none;
  
  li {
    position: relative;
    padding-left: ${({ theme }) => theme.spacing.lg};
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
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechTag = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Link = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

interface ProjectLinks {
  github?: string;
  demo?: string;
  live?: string;
}

interface Project {
  title: string;
  period: string;
  contribution?: string;
  description: string[];
  tech: string[];
  links: ProjectLinks;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: '현대카드 M포인트몰 Admin 리뉴얼 구축 (프리랜서)',
      period: '2025.07 ~ 2025.12',
      contribution: '30%',
      description: [
        '대규모 이커머스 운영을 위한 관리자(Admin) 시스템 UI 전면 리뉴얼 수행',
        '복잡한 데이터 테이블 및 검색 필터 UI를 컴포넌트화하여 유지보수성 확보',
        '반복되는 UI 패턴을 모듈화하여 작업 효율성 및 코드 가독성 증대'
      ],
      tech: ['HTML5', 'CSS(SCSS)', 'JavaScript'],
      links: {}
    },
    {
      title: '지역화폐 및 코나카드 기능 고도화/운영 (공통화 작업)',
      period: '2024.01 ~ 2025.01',
      contribution: '40%',
      description: [
        '기존의 비표준화된 레거시 코드를 분석하여 HTML/CSS 구조 개선',
        '공통 UI 라이브러리 구축 및 명확한 코드 규칙(Convention) 수립',
        '중복 코드 제거 및 스타일 모듈화를 통해 운영 생산성 및 협업 효율 대폭 개선'
      ],
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      links: {}
    },
    {
      title: '더한옥헤리티지하우스 구축 및 운영',
      period: '2024.05 ~ 2024.12',
      contribution: '50%',
      description: [
        '웹 표준 및 웹 접근성 지침을 준수하여 시맨틱 마크업 구현',
        '운영 단계에서 발생하는 이슈에 대한 신속한 UI 대응 및 크로스 브라우징 처리'
      ],
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      links: {}
    },
    {
      title: '코나아이 카드 챗봇 UI 구축',
      period: '2024.03 ~ 2024.07',
      contribution: '100%',
      description: [
        '코나카드 및 지역화폐 고객 응대를 위한 대화형 인터페이스(말풍선, 선택지 등) 구현',
        '모바일 환경(iOS/Android Webview)에서의 터치 인터랙션 최적화 및 UX 개선'
      ],
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      links: {}
    },
    {
      title: 'KB 헬스케어 인앱 커머스 플랫폼 구축',
      period: '2023.11 ~ 2023.12',
      contribution: '35%',
      description: [
        'Vue.js 환경에서 컴포넌트 단위의 마크업 적용',
        '백엔드 데이터 바인딩을 고려한 템플릿 구조 설계 및 리스트/조건부 렌더링 처리',
        '개발자와의 긴밀한 협업을 통해 데이터 연동 단계에서의 UI 이슈 사전 방지'
      ],
      tech: ['Vue.js', 'HTML5', 'SCSS', 'JavaScript'],
      links: {}
    },
    {
      title: '인플루언서 커머스 플랫폼 Keeif 신규 구축',
      period: '2023.09 ~ 2023.12',
      contribution: '35%',
      description: [
        '인플루언서 미니샵 및 공동구매 프로모션 페이지 UI 구현',
        '파트너용 백오피스(Admin) 구축을 통해 상품 관리 및 정산 운영 편의성 제공'
      ],
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      links: {}
    },
    {
      title: '아이스탁몰 리뉴얼 구축 (PL 수행)',
      period: '2023.01 ~ 2023.03',
      contribution: '70%',
      description: [
        '프로젝트 퍼블리싱 리더로서 전체 일정 관리 및 팀원 코딩 컨벤션 수립',
        '노후화된 레거시 코드를 최신 마크업 구조로 리팩토링하여 서비스 성능 개선'
      ],
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      links: {}
    },
    {
      title: '엠몬스타 이커머스 솔루션 (블록 시스템) 구축',
      period: '2022.01 ~ 2023.08',
      contribution: '20%',
      description: [
        '사용자가 직접 메인을 구성할 수 있는 블록형 UI 시스템 및 가변형 레이아웃 개발',
        '다양한 쇼핑몰 테마에 대응 가능한 유연한 Admin UI 시스템 설계'
      ],
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      links: {}
    },
    {
      title: '엔스테이션몰(내셔널지오그래픽/NFL) 통합몰 구축',
      period: '2021.08 ~ 2021.12',
      contribution: '40%',
      description: [
        '모바일 상품 상세 페이지 핀치 줌(Pinch Zoom) 기능 구현 및 UX 고도화',
        '복잡한 상품 옵션 선택 UI 및 공동구매 기능을 직관적으로 구현'
      ],
      tech: ['HTML5', 'SCSS', 'JavaScript'],
      links: {}
    }
  ];

  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectPeriod>{project.period}</ProjectPeriod>
            </ProjectHeader>
            {project.contribution && (
              <ProjectContribution>기여도: {project.contribution}</ProjectContribution>
            )}
            <ProjectDescription>
              {project.description.map((item, descIndex) => (
                <li key={descIndex}>{item}</li>
              ))}
            </ProjectDescription>
            <TechTags>
              {project.tech.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechTags>
            <ProjectLinks>
              {project.links.github && (
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              )}
              {project.links.demo && (
                <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  데모 보기
                </Link>
              )}
              {project.links.live && (
                <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                  운영 사이트
                </Link>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectList>
    </Section>
  );
};

