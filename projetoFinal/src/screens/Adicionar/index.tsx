import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { style } from "./styles";
import { getAllBooks, postNewBook } from "../../services/Books/booksService";
import { Books } from "../../types/types";
import api from "../../services/Books/apiBook";
import { ModalComponent } from "../Modals/ModalComponent";
import { useNavigation } from "@react-navigation/native";

export const Adicionar = () => {
  const [allBooks, setAllBooks] = useState<Books[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [nome, setNome] = useState("");
  const [autor, setAutor] = useState("");
  const [editora, setEditora] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [paginas, setPaginas] = useState("");
  const [imagem, setImagem] = useState("");
  const [sinopse, setSinopse] = useState("");


  const SetaVoltar = require("../../../assets/icons/SetaVoltar.png");
  const Lixeira = require("../../../assets/icons/Lixeira.png");
  const LivroImprovisado = require("../../../assets/image/LivroImprovisado.png");

  
  const [modalVisible, setModalVisible] = useState(false);

  const editar = () => { setModalVisible(!modalVisible)}

  const getbooks = async () => {
    setLoading(true);
    try {
      const books = await getAllBooks();
      setAllBooks(books);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const navigation= useNavigation()
const voltarPagina = () => {
  navigation.goBack()
}

  const postBook = async () => {
    const newBook = {
      nome: nome,
      autor: autor,
      editora: editora,
      categoria: categoria,
      preco: preco,
      paginas: paginas,
      imagem: imagem,
      sinopse: sinopse,
    };
    if (
      newBook.autor &&
      newBook.categoria &&
      newBook.editora &&
      newBook.imagem &&
      newBook.nome &&
      newBook.paginas &&
      newBook.preco &&
      newBook.sinopse
    ) {
      try {
        const  data  = await postNewBook(newBook);
        setAllBooks([...allBooks, data]);
        console.log(data);
        setNome("");
        setAutor("");
        setEditora("");
        setCategoria("");
        setPreco("");
        setPaginas("");
        setImagem("");
        setSinopse("");
      } catch (err) {
        console.log(err);
      }
    } else {
      window.alert("Preencha todos os campos!");
    }
  };

  useEffect(() => {
    getbooks();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <ScrollView style={style.container}>
    <View style={style.containerAzul}>
      <View style={style.header}>
        <View style={style.goBack}>
          <TouchableOpacity style={{flexDirection:"row"}} onPress={voltarPagina}>
          <Image source={SetaVoltar} style={style.IconeVoltar} />
          <Text style={style.minhaLoja}> Minha Loja</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.bookContainer}>
        <View style={style.bookImgContainer}>
        {imagem ? (
              <Image source={{ uri: imagem }} style={style.bookImg} />
            ) : (
              <Image source={require("../../../assets/image/LivroImprovisado.png")} style={style.bookImg} />
            )}
        </View>
        <View style={style.bookInfoContainer}>
          <View style={style.containerNomeLivro}>
           <TextInput style={style.inputNomeLivro}
           placeholder="Nome do Livro"
           placeholderTextColor={"white"}
           value={nome}
           multiline
           onChangeText={setNome}/>
          </View>
          <View style={style.containerAutorLivro}>
          <TextInput style={style.inputAutorLivro}
           placeholder="Autor(a)"
           placeholderTextColor={"#012E43"}
           value={autor}
           onChangeText={setAutor}/>
          </View>
          <View style={style.containerBotao}>
            <TouchableOpacity activeOpacity={0.4} style={style.button} onPress={postBook}>
              <Text style={style.buttonText}> Criar Produto </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    <View style={style.containerBranco}>
      <View style={style.detailContainer}>
        <View>
          <Text style={style.detailTitle}>Sinopse</Text>
          <TextInput style={style.inputDetailText}
           placeholder="Escreva sua sinopse"
           placeholderTextColor={"#7A7A7A"}
           value={sinopse}
           multiline
           onChangeText={setSinopse}/>
        </View>
        <View>
          <Text style={style.detailTitle}>Informações</Text>
          <View>
            <View style={style.infoRow}>
              <Text style={style.infoTitle}>Nome do Livro: </Text>
              <TextInput style={style.infoTitle}
            placeholder="Nome"
            value={nome}
            />
            </View>
            <View style={style.infoRow}>
              <Text style={style.infoTitle}>Autor(a): </Text>
              <Text style={style.detailText}> {autor} </Text>
            </View >
            <View style={style.infoRow}>
              <Text style={style.infoTitle}>Editora: </Text>
            <TextInput style={style.infoTitle}
            placeholder="editora"
            value={editora}
            onChangeText={setEditora}
            />
            </View>
            <View style={style.infoRow}>
              <Text style={style.infoTitle}>Categoria: </Text>
              <TextInput style={style.infoTitle}
            placeholder="categoria"
            value={categoria}
            onChangeText={setCategoria}
            />
            </View>
            <View style={style.infoRow}>
              <Text style={style.infoTitle}>Preço: </Text>
              <TextInput style={style.infoTitle}
            placeholder="preço"
            value={preco}
            onChangeText={setPreco}
            />
            </View>
            <View style={style.infoRow}>
              <Text style={style.infoTitle}>Quantidade de Páginas: </Text>
              <TextInput style={style.infoTitle}
            placeholder="Quantidade de páginas"
            value={paginas}
            onChangeText={setPaginas}
            />
            </View>
            <View style={style.infoRow}>
              <Text style={style.infoTitle}>Url da capa: </Text>
              <TextInput style={style.infoTitle}
            placeholder="Url"
            value={imagem}
            onChangeText={setImagem}
            />
            </View>
          </View>
        </View>
      </View>
    </View>
</ScrollView>
);
};