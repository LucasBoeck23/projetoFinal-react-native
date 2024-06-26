import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Logo from "./../../../assets/image/Logo.png";
import Alexandre from "./../../../assets/image/AlexandreIcon.png";
import Ana from "./../../../assets/image/AnaIcon.png";
import Boeck from "./../../../assets/image/BoeckIcon.png";
import Enzo from "./../../../assets/image/EnzoIcon.png";
import Madu from "./../../../assets/image/MaduIcon.png";
import { useFonts } from "expo-font";
const Autorespage = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.Logo} />
        <Text style={styles.TextoLogo}> Autores </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.fileira}>
          <View style={styles.containerAutores}>
            <Image source={Alexandre} style={styles.foto}></Image>
            <Text style={styles.autores}> Alexandre </Text>
          </View>
          <View style={styles.containerAutores}>
            <Image source={Ana} style={styles.foto}></Image>
            <Text style={styles.autores}> Ana Yukari </Text>
          </View>
        </View>
        <View style={styles.fileira}>
          <View style={styles.containerAutores}>
            <Image source={Enzo} style={styles.foto}></Image>
            <Text style={styles.autores}> Enzo Laffont </Text>
          </View>
          <View style={styles.containerAutores}>
            <Image source={Boeck} style={styles.foto}></Image>
            <Text style={styles.autores}> Lucas Boeck </Text>
          </View>
        </View>
        <View style={styles.fileira}>
          <View style={styles.containerAutores}>
            <Image source={Madu} style={styles.foto}></Image>
            <Text style={styles.autores}> Maria Eduarda </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export { Autorespage };

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
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
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
