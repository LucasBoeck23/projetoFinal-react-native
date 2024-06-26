import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import Logo from "./../../../assets/image/Logo.png";
import Alexandre from "./../../../assets/image/AlexandreIcon.png";
import Ana from "./../../../assets/image/AnaIcon.png";
import Boeck from "./../../../assets/image/BoeckIcon.png";
import Enzo from "./../../../assets/image/EnzoIcon.png";
import Madu from "./../../../assets/image/MaduIcon.png";
const Autorespage = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.barra} >
      <View style={styles.logoContainer}>    
       <Image source={Logo} style={{width:"90%", height:"80%"}} /> 
      
      </View>
      
        {/* { <Image source={Logo}  /> } */}
        <Text style={styles.texto}> Autores</Text>
        
      </View>
      <View style={styles.conteudo}>
        <View style={styles.imagem}>
          <View style={styles.ale}>
            <Image
            source={Alexandre}
            style={styles.alexandre}
            resizeMode="cover"
          />
          <Text>Alexandre Silveira</Text>
          </View>
          <View style={styles.aninha} >
          <Image source={Ana} style={styles.ana} resizeMode="cover" />
          <Text>Ana Yukari</Text>
          </View>
        </View>

        <View style={styles.imagem}>
          <View style={styles.lucas} >
          <Image source={Boeck} style={styles.boeck} resizeMode="cover" />
          <Text>Lucas Boeck</Text>
          </View>
          <View style={styles.enzo2} >
          <Image source={Enzo} style={styles.enzo} resizeMode="cover" />
          <Text>Enzo Laffront</Text>
          </View>
        </View>

        <View style={styles.madu2}>
          <Image source={Madu} style={styles.madu} resizeMode="cover" />
          <Text>Maria Eduarda</Text>
        </View >
        
      </View>
    </View>
  );
};

export { Autorespage };

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barra: {
    height: "12%",
    backgroundColor: "#6495ED",
    flexDirection:"row"
  },
  texto: {
    color: "white",
    fontSize: 25,
    flex:1.6,
    textAlignVertical:"center",
    top:10
    
    
  },
  imagem: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50,
    width: "100%",
    alignItems: "baseline",
    
  },
  logo: {
    width: 90,
    height: 40,
    
  },
  logoContainer:{
    flex:1,
    alignItems:"center",
    top:15
  },
  alexandre: {
    width: "175%",
    height: 160,
  },
  ana: {
    width: "300%",
    height: 160,
  },
  boeck: {
    width: "250%",
    height: 160,
  },
  enzo: {
    width: "240%",
    height: 160,
  },
  madu: {
    marginTop: 1,
    width: 220,
    height: 160,
    justifyContent: "space-evenly",
    
  },
  madu2: {
    alignItems: "center",
    justifyContent:"center",
    bottom:40
  },
  nomes: {
    alignItems: "center",
    justifyContent: "center",
  },
  conteudo: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  ale:{
    justifyContent:"center",
    alignItems:"center"
  },
  aninha:{
    justifyContent:"center",
    alignItems:"center"
  },
  enzo2:{
    justifyContent:"center",
    alignItems:"center",
  },
  lucas:{
    justifyContent:"center",
    alignItems:"center"
  },

});

