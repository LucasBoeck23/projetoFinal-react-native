import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login/index";
import { Autores } from "./screens/Autores";
import { Home } from "./screens/Home";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { Adicionar } from "./screens/Adicionar";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#6495ED",
          borderTopColor: "transparent",
          position: "absolute",
          height: 70,
          paddingBottom:5,
          paddingTop:5
        },
        tabBarActiveTintColor:"white",
        tabBarLabelStyle: {
            fontSize: 13,
            color: 'white',
          },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size }) => (
            <Feather name="home" size={size} color={"white"} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name=" Adicionar "
        component={Adicionar}
        options={{
          tabBarIcon: ({ size }) => (
            <Feather name="plus" size={40} color={"white"} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Autores"
        component={Autores}
        options={{
          tabBarIcon: ({ size }) => (
            <Feather name="user" size={size} color={"white"} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};


const { Screen,Navigator } = createNativeStackNavigator()

export const MyStack = () => {
  return (
  <Navigator>
    <Screen
    name="Login"
    component={Login}
    options={{ headerShown: false }}
    />
    <Screen
    name="Main"
    component={MyTabs}
    options={{ headerShown: false }}
    />
  </Navigator>
  )
}