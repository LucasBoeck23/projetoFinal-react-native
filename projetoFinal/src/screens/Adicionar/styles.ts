import { StyleSheet } from "react-native";

 export const style = StyleSheet.create({
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
      zIndex: 1,
    },
    bookImgContainer: {
      flex: 1.2,
      justifyContent: "center",
      alignItems: "center",
    },
    bookInfoContainer: {
      flex: 1.8,
      marginLeft:"1%",
      height: "80%",
      alignSelf: "center",
    },
    bookImg: {
    height:"100%",
    width:"100%",
    borderRadius:10,
    right:10
    },
    containerNomeLivro: {
      flex: 2,
    
    },
    inputNomeLivro: {
      fontFamily: "Poppins-SemiBold",
      color: "#F5FFFA",
      fontSize: 20,
      height:60,
      justifyContent:"center"
    },
    containerAutorLivro: {
      flex: 1,
    },
    inputAutorLivro: {
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
      alignItems: "center",
      marginBottom: "2%"
    },
    inputDetailText: {
      color: "#7A7A7A",
      fontSize: 16,
      maxHeight:200,
      flexWrap:"wrap",
    },
    infoTitle: {
      color: "#012E43",
      fontSize: 16,
    }
  });