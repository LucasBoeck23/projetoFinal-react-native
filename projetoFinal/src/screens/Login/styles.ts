import { StyleSheet } from "react-native";


 export const styles = StyleSheet.create({
    container: {
      width:"100%",
      height:"100%",
      position:"absolute"
    },
    scrollView: {
      flexGrow:1,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
      gap: 25,
      paddingTop: "10%"
    },
    icone: {
      width: "20%",
      top: "1%"
    },
    botaoContainer: {
      flexDirection: "row",
      width: "50%",
      justifyContent: "flex-end",
      gap: 15,
    },
    botao: {
      backgroundColor: "#6495ED",
      height: 40,
      width: 95,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      elevation: 10,
    },
    botaoRegistrar: {
      borderColor: "#012E43",
      backgroundColor: "white",
      borderWidth: 2,
      height: 40,
      width: 95,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      elevation: 10,
    },
    textoBotaoRegistrar: {
      height: 20,
      color: "#012E43",
      fontFamily: "Poppins-SemiBold",
    },
    textoBotao: {
      height: 20,
      color: "white",
      fontFamily: "Poppins-SemiBold",
    },
    boasVindasContainer: {
      width: "100%",
      height:"28%",
      alignItems: "center",
      justifyContent:"flex-end",
    },
    logo: {
      width:"30%",
      height:"50%"
    },
    titulo: {
      fontSize: 50,
      fontFamily: "Poppins-Bold",
      bottom: "5%",
    },
    textoBoasVindasContainer: {
      flexDirection: "row",
      bottom: "6%",
      color: "#012E43",
    },
    textoBoasVindas: {
      fontFamily: "Poppins-Bold",
      fontSize: 15,
    },
    formularioContainer: {
      height: "35%",
      width: "90%",
      alignItems: "center",
    },
    textoformulario: {
      fontSize: 17,
      color: "#012E43",
      fontFamily: "Poppins-Bold",
      alignSelf: "flex-start",
      left: 20,
    },
    input: {
      height: "21%",
      width: "100%",
      backgroundColor: "white",
      borderRadius: 50,
      borderColor: "#012E43",
      borderWidth: 2,
      marginBottom: 15,
      fontSize: 20,
      paddingStart: 20,
    },
    botaoPrincipal: {
      top: 10,
    },
    desenhoInferior:{
      width:"65%",
      alignSelf:"flex-start",
      top: "1%"
  }
  });