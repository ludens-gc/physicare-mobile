import { StyleSheet, View } from "react-native";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig";
import { Input, Button, Text } from "@rneui/themed";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, `${email}@lol.com`, password);
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text h3 style={styles.title}>
          Physicare
        </Text>
        <Text style={styles.subtitle}>Entre na sua conta</Text>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Senha"
          autoCapitalize="none"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Entrar"
          onPress={handleSignIn}
          loading={loading}
          containerStyle={styles.buttonContainer}
        />
        <Link href={"/sign-up"}>
          <Text style={styles.signupText}>
            Não possui uma conta? Cadastre-se agora!
          </Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 20,
    textAlign: "center",
    color: "gray",
  },
  buttonContainer: {
    marginVertical: 20,
  },
  signupText: {
    textAlign: "center",
    color: "blue",
  },
});
