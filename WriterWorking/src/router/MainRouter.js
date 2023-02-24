import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EnterPin from '../screen/EnterPin';
import Write from '../screen/Write';
import Gallery from '../screen/Gallery';

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="EnterPin" component={EnterPin} />
        <Stack.Screen name="Writer" component={Write} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
