import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  TextInput,
  Image,
} from "react-native";
import { styles } from "./styles";
import { getAllBooks } from "../../services/Books/booksService";
import { Books } from "../../types/types";
import api from "../../services/Books/apiBook";

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
        const { data } = await api.post("/livros", newBook);
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
    <View style={styles.container}>
      <Text> adicionar </Text>
      {/* <Button title="obter dados" onPress={getbooks} disabled={isLoading} /> */}
      <View>
        <TextInput
          placeholder="Nome do Livro"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder="Nome do(a) Autor(a)"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          placeholder="Nome da Editora"
          value={editora}
          onChangeText={setEditora}
        />
        <TextInput
          placeholder="Categoria do Livro"
          value={categoria}
          onChangeText={setCategoria}
        />
        <TextInput
          placeholder="Preço do Livro"
          value={preco}
          onChangeText={setPreco}
        />
        <TextInput
          placeholder="Quantidade de Páginas"
          value={paginas}
          onChangeText={setPaginas}
        />
        <TextInput
          placeholder="Imagem"
          value={imagem}
          onChangeText={setImagem}
        />
        <TextInput
          placeholder="Sinopse"
          value={sinopse}
          onChangeText={setSinopse}
        />
        <Button title="Cadastrar Livro" onPress={postBook} />
      </View>
      <FlatList
        data={allBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.imagem }}
              style={{ width: 100, height: 150 }}
            />
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};