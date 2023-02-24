import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {collection, getDocs} from 'firebase/firestore';
import {auth, db} from '../../firebase';

const Gallery = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [imageList, setImageList] = useState([]);
  const getImageGallery = async () => {
    const col1 = collection(db, 'image', auth.currentUser.uid, 'record');
    const snap = await getDocs(col1);
    const arr = [];
    snap.forEach(docs => {
      arr.push([docs.id, docs.data()]);
    });
    setImageList(arr);
  };
  useEffect(() => {
    getImageGallery();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <View className="flex flex-row px-3 py-5">
        <Icon name="chevron-back-outline" color="#cfcfcf" size={28} />
        <Text className="text-white text-xl my-auto ml-5">Gallery</Text>
        <TouchableOpacity
          className="ml-auto my-auto mr-4"
          onPress={() => navigation.navigate('Upload')}>
          <Icon name="cloud-upload" color="#cfcfcf" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getImageGallery} />
        }
        className="px-3 py-5">
        <View className="flex flex-row flex-wrap">
          {imageList.map(docs => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('OpenImage', {
                  image: docs[1].image,
                  id: docs[0],
                })
              }
              className="w-1/3 h-32 p-2 mb-8">
              <Image
                source={{uri: docs[1].image}}
                className="w-full h-32 mx-auto rounded-xl"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gallery;
