import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {KeycodeInput} from 'react-native-keycode';
import Icon from 'react-native-vector-icons/Ionicons';
import {auth} from '../../firebase';
const EnterPin = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="mt-4 mx-3">
        <Icon name="chevron-back-outline" color="#cfcfcf" size={28} />
      </TouchableOpacity>
      <View className="my-auto mx-auto ">
        <Text className="text-center my-3 text-4xl text-white font-bold">
          Enter Pin
        </Text>
        <View className="my-auto mx-auto bg-white p-6 rounded-2xl">
          <KeycodeInput
            alphaNumeric={false}
            onComplete={value => {
              if (auth.currentUser.displayName == value) {
                navigation.navigate('Gallery');
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterPin;
