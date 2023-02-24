import {
  View,
  Text,
  TouchableOpacity,
  Image,
  CameraRoll,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const OpenImage = ({navigation, route}) => {
  const [image, setImage] = useState(route.params.image);
  const saveImageToGallery = async imageUrl => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'This app needs access to your storage to save photos',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission not granted!');
        return;
      }
    }

    CameraRoll.save(imageUrl, {type: 'photo'})
      .then(() => {
        console.log('Image saved to gallery!');
      })
      .catch(error => {
        console.log('Error saving image to gallery:', error);
      });
  };
  return (
    <View className="flex-1 bg-slate-800">
      <View className="flex flex-row mt-12 px-3 ">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" color="#cfcfcf" size={28} />
        </TouchableOpacity>
      </View>
      <View className="p-10 rounded-2xl">
        <Image source={{uri: image}} className="w-full h-5/6 rounded-2xl" />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => saveImageToGallery(route.params.image)}
          className="p-4 mt-4 mb-10 bg-white rounded-xl">
          <Text className="text-slate-800 text-center font-bold">Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OpenImage;
