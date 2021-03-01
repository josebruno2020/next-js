import { useState } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import { Button } from '../styles/Components/Button';
import { Input } from '../styles/Components/Input';

const Form = styled.form`
  display:flex;
  margin: 10px 0;
`;

export function FormCadastro() {
  const [filme, setFilme] = useState("");

  return (
    <Form onSubmit={async (e) => {
      e.preventDefault();
      await api.post(`/filmes`, {
        nome:filme
      });
    }}>
      <Input 
        type="text" 
        value={filme}
        placeholder="Nome do Filme" 
        onChange={(e) => {
          setFilme(e.target.value);
        }}
      />
      <Button edit type="submit">Cadastrar</Button>
    </Form>
  );
}