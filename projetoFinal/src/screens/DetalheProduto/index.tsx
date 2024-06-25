import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import { ModalComponent } from "../Modals/ModalComponent";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Books } from "../../types/types";
import api from "../../services/Books/apiBook";
import { getAllBooks, updateLivro } from "../../services/Books/booksService";

const SetaVoltar = require("../../../assets/icons/SetaVoltar.png");
const Lixeira = require("../../../assets/icons/Lixeira.png");
const LivroImprovisado = require("../../../assets/image/LivroImprovisado.png");


interface DetalhesProp {
  route: {
    params: {
      livro: Books;
    };
  };
}

export const DetalheProduto = ({route}:DetalhesProp) => {
  const [livro,setLivro] = useState(route.params.livro)
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

const voltarPagina = () => {
  navigation.goBack()
}
  const editar = () => { setModalVisible(!modalVisible)}

  const deleteLivro = async (id:string) =>{
    try {
      const { data } = await api.delete(`/livros/${id}`)
      console.log(data)
      voltarPagina()
    } catch (error) {
      console.log(error)
    }
  }
  const salvarEdicao = async (livroEditado: Books) => {
    try {
      const data  = await updateLivro(livro.id, livroEditado);
    if(data){
      setLivro(livroEditado)
    }
      setModalVisible(false);
    } catch (error) {
      console.log(error)
    }
  };


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
            <View style={style.containerApagar}>
              <TouchableOpacity onPress={() => deleteLivro(livro.id)}>
              <Image source={Lixeira} style={style.IconeLixeira} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.bookContainer}>
            <View style={style.bookImgContainer}>
            {livro.imagem  ? (
              <Image source={{ uri: livro.imagem }} style={[style.bookImg,{zIndex:1}]} />
            ) : (
              <Image source={require("../../../assets/image/LivroImprovisado.png")} style={style.bookImg} />
            )}
            </View>
            <View style={style.bookInfoContainer}>
              <View style={style.containerNomeLivro}>
                <Text style={style.textNomeLivro}>
                 {livro.nome}
                </Text>
              </View>
              <View style={style.containerAutorLivro}>
                <Text style={style.textAutorLivro}>{livro.autor}</Text>
              </View>
              <View style={style.containerBotao}>
                <TouchableOpacity activeOpacity={0.4} style={style.button} onPress={editar}>
                  <Text style={style.buttonText}>Editar Produto</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.containerBranco}>
          <View style={style.detailContainer}>
            <View>
              <Text style={style.detailTitle}>Sinopse</Text>
              <Text style={style.detailText}>
               {livro.sinopse}
              </Text>
            </View>
            <View>
              <Text style={style.detailTitle}>Informações</Text>
              <View>
                <View style={style.infoRow}>
                  <Text style={style.infoTitle}>Nome do Livro: </Text>
                  <Text style={style.detailText}>{livro.nome} </Text>
                </View>
                <View style={style.infoRow}>
                  <Text style={style.infoTitle}>Autor(a):</Text>
                  <Text style={style.detailText}>{livro.autor} </Text>
                </View >
                <View style={style.infoRow}>
                  <Text style={style.infoTitle}>Editora:</Text>
                  <Text style={style.detailText}>{livro.editora} </Text>
                </View>
                <View style={style.infoRow}>
                  <Text style={style.infoTitle}>Categoria:</Text>
                  <Text style={style.detailText}>{livro.categoria} </Text>
                </View>
                <View style={style.infoRow}>
                  <Text style={style.infoTitle}>Preço:</Text>
                  <Text style={style.detailText}>{livro.preco} </Text>
                </View>
                <View style={style.infoRow}>
                  <Text style={style.infoTitle}>Quantidade de Páginas: </Text>
                  <Text style={style.detailText}>{livro.qntpaginas} </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      <ModalComponent visible={modalVisible} onRequestClose={editar}  livro={livro}
        onSave={salvarEdicao} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ED",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  containerAzul: {
    flex: 1,
    backgroundColor: "#6495ED",
    flexDirection: "column",
  },
  containerBranco: {
    flex: 2,
    borderTopLeftRadius: 120,
    backgroundColor: "#F5FFFA",
    zIndex: -1,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: "32%",
  },
  goBack: {
    flexDirection: "row",
    marginLeft: "5%",
    marginBottom: "2%",
  },
  IconeVoltar: {
    marginTop: "2%",
  },
  minhaLoja: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    color: "#012E43",
  },
  containerApagar: {},
  IconeLixeira: {
    marginLeft: "3%",
  },
  bookContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "10%",
    height: "90%",
    width: "90%",
    zIndex: 2,
  },
  bookImgContainer: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  bookInfoContainer: {
    flex: 1.5,
    height: "80%",
    alignSelf: "center",
  },
  bookImg: {
    height:"100%",
    width:"100%",
    borderRadius:10,
    right:10,
    
  },
  containerNomeLivro: {
    flex: 2,
  },
  textNomeLivro: {
    fontFamily: "Poppins-SemiBold",
    color: "#F5FFFA",
    fontSize: 20,
  },
  containerAutorLivro: {
    flex: 1,
  },
  textAutorLivro: {
    fontFamily: "Poppins-SemiBold",
    color: "#012E43",
    fontSize: 14,
  },
  containerBotao: {
    flex: 2,
      height:40,
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop:20
  },
  button: {
    borderRadius: 20,
    width: "75%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6495ED",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  detailContainer: {
    marginTop: "23%",
    width: "90%",
    alignSelf: "center",
    paddingBottom: "18%"
  },
  detailTitle: {
    fontFamily: "Poppins-Bold",
    color: "#012E43",
    fontSize: 18,
    paddingBottom: "2%",
    paddingTop: "2%",
  },
  infoRow:{
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: "2%"
  },
  detailText: {
    color: "#7A7A7A",
    fontSize: 16,
  },
  infoTitle: {
    color: "#012E43",
    fontSize: 16,
  }
});
