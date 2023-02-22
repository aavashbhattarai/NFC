import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const Gallery = () => {
  return (
    <View className="flex-1 bg-slate-800">
      <View className="flex flex-row mt-12 px-3 space-x-4">
        <Icon name="chevron-back-outline" color="#cfcfcf" size={28} />
        <Text className="text-white text-xl">Gallery</Text>
      </View>
    </View>
  );
};

export default Gallery;
