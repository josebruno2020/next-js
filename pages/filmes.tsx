import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '../src/services/api';
import { Titulo } from '../src/components/Titulo';
import { Container } from '../src/styles/Components/Container';
import { Button } from '../src/styles/Components/Button';
import { Lista } from '../src/components/Lista';
import { FormCadastro } from '../src/components/FormCadastro';

function Filmes({ filmes }){
  
  return (
    <Container>
      <Titulo>Filmes</Titulo>
      <Link href="/">
        <a>Link para Home</a>
      </Link>
      <FormCadastro />
      <ul>
        {
          filmes.data.map((filme) => (
            <Lista key={filme.id} {...filme}/>
          ))
        }
      </ul>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await api.get('/filmes');
  const filmes = await res.data;
  // if(res.ok === false){
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent:false
  //     }
  //   }
  // }
  
  return {
    props: {
      filmes
    },
    revalidate:1,
  }
}

export default Filmes;
