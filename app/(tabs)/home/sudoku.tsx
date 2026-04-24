import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function SudokuScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const text = isDark ? "#f5f5f7" : "#111";
  const sub = isDark ? "#8e8e93" : "#6d6d70";

  return (
    <View style={[styles.center, { backgroundColor: isDark ? "#000" : "#f2f2f7" }]}>
      <Text style={[styles.title, { color: text }]}>Sudoku</Text>
      <Text style={[styles.hint, { color: sub }]}>
        Màn chơi Sudoku — thêm logic & UI tại đây.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
  hint: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 15,
  },
});
