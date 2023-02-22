import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { KeycodeInput } from "react-native-keycode";
import Icon from "react-native-vector-icons/Ionicons";
const EnterPin = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <View className="mt-10 mx-3">
        <Icon name="chevron-back-outline" color="#cfcfcf" size={28} />
      </View>
      <View className="my-auto mx-auto ">
        <Text className="text-center my-3 text-4xl text-white font-bold">
          Enter Pin
        </Text>
        <View className="my-auto mx-auto bg-white p-6 rounded-2xl">
          <KeycodeInput
            textColor={"#ffffff"}
            alphaNumeric={false}
            onComplete={(value) => {
              alert(value);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterPin;
