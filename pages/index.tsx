import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client'
import { Container } from '../src/styles/Components/Container';
import { Titulo } from '../src/components/Titulo';

function Home(){
  const [loggedUser, setLoggedUser] = useState(false);
  const [ session, loading ] = useSession()
  return (

    <Container>
        <Titulo>Home</Titulo>
        <Link href="/filmes">
          <a>Veja os filmes Cadastrados</a>
        </Link>
      
    </Container>
    
  );
}





export default Home;