import styled from 'styled-components';
import { vermelho, vermelhoEscuro, verdeClaro, verdeEscuro, azulClaro, azulEscuro } from '../VariaveisGlobais';

export const Button =  styled.button`
  background: ${({ edit }) => edit ? verdeClaro : vermelho};
  cursor:pointer;
  padding:10px;
  transition: background 0.3s;
  border:none;
  border-radius:5px;
  font-size:0.9rem;

  :hover {
    background:${({ edit }) => edit ? verdeEscuro : vermelhoEscuro}
  }
  
`;

export const ButtonEditar = styled(Button)`
  margin-left: 5px;
`;

export const ButtonFinalizarEdicao = styled(ButtonEditar)`
  background: ${azulClaro};
  transition: background 0.2s;
  :hover {
    background: ${azulEscuro};
  }
`