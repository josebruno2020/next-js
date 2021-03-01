import { useState } from "react";
import jwt_decode from 'jwt-decode'; 
import AsyncLocalStorage from '@createnextapp/async-local-storage';
import api from "../src/services/api";


function Login(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loggedUser, setLoggedUser] = useState(false);

  return (
    <form onSubmit={async(e) => {
      e.preventDefault();
      try{
        const response =  await api.post('/login', {
          email:email,
          senha:senha
        });
        const {access_token} = response.data;
        var token = jwt_decode(access_token);
        console.log(token);
        await AsyncLocalStorage.setItem('@user_token', access_token);
        const user = await AsyncLocalStorage.setItem('@logged_user',true);
        setLoggedUser(true);

      } catch(response) {
        setErrorMessage(response.data);
      }
      

    }}>
      {!!errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}

      {!!loggedUser ? (
        <div>
          <p>Você está logado!</p>
        </div>
      ) : (
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" value={email} required onChange={(e) => {
            setEmail(e.target.value);
          }}/>

          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" value={senha} required onChange={(e) => {
            setSenha(e.target.value);
          }}/>
          <button type="submit" >Entrar</button>
        </div>
        
      )}
    </form>
  );
}

export default Login;