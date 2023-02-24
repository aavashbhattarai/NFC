import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeycodeInput} from 'react-native-keycode';
import Icon from 'react-native-vector-icons/Ionicons';
import {auth, db} from '../../firebase';
import {doc, getDoc} from 'firebase/firestore';
const EnterPin = ({navigation}) => {
  const [verifiedPin, setVerifiedPin] = useState('');
  const getAllData = async () => {
    const doc1 = doc(db, 'admin', 'user');
    const snap = await getDoc(doc1);
    setVerifiedPin(snap.data().pin);
    console.log(snap.data().pin);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <View className="my-auto mx-auto ">
        <Text className="text-center my-3 text-4xl text-white font-bold">
          Enter Pin
        </Text>
        <View className="my-auto mx-auto bg-white p-6 rounded-2xl">
          <KeycodeInput
            alphaNumeric={false}
            onComplete={value => {
              if (verifiedPin == value) {
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
