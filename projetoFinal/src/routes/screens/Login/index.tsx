import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { getAllLogins, postNewLogin } from "../../services/LoginService";
import { Logins } from "../../types";

export const Login = () => {
  const icone = require("../../../../assets/image/IconeApp.png");
  const Logo = require("../../../../assets/image/LogoApp.png");
  const botao = require("../../../../assets/image/BotaoEntrar.png");
  const desenhoInferior = require("../../../../assets/image/FundoCantoEsq.png");

  const navigation = useNavigation();

  const navigateApp = () => {
    navigation.navigate("Main");
  };

  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../../../assets/fonts/Poppins-Bold.ttf"),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carregando, setCarregando] = useState<boolean>(false);

  const ValidaEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const ValidaPassword = (password:string) => {
    return password.length >= 5;
  };
  if (!fontsLoaded) {
    return null;
  }
  
  if (carregando) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  
  const postLogin = async () => {
    const newLogin = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      return(console.error("Por favor, preencha todos os campos."))
    }
    if (!ValidaEmail(email)) {
      return(console.error("Email Inválido"))
    }
    if (!ValidaPassword(password)) {
      return(console.error('A senha deve ter pelo menos 5 caracteres.'))
    }

    try {
      setCarregando(true)
      const Login = await postNewLogin(newLogin);
      console.log(Login);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
    setCarregando(false)
    console.warn("Login cadastrado com sucesso!")
  };


  const validaLogin = async () =>{
    const Login =  {
      email:email,
      password:password
    }

    if (!email || !password) {
      console.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      setCarregando(true)
      const data = await getAllLogins()
      const Validado = data.some(
        (item:Logins) => item.email == Login.email
        &&
        item.password == Login.password
      )

      if(Validado){
        console.warn("Login efetuado com sucesso!")
       navigateApp()
      } else{
        console.error("Email ou senha Invalidos!")
      }

    } catch (error) {
      console.log("Erro ao realizar login", error)
    }
    setCarregando(false)
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Image source={icone} style={styles.icone} />
          <View style={styles.botaoContainer}>
            <TouchableOpacity style={styles.botaoRegistrar} onPress={postLogin}>
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
              administardor(a)
            </Text>
            <Text style={styles.textoBoasVindas}>! </Text>
          </View>
        </View>

        <View style={styles.formularioContainer}>
          <Text style={styles.textoformulario}> Seu Email: </Text>
          <TextInput
            style={styles.input}
            placeholder=" Ex: SeuEmail@Gmail.com"
            value={email}
            onChangeText={setEmail}
          ></TextInput>

          <Text style={styles.textoformulario}> Sua Senha: </Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Ex: 123456"
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <TouchableOpacity style={styles.botaoPrincipal} onPress={() => validaLogin()}>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Login;
