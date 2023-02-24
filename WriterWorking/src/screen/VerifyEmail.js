import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const VerifyEmail = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-slate-800 pt-10">
      <View className="my-auto mx-auto">
        <Icon
          name="scan-circle-outline"
          color={"#fff"}
          size={140}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Text className="text-center text-white text-xl mt-8">
          Please Verify Your Email Address
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;
