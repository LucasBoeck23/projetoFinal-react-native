import React, {  useState } from "react";
import {
  Modal,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./style";
import { Books } from "../../../types/types";

interface ModalEditarProps {
  visible: boolean;
  livro: Books;
  onRequestClose: () => void;
  onSave: (livroEditado: Books) => void;
}

export const ModalComponent: React.FC<ModalEditarProps> = ({
  visible,
  livro,
  onRequestClose,
  onSave,
}) => {
  const [livroEditado, setLivroEditado] = useState<Books>(livro);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  const updateLivro = () => {
    try {
      onSave(livroEditado);
      onRequestClose();
      console.warn("Suas Alterações foram salvas!")
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
              <TouchableOpacity
                onPress={onRequestClose}
                style={styles.botaoCancelar}
              >
                <Text style={styles.TextoBotaoCancelar}> Cancelar </Text>
              </TouchableOpacity>
              <Text style={styles.modalTitulo}>Nome do Livro: </Text>
              <TextInput
                style={styles.input}
                placeholder="Nome do Livro"
                value={livroEditado.nome}
                onChangeText={(text) =>
                  setLivroEditado({ ...livroEditado, nome: text })
                }
              />
              <Text style={styles.modalTitulo}>Autor(a): </Text>
              <TextInput
                style={styles.input}
                placeholder="Nome do Autor"
                value={livroEditado.autor}
                onChangeText={(text) =>
                  setLivroEditado({ ...livroEditado, autor: text })
                }
              />
              <Text style={styles.modalTitulo}>Editora: </Text>
              <TextInput
                style={styles.input}
                placeholder="Nome da Editora"
                value={livroEditado.editora}
                onChangeText={(text) =>
                  setLivroEditado({ ...livroEditado, editora: text })
                }
              />
              <Text style={styles.modalTitulo}>Categoria: </Text>
              <TextInput
                style={styles.input}
                placeholder="Nome da Categoria"
                value={livroEditado.categoria}
                onChangeText={(text) =>
                  setLivroEditado({ ...livroEditado, categoria: text })
                }
              />
              <Text style={styles.modalTitulo}>Preço: </Text>
              <TextInput
                style={styles.input}
                placeholder="Preço"
                value={livroEditado.preco}
                onChangeText={(text) =>
                  setLivroEditado({ ...livroEditado, preco: text })
                }
              />
              <Text style={styles.modalTitulo}>Qnt. Paginas: </Text>
              <TextInput
                style={styles.input}
                placeholder="Qnt de Páginas"
                value={livroEditado.qntpaginas}
                onChangeText={(text) =>
                  setLivroEditado({ ...livroEditado, qntpaginas: text })
                }
              />
              <Text style={styles.modalTitulo}>Sumario: </Text>
              <TextInput
                style={styles.input}
                placeholder="Texto"
                value={livroEditado.sinopse}
                onChangeText={(text) =>
                  setLivroEditado({ ...livroEditado, sinopse: text })
                }
              />
              <Text style={styles.modalTitulo}>Url Imagem da Capa: </Text>
              <TextInput
                style={styles.input}
                placeholder="URL da Capa"
                value={livroEditado.imagem}
                onChangeText={(text) =>
                  setLivroEditado({ ...livroEditado, imagem: text })
                }
              />
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={updateLivro}
              >
                <Text style={styles.textStyle}>Salvar Edição</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};
