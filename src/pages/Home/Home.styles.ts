import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  min-height: calc(100vh - 200px);
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  }
`;