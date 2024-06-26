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
import { styles } from "./styles";
import { getAllBooks } from "../../services/Books/booksService";
import { Books } from "../../types/types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export const Home = ({ navigation }: any) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [allBooks, setAllBooks] = useState<Books[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const [id, setId] = useState("");

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

  const handleDetalhes = (livro: Books) => {
    navigation.navigate("DetalheProduto", { livro });
  };

  useFocusEffect(
    useCallback(() => {
      getbooks();
    }, [])
  );

  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  if (isLoading) {
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
    <View style={styles.containerMain}>
      <View style={styles.statusbar}>
        <View style={styles.textContainer}>
          <Text style={styles.titulo}>
            Bem vindo(a) a sua <Text style={{ color: "#ffffff" }}>loja</Text>!
          </Text>
          <View style={styles.containerPesquisa}>
            <Image
              source={require("../../../assets/image/Vector.png")}
              style={styles.iconLupa}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Pesquisa por títulos"
              placeholderTextColor="#012E43"
              onChangeText={setSearchWord}
            />
          </View>
        </View>
        <Image
          source={require("../../../assets/image/IconPerfil.png")}
          style={styles.imagem}
        />
      </View>
      <FlatList
        data={allBooks.filter(filterBooks)}
        numColumns={3}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => handleDetalhes(item)}>
              <View style={styles.imgView}>
                <Image
                  source={{ uri: item.imagem }}
                  style={styles.livroImage}
                />
              </View>
              <Text
                style={styles.textPrecoLivro}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {item.nome}
              </Text>
              <Text style={styles.textPrecoLivro}>
                <Text>R$ </Text>
                {item.preco}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.vitrineContainer}
      />
    </View>
  );
};

export default Home;
