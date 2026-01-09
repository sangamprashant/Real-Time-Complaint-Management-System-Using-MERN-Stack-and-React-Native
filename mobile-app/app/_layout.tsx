import { ThemeProvider, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const DarkThemeCustom = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#2563EB",
  },
};


export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider value={DarkThemeCustom}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemeProvider>
    </SafeAreaView>
  );
}
