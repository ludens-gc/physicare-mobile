import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Avatar, Text, Input, Button } from "@rneui/themed";
import { useSearch } from "../../../context/search";
import { useAuth } from "../../../context/auth";
import { firestore } from "../../../lib/firebaseConfig";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { ChatContext } from "../../../context/chat";

export default function ChatPage() {
  const { data } = useContext(ChatContext);

  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, title: data?.user?.displayName }}
      />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            placeholder="Escreva a mensagem"
          />
          <Button
            style={styles.button}
            title={"Enviar"}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "flex-end",
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    width: "80%",
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
  button: {
    flex: 1,
  },
});
