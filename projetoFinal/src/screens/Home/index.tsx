import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { getAllLogins } from "../../services/Login/LoginService";
import { Logins } from "../../../src/types/types";
import { useFonts } from "expo-font";
import { homeStyles } from "./HomeStyles";
import { getAllBooks } from "../../services/Books/booksService";
import { Books } from "../../types/types";
import { useFocusEffect } from "@react-navigation/native";

export const Home = () => {
  const [allLogins, setAllLogins] = useState<Logins[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [allBooks, setAllBooks] = useState<Books[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const [id, setId] = useState("");

  const getLogin = async () => {
    setCarregando(true);
    try {
      const logins = await getAllLogins();
      setAllLogins(logins);
    } catch (error) {
      console.log(error);
    }
    setCarregando(false);
  };

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

  // const handleDetalhes = (bookId: string) => {
  //   navigation.navigate("DetalheProduto", { id: bookId });
  // };

  useFocusEffect(
    useCallback(() => {
      getbooks();
    }, [])
  );

  useEffect(() => {
    getLogin();
  }, []);

  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (carregando) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  const filterBooks = (item: { nome: string }) => {
    if (searchWord === "") {
      return true;
    } else if (item.nome.toLowerCase().includes(searchWord.toLowerCase())) {
      return true;
    }
    return false;
  };

  return (
    <View style={homeStyles.containerMain}>
      <View style={homeStyles.statusbar}>
        <View style={homeStyles.textContainer}>
          <Text style={homeStyles.titulo}>
            Bem vindo(a) a sua <Text style={{ color: "#ffffff" }}>loja</Text>!
          </Text>
          <View style={homeStyles.containerPesquisa}>
            <Image
              source={require("../../../assets/image/Vector.png")}
              style={homeStyles.iconLupa}
            />
            <TextInput
              style={homeStyles.textInput}
              placeholder="Pesquisar"
              placeholderTextColor="#c8c8c8"
              onChangeText={setSearchWord}
            />
          </View>
        </View>
        <Image
          source={require("../../../assets/image/IconPerfil.png")}
          style={homeStyles.imagem}
        />
      </View>
      <FlatList
        data={allBooks.filter(filterBooks)}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={homeStyles.itemContainer}>
            <TouchableOpacity
            // onPress={() => 
            // handleDetalhes(item.id)}
            >
              <Image
                source={{ uri: item.imagem }}
                style={homeStyles.livroImage}
              />
              <Text style={homeStyles.textPrecoLivro}>{item.preco}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={homeStyles.vitrineContainer}
      />
    </View>
  );
};

export default Home;
