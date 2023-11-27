import { ThemeProvider } from "@rneui/themed";
import { AuthProvider } from "../context/auth";
import { Slot } from "expo-router";
import { SearchProvider } from "../context/search";
import { ChatContextProvider } from "../context/chat";

export default Root = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <ChatContextProvider>
          <ThemeProvider>
            <Slot />
          </ThemeProvider>
        </ChatContextProvider>
      </SearchProvider>
    </AuthProvider>
  );
};
