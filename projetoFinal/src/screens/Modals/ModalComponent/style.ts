import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"rgba(0,0,0,0.7)",
  },
  modalTitulo:{
    alignSelf:"flex-start",
    left:16,
    bottom:5,
    fontSize:16
  },
  input:{
    width:"100%",
    height:50,
    borderColor:"black",
    borderWidth:1,
    borderRadius:15,
    paddingStart:16,
    fontSize:17,
    marginBottom:15
  },
  modalView: {
    margin: 20,
    width:"85%",
    backgroundColor: 'white',
    borderRadius: 20,
    padding:10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollModal:{
    width:"100%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    alignSelf:"center",
    width:"40%",
    marginBottom:10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  botaoCancelar:{
    height:"3%",
    width:"30%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red",
    borderRadius:50,
    marginBottom:5
  },
  TextoBotaoCancelar:{
    color:"white"
  }
});