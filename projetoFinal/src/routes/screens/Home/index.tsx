import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ActivityIndicator,
  FlatList
} from "react-native";
import { getAllLogins } from "../../services/LoginService";
import { Logins } from "../../types";


export const Home = () => {
  const [allLogins, setAllLogins] = useState<Logins[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);

  const getLogin = async () => {
    setCarregando(true);
    try {
      const Logins = await getAllLogins()
      setAllLogins(Logins)
    } catch (error) {
      console.log(error);
    }
    setCarregando(false);
  };



  if (carregando) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }


  return (
    <View>
      <Text> lista de login </Text>
    

      <FlatList
      data={allLogins}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>
            {item.email}
          </Text>
          <Text>
            {item.password}
          </Text>
        </View>
      )}
      />
      </View>
  );
};
