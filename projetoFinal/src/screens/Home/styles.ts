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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  vitrineContainer: {
    alignItems:"center",
    flexGrow: 1,
    left: "6.5%",

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
  flatlist:{
    flex:1,
    flexDirection:"column"
  }
});
