export type Books ={
    id: string;
    nome: string;
    autor: string;
    editora: string;
    categoria: string;
    preco: string;
    qntpaginas: string;
    imagem: string;
    sinapse: string;
  };

  export interface ModalEditar {
    visible:boolean,
    onRequestClose: () => void
  }

  
export type Logins = {
  "id" : string;
  "email":string;
  "password":string;
}