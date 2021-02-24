import Link from 'next/link';

function Sobre(props){
  return (
    <div>
      <h1>Sobre</h1>
      <Link href="/">
        <a>Link para Home</a>
      </Link>
    </div>
  );
}

export default Sobre;

export function getStaticProps(){
  
}