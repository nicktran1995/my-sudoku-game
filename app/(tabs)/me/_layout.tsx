import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function MeStackLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? "#1c1c1e" : "#fff",
        },
        headerTitleStyle: { fontWeight: "600" },
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: isDark ? "#000" : "#f2f2f7",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Me",
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen name="awards" options={{ title: "Awards" }} />
      <Stack.Screen name="statistics" options={{ title: "Statistics" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen name="how-to-play" options={{ title: "How to play" }} />
      <Stack.Screen name="rules" options={{ title: "Rules" }} />
      <Stack.Screen name="help" options={{ title: "Help" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="privacy" options={{ title: "Privacy" }} />
    </Stack>
  );
}
