import api from "../../src/services/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { Container } from "../../src/styles/Components/Container";
import { Titulo } from "../../src/components/Titulo";

export default function  Filme({ filme }) {
  return (
    <Container>
      <Titulo>{filme.nome}</Titulo>
    </Container>
    
  )
}

export const getStaticPaths: GetStaticPaths = async(context) => {
  const response = await api.get('/filmes');
  const filmes = await response.data;

  const paths = filmes.data.map(filme => {
    return {params: {id:String(filme.id)}}
  });

  return {
    paths,
    fallback:true
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const { id } = context.params;
  const response = await api.get(`/filmes/${id}`);
  const filme = await response.data;

  return {
    props:{
      filme
    },
  }
}