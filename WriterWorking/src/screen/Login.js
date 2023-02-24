import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputField from "../components/InputField";
import Icon from "react-native-vector-icons/Ionicons";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  async function login() {
    signInWithEmailAndPassword(auth, email, pin + "xxxx")
      .then((user) => {
        if (user) {
          console.log("Correct");
        } else {
          console.log("Incorrect");
        }
      })
      .catch((e) => {
        createUserWithEmailAndPassword(auth, email, pin + "xxxx").then(
          async (user) => {
            sendEmailVerification(auth.currentUser);
            const col1 = collection(db, "user");
            const snap = addDoc(col1, { email: email, pin: pin });
            updateProfile(auth.currentUser, { displayName: pin });
          }
        );
        console.log(e);
      });
  }
  return (
    <SafeAreaView className="flex-1 bg-slate-800 p-5">
      <View className="mt-20 mx-auto">
        <Icon name="scan-circle-outline" color={"#fff"} size={140} />
      </View>
      <View className="mt-20">
        <Text className="text-white text-center text-5xl font-bold mb-10">
          Login
        </Text>
        <View className="flex flex-col space-y-5">
          <View>
            <InputField label={"Email"} setState={setEmail} />
          </View>
          <View>
            <InputField label="4 digit pin" max={4} setState={setPin} />
          </View>
          <View className="">
            <TouchableOpacity
              onPress={() => login()}
              className="bg-white rounded-xl p-4 mt-10"
            >
              <Text className="text-slate-800 text-center">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
