import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function AwardsScreen() {
  const isDark = useColorScheme() === "dark";
  const text = isDark ? "#f5f5f7" : "#111";
  const sub = isDark ? "#8e8e93" : "#6d6d70";
  return (
    <View style={[styles.center, { backgroundColor: isDark ? "#000" : "#f2f2f7" }]}>
      <Text style={[styles.title, { color: text }]}>Awards</Text>
      <Text style={[styles.hint, { color: sub }]}>Huy hiệu & thành tích — nội dung sẽ gắn với từng game.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, padding: 24, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "600" },
  hint: { marginTop: 8, fontSize: 15, lineHeight: 22 },
});
