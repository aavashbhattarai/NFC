import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Scanner from "../screen/Scanner";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import Gallery from "../screen/Gallery";
import EnterPin from "../screen/EnterPin";
import Write from "../screen/Write";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Splash from "../screen/Splash";
import VerifyEmail from "../screen/VerifyEmail";
import UploadFile from "../screen/UploadFile";
import OpenImage from "../screen/OpenImage";

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  const [state, setState] = useState(0);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.emailVerified) {
        setState(1);
      } else {
        setState(2);
      }
    } else {
      setState(-1);
    }
  });

  if (state == 1) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Scanner} />
          <Stack.Screen name="EnterPin" component={EnterPin} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Upload" component={UploadFile} />
          <Stack.Screen name="OpenImage" component={OpenImage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else if (state == -1) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Scanner} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else if (state == 2) {
    return <VerifyEmail />;
  } else {
    return <Splash />;
  }
};

export default MainRouter;
