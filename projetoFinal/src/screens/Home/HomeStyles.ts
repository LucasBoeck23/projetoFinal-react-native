import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  containerMain: {
    flex: 1,
    
  },
  statusbar: {
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6495ED",
    paddingHorizontal: 15,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  imagem: {
    marginTop: 15,
    width: 75,
    height: 75,
  },
  titulo: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },
  containerPesquisa: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    width: 230,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    paddingHorizontal: 10,
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
    flex: 1,
    alignItems: "center",
    
  },
  vitrineContainer: {
    justifyContent: "space-between",
  },
  livroImage: {
    width: 100,
    height: 140,
    marginTop: 20,
  },
});
