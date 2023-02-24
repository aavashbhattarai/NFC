import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputField from "../components/InputField";
import Icon from "react-native-vector-icons/Ionicons";
const Write = () => {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-slate-800 p-5">
      <View className="mt-20 mx-auto">
        <Icon name="cube-outline" color={"#fff"} size={100} />
      </View>
      <View className="mt-10">
        <Text className="text-white text-center text-5xl font-bold mb-10">
          Write To NFC
        </Text>
        <View className="flex flex-col space-y-5">
          <View>
            <InputField label={"Product Name"} setState={setEmail} />
          </View>
          <View>
            <InputField label="Product Id" setState={setPin} />
          </View>

          <View className="">
            <TouchableOpacity className="bg-white rounded-xl p-4 mt-10">
              <Text className="text-slate-800 text-center">Write To NFC</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Write;
