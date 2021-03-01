import api from "../services/api";
import { Button, ButtonEditar, ButtonFinalizarEdicao } from "../styles/Components/Button";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { Input } from "../styles/Components/Input";
import Link from "next/link";

const Li = styled.li`
  display:flex;
  justify-content:space-between;
  padding:10px 0;
`;

const Span = styled.span`
  color:${({ theme }) => theme.text}

`;


export function Lista({ id, nome }) {
  const [isActive, setIsActive] = useState(true);
  const [nomeFilme, setNomeFilme] = useState("");

  
  function aparecerInputEditar() {
    setIsActive((isEditar) => !isEditar);
    setNomeFilme(nome);
  }

  return (
    <Li>
      {isActive ? (
        <Span>
          <Link href={`/filmes/${id}`}>
            <a>
              {nome}
            </a>
          </Link>
        </Span>
        
      ) : (
        <span>
          <Input 
            type="text" 
            value={nomeFilme} 
            onChange={(e) => setNomeFilme(e.target.value)}
          />
          <ButtonFinalizarEdicao
            onClick={async(e) => {
              await api.put(`/filmes/${id}`, {
                nome:nomeFilme
              })
              setIsActive(true);
            }}
          >
            Editar
          </ButtonFinalizarEdicao>
        </span>
        
      )}
      
      <span>
        <Button 
          value={id}
          type="button"
          onClick={async() => {
            const response = await api.delete(`/filmes/${id}`);
            console.log(response);
          }}
        >
          Deletar
        </Button>
        <ButtonEditar 
          value={id}
          type="button"
          onClick={aparecerInputEditar}
          edit
        >
          {isActive ? 'Editar' : 'Cancelar'}
        </ButtonEditar>
      </span>
      
      
    </Li>
  );
}