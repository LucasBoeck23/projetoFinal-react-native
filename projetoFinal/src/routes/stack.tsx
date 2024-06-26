import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/index";
import { Autorespage } from "../screens/Autores";
import { Home } from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import { Adicionar } from "../screens/Adicionar";
import { DetalheProduto } from "../screens/DetalheProduto";
import { StackNavigation } from "../types/types";

const Tab = createBottomTabNavigator();


export type StackTypes = NativeStackNavigationProp<StackNavigation>;
export type DetalhesProp = NativeStackNavigationProp<StackNavigation,"DetalheProduto">;
const  { Screen,Navigator } = createNativeStackNavigator<StackNavigation>()


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
        name="Colaboradores"
        component={Autorespage}
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


export const MyStack = () => {
  return (
  <Navigator>
    <Screen
    name="Login"
    component={Login}
    options={{ headerShown: false }}
    />
    <Screen
    name="MyTabs"
    component={MyTabs}
    options={{ headerShown: false}}
    />
    <Screen
    name="DetalheProduto"
    component={DetalheProduto}
    options={{ headerShown: false}}
    />
  </Navigator>
  )
}