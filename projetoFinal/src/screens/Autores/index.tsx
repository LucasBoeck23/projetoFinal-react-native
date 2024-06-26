import { View, Text, Image } from "react-native";
import React from "react";
import Logo from "./../../../assets/image/Logo.png";
import Alexandre from "./../../../assets/image/AlexandreIcon.png";
import Ana from "./../../../assets/image/AnaIcon.png";
import Boeck from "./../../../assets/image/BoeckIcon.png";
import Enzo from "./../../../assets/image/EnzoIcon.png";
import Madu from "./../../../assets/image/MaduIcon.png";
import { useFonts } from "expo-font";
import { styles } from "./styles";
const Autorespage = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.Logo} />
        <Text style={styles.TextoLogo}> Colaboradores </Text>
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

