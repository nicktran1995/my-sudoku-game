import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function HomeStackLayout() {
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
          title: "Games",
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name="sudoku"
        options={{ title: "Sudoku" }}
      />
      <Stack.Screen
        name="caro"
        options={{ title: "Caro" }}
      />
    </Stack>
  );
}
