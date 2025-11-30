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

const TechList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
`;

const TechCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: -0.2px;
  text-transform: none;
  line-height: 1.5;
`;

const TechSeparator = styled.span`
  margin: 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

interface TechItemData {
  name: string;
}

export const TechStack = () => {
  const techCategories: { title: string; items: TechItemData[] }[] = [
      {
        title: 'Languages',
        items: [
          { name: 'HTML5' },
          { name: 'CSS3' },
          { name: 'JavaScript' }
        ]
      },
      {
        title: 'Frameworks & Libraries',
        items: [
          { name: 'Vue.js (데이터 바인딩 및 UI 처리 수행)' },
          { name: 'React (학습)' }
        ]
      },
      {
        title: 'Styling',
        items: [
          { name: 'SCSS' }
        ]
      },
      {
        title: 'Tools',
        items: [
          { name: 'Vite' },
          { name: 'Git' },
          { name: 'GitHub' },
          { name: 'Figma' },
          { name: 'Jira' },
          { name: 'VS Code' }
        ]
      }
  ];

  return (
    <Section>
      <SectionTitle>Tech Stack</SectionTitle>
      {techCategories.map((category, index) => (
        <TechCategory key={index}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <TechList>
            {category.items.map((item, itemIndex) => (
              <span key={itemIndex}>
                {item.name}
                {itemIndex < category.items.length - 1 && <TechSeparator>·</TechSeparator>}
              </span>
            ))}
          </TechList>
        </TechCategory>
      ))}
    </Section>
  );
};

