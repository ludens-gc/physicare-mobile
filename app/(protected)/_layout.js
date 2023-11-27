import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{ tabBarLabel: "Home", title: "Home" }}
        
      />
      <Tabs.Screen
        name="search"
        options={{ tabBarLabel: "Search", title: "Search" }}
      />
      <Tabs.Screen
        name="chat"
        options={{ tabBarLabel: "Chat", title: "Chat" }}
      />
      <Tabs.Screen
        name="settings"
        options={{ tabBarLabel: "Settings", title: "Settings" }}
      />
    </Tabs>
  );
}
