import { useContext, useEffect, useState } from "react";
import api from "../services/api";

export function FormLogin(){
  
  const [errorMessage, setErrorMessage] = useState(null);
  const [loggedUser, setLoggedUser] = useState(true);
  const [filmes, setFilmes] = useState([]);
  const [nome, setNome] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    
    // async function Filmes () {
    //   try{

    //     const response = await api.get('/filmes');
    //     await setFilmes(response.data.data);
  
    //   } catch(response){
    //     console.log(response.data);
    //     //setErrorMessage(response.data);
    //   }
    // }
    // Filmes();
    
  })
  
  return (
    
    <div>
      <form onSubmit={async(e) => {
        e.preventDefault();
        
        try{
          await api.post('/filmes',  {
            nome:nome
          })
        }catch(response){
          setErrorMessage(response.data);
        }
        setNome("");
      }}>
        <input type="text" placeholder="Nome do Filme" name="nome" id="nome" value={nome} onChange={(e) => {
          setNome(e.target.value);
        }}/>
        {!isEdit ? (
          <button type="submit">Cadastrar Filme</button>
        ) : (
          <button type="button" onClick={async() => {
            await api.put(`/filmes/${id}`, {
              nome:nome
            })
            setNome("");
          }}>Editar</button>
        )}
        
      </form>
      
      <ul>
      {
      
        filmes.map(filme => (
          <li key={filme.id}>
            <span>{filme.nome}</span>
            
            <button onClick={() => {
               api.delete(`/filmes/${filme.id}`)
            }}>Deletar</button>
            <button onClick={() => {
              setIsEdit(true);
              setId(filme.id);
              setNome(filme.nome);
            }}>
              Editar
            </button>
          </li>
        ))
      }
      </ul>
      
    </div>
 
  );

 
}