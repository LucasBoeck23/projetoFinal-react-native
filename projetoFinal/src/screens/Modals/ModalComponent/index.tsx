import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from "./style"
import { ModalEditar } from '../../../types/types';

export const ModalComponent = ({onRequestClose,visible}:ModalEditar) => {

  const [modalVisible, setModalVisible] = useState(false);
    return (

      <View style={styles.centeredView}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={onRequestClose}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView style={styles.scrollModal}
              showsVerticalScrollIndicator={false}>
              
              <TouchableOpacity onPress={onRequestClose} style={styles.botaoCancelar}>
                <Text style={styles.TextoBotaoCancelar}> Cancelar </Text>
              </TouchableOpacity>
              <Text style={styles.modalTitulo}>Nome do Livro: </Text>
             <TextInput style={styles.input}
             placeholder='Nome do Livro que estava antes'
             />
              <Text style={styles.modalTitulo}>Autor(a): </Text>
             <TextInput style={styles.input}
             placeholder='Nome do Autor que estava antes'
             />
              <Text style={styles.modalTitulo}>Editora: </Text>
             <TextInput style={styles.input}
             placeholder='Nome da Editora que estava antes'
             />
              <Text style={styles.modalTitulo}>Categoria: </Text>
             <TextInput style={styles.input}
             placeholder='Nome da Categoria que estava a...'
             />
              <Text style={styles.modalTitulo}>Preço: </Text>
             <TextInput style={styles.input}
             placeholder='Preço que estava antes'
             />
              <Text style={styles.modalTitulo}>Qnt. Paginas: </Text>
             <TextInput style={styles.input}
             placeholder='Qnt de Páginas que estava antes'
             />
              <Text style={styles.modalTitulo}>Sumario: </Text>
             <TextInput style={styles.input}
             placeholder='Texto que estava antes'
             />
              <Text style={styles.modalTitulo}>Url Imagem da Capa: </Text>
             <TextInput style={styles.input}
             placeholder='Endereço que estava antes'
             />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Salvar Edição</Text>
              </Pressable>
                  </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
