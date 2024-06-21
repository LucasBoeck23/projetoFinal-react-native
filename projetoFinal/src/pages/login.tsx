import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";

export const Login = () => {
  const icone = require("../../assets/image/IconeApp.png");
  const Logo = require("../../assets/image/LogoApp.png");
  const botao = require("../../assets/image/BotaoEntrar.png");
  const desenhoInferior = require("../../assets/image/FundoCantoEsq.png");

  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={icone} style={styles.icone} />
        <View style={styles.botaoContainer}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}> Entrar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoRegistrar}>
            <Text style={styles.textoBotaoRegistrar}> Registrar </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boasVindasContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.titulo}> Entrar </Text>
        <View style={styles.textoBoasVindasContainer}>
          <Text style={styles.textoBoasVindas}> Bem Vindo(a), </Text>
          <Text style={[styles.textoBoasVindas, { color: "#6495ED" }]}>
            administardor(a){" "}
          </Text>
          <Text style={styles.textoBoasVindas}>! </Text>
        </View>
      </View>

      <View style={styles.formularioContainer}>
        <Text style={styles.textoformulario}> Seu Email: </Text>
        <TextInput
          style={styles.input}
          placeholder=" Ex: SeuEmail@Gmail.com"
        ></TextInput>

        <Text style={styles.textoformulario}> Sua Senha: </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Ex: 123456"
        ></TextInput>
        <TouchableOpacity style={styles.botaoPrincipal}>
          <Image source={botao}></Image>
        </TouchableOpacity>
        <Text
          style={[
            styles.textoformulario,
            { alignSelf: "center", left: 0, top: 10 },
          ]}
        >
        
          Esqueçeu a senha?
        </Text>
      </View>
      <Image source={desenhoInferior} style={styles.desenhoInferior} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent:"center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    gap: 25,
    paddingTop:30
  },
  icone: {
    width: 80,
    top:10
  },
  botaoContainer: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-evenly",
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
    width: 96,
    height: 104,
  },
  titulo: {
    fontSize: 50,
    fontFamily: "Poppins-Bold",
    bottom: 15,
  },
  textoBoasVindasContainer: {
    flexDirection: "row",
    bottom: 30,
    color: "#012E43",
  },
  textoBoasVindas: {
    fontFamily: "Poppins-Bold",
    fontSize: 15,
  },
  formularioContainer: {
    height: 270,
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
    height: 60,
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
    width:"70%",
    zIndex:-1,
    alignSelf:"flex-start"
}
});

export default Login;
