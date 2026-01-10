import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Login = () => {

  const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    router.replace("/(home)/home");
  }

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      {/* Email */}
      <TextInput
        placeholder="Email address"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        style={styles.input}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>
        Don’t have an account?{" "}
        <Text style={styles.link}>Register</Text>
      </Text>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 16,
    fontSize: 16,
    color: "#111827",
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    marginTop: 24,
    textAlign: "center",
    color: "#6B7280",
  },
  link: {
    color: "#2563EB",
    fontWeight: "600",
  },
});
