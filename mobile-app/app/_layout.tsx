import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DarkThemeCustom = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#2563EB",
    background: "#0F172A",
    card: "#020617",
    text: "#E5E7EB",
  },
};

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#020617"
      />

      <ThemeProvider value={DarkThemeCustom}>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </SafeAreaView>
  );
}
