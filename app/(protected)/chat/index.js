import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Avatar, SearchBar, ListItem } from "@rneui/themed";
import { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuth } from "../../../context/auth";
import { firestore } from "../../../lib/firebaseConfig";
import { ChatContext } from "../../../context/chat";

function Item({ user }) {
  const { dispatch } = useContext(ChatContext);
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <ListItem
      onPress={() => {
        console.log("clicado");
        handleSelect(user?.userInfo);
        router.push(`/(protected)/chat/${user?.userInfo?.uid.toString()}`);
      }}
      key={user?.userInfo?.uid}
      bottomDivider
    >
      <Avatar rounded source={{ uri: user?.userInfo?.photoURL }} />
      <ListItem.Content>
        <ListItem.Title>{user?.userInfo?.displayName}</ListItem.Title>
        <ListItem.Subtitle>{"just a text"}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
}

export default function HomePage() {
  const [chats, setChats] = useState([]);
  const { userUID } = useAuth();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(firestore, "userChats", userUID), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    userUID && getChats();
  }, [userUID]);

  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: "Chats" }} />
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          platform="android"
          containerStyle={styles.searchBarContainer}
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        <FlatList
          data={Object.entries(chats)}
          renderItem={({ item }) => <Item user={item[1]} />}
          keyExtractor={(item) => item[0]}
          style={{ width: "100%" }}
        />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  searchBarContainer: {
    width: "100%",
  },
});
