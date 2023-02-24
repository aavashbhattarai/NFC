import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {auth, db} from '../../firebase';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import {
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
NfcManager.start();

const Scanner = ({navigation}) => {
  const [searching, setSearching] = useState(false);
  const [tag, setTag] = useState(null);
  const authenticate = async text => {
    if (auth.currentUser) {
      if (auth.currentUser.emailVerified) {
        const doc1 = doc(db, 'tag', text);
        await updateDoc(doc1, {
          activated: true,
          activationTime: serverTimestamp(),
        });
        navigation.navigate('EnterPin');
      }
    } else {
      navigation.navigate('Login');
    }
  };
  async function readNdef() {
    try {
      setSearching(true);
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      let text = tag?.ndefMessage[0].payload.reduce(
        (acc, byte) => acc + String.fromCharCode(byte),
        '',
      );
      text = text.substring(3);
      setTag(text);
      authenticate(text);
      setSearching(false);
    } catch (ex) {
      console.log(ex);
      setSearching(false);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }
  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          auth.currentUser
            ? navigation.navigate('EnterPin')
            : navigation.navigate('Login')
        }
        className="m-4 ml-auto ">
        <Icon name="person" color={'#fff'} size={24} />
      </TouchableOpacity>
      <View className="my-auto mx-auto">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => readNdef()}
          className="">
          <Icon name="scan-circle-outline" color={'#fff'} size={140} />
        </TouchableOpacity>
        {searching ? (
          <Text className="text-xl text-center">Searching</Text>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Scanner;
