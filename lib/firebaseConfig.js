import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUnUauFr_3gv18Uq-BarSZzY7e1Xs0bow",
  authDomain: "physicare-mobile-dev.firebaseapp.com",
  projectId: "physicare-mobile-dev",
  storageBucket: "physicare-mobile-dev.appspot.com",
  messagingSenderId: "1091383457523",
  appId: "1:1091383457523:web:8bef25abb44191dcb0e986",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const firestore = getFirestore(app);
export const storage = getStorage(app);