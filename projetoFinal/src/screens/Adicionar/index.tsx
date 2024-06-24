import React, { useEffect, useState } from "react";
import { Text, View, Button, FlatList, ActivityIndicator, TextInput } from "react-native";
import { styles } from "./styles";
import { getAllBooks } from "../../services/Books/booksService";
import { Books } from "../../types/types";

export const Adicionar = () => {
  const [allBooks, setAllBooks] = useState<Books[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    getbooks();
  },[])

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
        <TextInput placeholder="Nome do Livro" />
        <TextInput placeholder="Nome do(a) Autor(a)"/>
        <TextInput placeholder="Nome da Editora"/>
        <TextInput placeholder="Categoria do Livro"/>
        <TextInput placeholder="Preço do Livro"/>
        <TextInput placeholder="Quantidade de Páginas"/>
        <TextInput placeholder="Imagem"/>
        <TextInput placeholder="Sinopse"/>
        <Button title="Cadastrar Livro" />
      </View>
      <FlatList
        data={allBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
};
