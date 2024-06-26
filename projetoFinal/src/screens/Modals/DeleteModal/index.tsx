import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./style"
import { Books } from "../../../types/types";
import { useNavigation } from "@react-navigation/native";
import api from "../../../services/Books/apiBook";


interface ModaDeleteProps {
    visible: boolean;
    livro: Books;
    onRequestClose: () => void;
  }
const DeleteModal = ({ onRequestClose, visible, livro }: ModaDeleteProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState<boolean>();
  const navigation = useNavigation();

  const voltarPagina = () => {
    navigation.goBack();
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  const deleteLivro = async (id: string) => {
    try {
      const { data } = await api.delete(`/livros/${id}`);
      console.log(data);
      voltarPagina();
      console.warn("Livro excluído com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView
              style={styles.scrollModal}
              showsVerticalScrollIndicator={false}
            >
              <View>
                <View style={styles.container}>
                  <View style={styles.containerPopUP}>
                    <View style={styles.containerTit}>
                      <Text style={styles.tit}>
                        Deseja mesmo excluir o livro
                      </Text>
                      <Text style={styles.tit}> {livro.nome} ?</Text>
                    </View>
                    <View style={styles.containerTex}>
                      <Text style={styles.tex}>
                        Essa ação não poderá ser desfeita!
                      </Text>
                    </View>
                    <View style={styles.containerBotao}>
                      <TouchableOpacity
                        onPress={onRequestClose}
                        style={[styles.button, styles.buttonClose]}                      >
                        <Text style={styles.textStyle}>
                          Não
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => deleteLivro(livro.id)}
                      >
                        <Text style={styles.textStyle}>Sim</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteModal;
