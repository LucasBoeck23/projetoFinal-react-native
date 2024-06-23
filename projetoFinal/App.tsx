import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./src/routes/stack";
import { KeyboardAvoidingView } from "react-native";


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}