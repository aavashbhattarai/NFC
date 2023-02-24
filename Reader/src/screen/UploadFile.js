import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';
import {auth, db, storage} from '../../firebase';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';

const UploadFile = ({navigation}) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await launchImageLibrary();
    if (!result.didCancel) {
      setImage(result.assets[0].uri);
    }
  };
  const uploadFile = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uid = '';

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uid += characters[randomIndex];
    }

    const imageRef = ref(storage, 'image/' + uid);
    fetch(image)
      .then(response => response.blob())
      .then(blob => {
        const uploadTask = uploadBytesResumable(imageRef, blob);

        uploadTask.on('state_changed', snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        });

        uploadTask.then(() => {
          getDownloadURL(imageRef).then(async downloadURL => {
            const col1 = collection(
              db,
              'image',
              auth.currentUser.uid,
              'record',
            );
            const snap = await addDoc(col1, {
              image: downloadURL,
              time: serverTimestamp(),
            });
            navigation.navigate('Gallery');
          });
        });
      });
  };
  return (
    <View className="flex-1 bg-slate-800">
      <View className="flex flex-row mt-4 px-3 ">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" color="#cfcfcf" size={28} />
        </TouchableOpacity>
        <Text className="text-white text-xl my-auto ml-5">Upload</Text>
      </View>
      {image == null ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => pickImage()}
          className="my-auto mx-auto bg-white rounded-xl w-32 h-32">
          <Icon
            name="cloud-upload-outline"
            color="#2f2f2f"
            size={28}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => pickImage()}
          className="my-auto mx-auto bg-white rounded-xl w-32 h-32">
          <Image source={{uri: image}} className="w-32 h-32 rounded-xl" />
        </TouchableOpacity>
      )}
      {image != null ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => uploadFile()}
          className="p-4 m-4 mb-10 bg-white rounded-xl">
          <Text className="text-slate-800 text-center font-bold">Upload</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default UploadFile;
