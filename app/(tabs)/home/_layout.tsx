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
        contentStyle: {
          backgroundColor: isDark ? "#000" : "#f2f2f7",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: true,
          title: "Game",
          headerLargeTitleShadowVisible: true,
          // Leave background unset: native-stack falls back to a transparent
          // header on iOS when headerLargeTitle is enabled, which avoids a
          // bug where the large title becomes invisible on iOS 26 if a
          // custom headerStyle.backgroundColor is set.
          headerStyle: {},
        }}
      />
      <Stack.Screen name="sudoku" options={{ title: "Sudoku" }} />
      <Stack.Screen name="caro" options={{ title: "Caro" }} />
    </Stack>
  );
}
