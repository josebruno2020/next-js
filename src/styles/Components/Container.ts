import styled from 'styled-components';

export const Container = styled.div`

  background: ${({ theme }) => (theme.body)};
  color: ${({ theme }) => (theme.text)};
  height:100vh;
  padding:0 3rem;

`;