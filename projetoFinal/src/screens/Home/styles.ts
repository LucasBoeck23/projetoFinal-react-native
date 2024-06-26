import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,

  },
  statusbar: {
    height: "18%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6495ED",
    paddingHorizontal: "5%",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2%",
  },
  imagem: {
    marginTop: "5%",
    width: "28%",
    height: "68%",
  },
  titulo: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },
  containerPesquisa: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    width: "112%",
    height: "32%",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    paddingHorizontal: "5%",
  },
  iconLupa: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  itemContainer: {
    alignItems: "center",

  },
  vitrineContainer: {
    justifyContent: "center",
  },
  livroImage: {
    width: 80,
    height: 120,
    marginTop: "15%",
    marginLeft: "8%",
  },
  
  textPrecoLivro: {
    color: "#6495ED",
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 2,
  },
});
