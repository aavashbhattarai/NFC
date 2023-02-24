import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Splash = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-slate-800 pt-10">
      <View className="my-auto mx-auto">
        <Icon name="scan-circle-outline" color={"#fff"} size={140} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
