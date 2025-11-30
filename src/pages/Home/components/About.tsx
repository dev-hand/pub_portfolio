import styled from 'styled-components';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.key};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  letter-spacing: -0.5px;
  line-height: 1.4;
`;

const AboutContent = styled.div`
  max-width: 800px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 17px;
`;

const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const About = () => {
  return (
    <Section>
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>

        <Paragraph>
        안녕하세요. 사용자 경험을 중시하는 퍼블리셔 손경남입니다.
        </Paragraph>
        <Paragraph>
        [E-Commerce & Admin Specialist]<br></br>
        패션플러스, HAGO, Keeif, KB헬스케어 등 다양한 도메인의 이커머스 프로젝트를 수행하며 커머스 프로세스에 대한 깊은 이해를 쌓았습니다. 일반적인 쇼핑몰뿐만 아니라 블록형 솔루션, 인앱 커머스, 통합 관리자 시스템 등 복잡도가 높은 UI를 경험했습니다. 특히, "사용자가 보기 편한 화면"과 "관리자가 쓰기 편한 시스템"을 동시에 고려하며, 복잡한 비즈니스 로직을 직관적인 UI로 풀어내는 데 주력해왔습니다.
        </Paragraph>
        <Paragraph>
        [Systematic Code & PL Experience]<br></br>
        단순 구현을 넘어 '유지보수 가능한 코드'를 작성하는 것을 원칙으로 합니다. 코나아이에서 코드 베이스의 일관성 부재 문제를 해결하기 위해 공통 컴포넌트 시스템을 도입하고 엄격한 코드 규칙을 정립했습니다. 이러한 노력은 개발 생산성을 높이고, 협업하는 개발자와 불필요한 커뮤니케이션 비용을 줄이는 성과로 이어졌습니다.
        </Paragraph>
        <Paragraph>
        [Expanding to Frontend]<br></br>
        현재의 퍼블리싱 역량에 안주하지 않고 기술적 스펙트럼을 넓히고 있습니다. 실무에서 Vue.js 개발자와 협업하며 컴포넌트 데이터 바인딩 구조를 익혔으며, 최근에는 React를 학습하며 SPA 환경에서의 컴포넌트 설계 및 상태 관리에 대한 이해를 높이고 있습니다. 탄탄한 마크업/CSS 기본기를 바탕으로 프론트엔드 영역까지 아우르는, 대체 불가능한 UI 개발자가 되고자 합니다.
        </Paragraph>
      </AboutContent>
    </Section>
  );
};

