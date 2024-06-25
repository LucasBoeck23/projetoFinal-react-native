export type Books ={
    id: string;
    nome: string;
    autor: string;
    editora: string;
    categoria: string;
    preco: string;
    qntpaginas: string;
    imagem: string;
    sinopse: string;
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

export type StackNavigation ={
  Home: undefined
  Login: undefined
  MyTabs: undefined
  DetalheProduto:{ Book:Books }
  Adicionar: undefined
  Autores: undefined
}
