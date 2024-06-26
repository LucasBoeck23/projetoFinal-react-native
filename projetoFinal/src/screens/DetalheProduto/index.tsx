import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { ModalComponent } from "../Modals/ModalComponent";
import { useNavigation } from "@react-navigation/native";
import { Books } from "../../types/types";
import { updateLivro } from "../../services/Books/booksService";
import DeleteModal from "../Modals/DeleteModal";
import { styles } from "./styles";

const SetaVoltar = require("../../../assets/icons/SetaVoltar.png");
const Lixeira = require("../../../assets/icons/Lixeira.png");


interface DetalhesProp {
  route: {
    params: {
      livro: Books;
    };
  };
}

export const DetalheProduto = ({ route }: DetalhesProp) => {
  const [livro, setLivro] = useState(route.params.livro);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const voltarPagina = () => {
    navigation.goBack();
  };
  const editar = () => {
    setModalVisible(!modalVisible);
  };
  const editarDelete = () => {
    setModalDelete(!modalDelete);
  };

  const salvarEdicao = async (livroEditado: Books) => {
    try {
      const data = await updateLivro(livro.id, livroEditado);
      if (data) {
        setLivro(livroEditado);
      }
      setModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerAzul}>
        <View style={styles.header}>
          <View style={styles.goBack}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={voltarPagina}
            >
              <Image source={SetaVoltar} style={styles.IconeVoltar} />
              <Text style={styles.minhaLoja}> Minha Loja</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerApagar}>
            <TouchableOpacity onPress={editarDelete}>
              <Image source={Lixeira} style={styles.IconeLixeira} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bookContainer}>
          <View style={styles.bookImgContainer}>
            {livro.imagem ? (
              <Image
                source={{ uri: livro.imagem }}
                style={[styles.bookImg, { zIndex: 1 }]}
              />
            ) : (
              <Image
                source={require("../../../assets/image/LivroImprovisado.png")}
                style={styles.bookImg}
              />
            )}
          </View>
          <View style={styles.bookInfoContainer}>
            <View style={styles.containerNomeLivro}>
              <Text style={styles.textNomeLivro}>{livro.nome}</Text>
            </View>
            <View style={styles.containerAutorLivro}>
              <Text style={styles.textAutorLivro}>{livro.autor}</Text>
            </View>
            <View style={styles.containerBotao}>
              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.button}
                onPress={editar}
              >
                <Text style={styles.buttonText}>Editar Produto</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerBranco}>
        <View style={styles.detailContainer}>
          <View>
            <Text style={styles.detailTitle}>Sinopse</Text>
            <Text style={styles.detailText}>{livro.sinopse}</Text>
          </View>
          <View>
            <Text style={styles.detailTitle}>Informações</Text>
            <View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Nome do Livro: </Text>
                <Text style={styles.detailText}>{livro.nome} </Text>
              </View>
              <View style={style.infoRow}>
                <Text style={style.infoTitle}>Autor(a): </Text>
                <Text style={style.detailText}>{livro.autor} </Text>
              </View>
              <View style={style.infoRow}>
                <Text style={style.infoTitle}>Editora: </Text>
                <Text style={style.detailText}>{livro.editora} </Text>
              </View>
              <View style={style.infoRow}>
                <Text style={style.infoTitle}>Categoria: </Text>
                <Text style={style.detailText}>{livro.categoria} </Text>
              </View>
              <View style={style.infoRow}>
                <Text style={style.infoTitle}>Preço: </Text>
                <Text style={style.detailText}>{livro.preco} </Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Quantidade de Páginas: </Text>
                <Text style={styles.detailText}>{livro.qntpaginas} </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ModalComponent
        visible={modalVisible}
        onRequestClose={editar}
        livro={livro}
        onSave={salvarEdicao}
      />
      <DeleteModal
        visible={modalDelete}
        onRequestClose={editarDelete}
        livro={livro}
      />
    </ScrollView>
  );
};