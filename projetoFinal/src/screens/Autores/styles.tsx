import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flex: 0.15,
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#6495ED",
      flexDirection: "row",
      paddingTop: 10,
    },
    content: {
      flex: 0.77,
      top: "1%",
    },
    Logo: {
      width: "20%",
      height: "100%",
    },
    TextoLogo: {
      fontSize: 25,
      fontFamily: "Poppins-Bold",
    },
    containerAutores: {
      alignItems: "center",
      height: "85%",
      width: "55%",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    foto: {
      width: "100%",
      height: "100%",
    },
    autores: {
      fontFamily: "Poppins-SemiBold",
      top: 10,
      fontSize: 15,
    },
    fileira: {
      flexDirection: "row",
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  