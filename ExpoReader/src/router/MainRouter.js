import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Scanner from "../screen/Scanner";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import Gallery from "../screen/Gallery";
import EnterPin from "../screen/EnterPin";
import Write from "../screen/Write";

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Scanner} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Write" component={Write} />
        <Stack.Screen name="EnterPin" component={EnterPin} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
