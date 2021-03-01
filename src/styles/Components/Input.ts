import styled from 'styled-components';
import { cinza, cinzaClaro } from '../VariaveisGlobais';

export const Input = styled.input`
  background:${cinza};
  padding:8px;
  border: 1px solid ${cinzaClaro};
  border-radius:5px;

  color:${({ theme }) => theme.text};
  font-size:1rem;
`