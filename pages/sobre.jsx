import Link from 'next/link';

export default function Sobre(props){
  return (
    <div>
      <h1>Sobre</h1>
      <Link href="/">
        <a>Link para Home</a>
      </Link>
    </div>
  );
}

export function getStaticProps(){
  
}