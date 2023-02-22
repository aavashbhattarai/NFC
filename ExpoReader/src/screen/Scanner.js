import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Scanner = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-slate-800 pt-10">
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="m-4 ml-auto "
      >
        <Icon name="person" color={"#fff"} size={24} />
      </TouchableOpacity>
      <View className="my-auto mx-auto">
        <Icon name="scan-circle-outline" color={"#fff"} size={140} />
      </View>
    </SafeAreaView>
  );
};

export default Scanner;
