import { 
  corPrimariaClaro,
  corPrimariaEscuro,
  fundoClaro, 
  fundoEscuro, 
  textFundoClaro, 
  textFundoEscuro } from './VariaveisTema';

interface Tema {
  primary:string,
  body:string,
  text:string,

}

export const temaClaro: Tema = {
  primary: corPrimariaClaro,
  body: fundoClaro,
  text:textFundoClaro
};

export const temaEscuro: Tema = {
  primary: corPrimariaEscuro,
  body: fundoEscuro,
  text: textFundoEscuro
};