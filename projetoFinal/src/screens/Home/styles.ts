import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  statusbar: {
    position: "static",
    height: "18%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6495ED",
    paddingHorizontal: "5%",
  },
  textContainer: {
    height: "65%",
    width: "70%",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "6%",
    justifyContent: "space-evenly",
  },
  imagem: {
    marginTop: "5%",
    width: "22%",
    height: "48%",
  },
  titulo: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  containerPesquisa: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    width: "100%",
    height: "38%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000000",
    paddingHorizontal: "5%",
    backgroundColor: "#F5FFFA",
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  vitrineContainer: {
    alignItems: "center",
    top: "5%",
    flexGrow: 1,
  },
  imgView: {
    justifyContent: "center",
    alignItems: "center",
  },
  livroImage: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },

  textPrecoLivro: {
    color: "#012E43",
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    flexWrap: "wrap",
    height: 50,
    width: 110,
  },
  flatlist: {
    flex: 1,
    flexDirection: "column",
  },
});
