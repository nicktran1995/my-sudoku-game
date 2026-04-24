import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

type Item = { href: Href; title: string; icon: keyof typeof Ionicons.glyphMap };

const ITEMS: Item[] = [
  { href: "/(tabs)/me/awards", title: "Awards", icon: "trophy-outline" },
  { href: "/(tabs)/me/statistics", title: "Statistics", icon: "bar-chart-outline" },
  { href: "/(tabs)/me/settings", title: "Settings", icon: "settings-outline" },
  { href: "/(tabs)/me/how-to-play", title: "How to play", icon: "book-outline" },
  { href: "/(tabs)/me/rules", title: "Rules", icon: "document-text-outline" },
  { href: "/(tabs)/me/help", title: "Help", icon: "help-circle-outline" },
  { href: "/(tabs)/me/about", title: "About game", icon: "information-circle-outline" },
  { href: "/(tabs)/me/privacy", title: "Privacy", icon: "lock-closed-outline" },
];

export default function MeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const bg = isDark ? "#000" : "#f2f2f7";
  const card = isDark ? "#1c1c1e" : "#fff";
  const text = isDark ? "#f5f5f7" : "#111";
  const sub = isDark ? "#8e8e93" : "#6d6d70";

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <View style={[styles.profile, { backgroundColor: card }]}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#0a7ea4" />
        </View>
        <View style={styles.profileText}>
          <Text style={[styles.name, { color: text }]}>Player</Text>
          <Text style={[styles.email, { color: sub }]}>profile@example.com</Text>
        </View>
      </View>

      <Text style={[styles.section, { color: sub }]}>Tài khoản & cài đặt</Text>
      {ITEMS.map((item) => (
        <Pressable
          key={item.href}
          onPress={() => router.push(item.href)}
          style={({ pressed }) => [
            styles.row,
            { backgroundColor: card, opacity: pressed ? 0.88 : 1 },
          ]}
        >
          <Ionicons name={item.icon} size={22} color="#0a7ea4" />
          <Text style={[styles.rowTitle, { color: text }]}>{item.title}</Text>
          <Ionicons name="chevron-forward" size={20} color={sub} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgba(10, 126, 164, 0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: { marginLeft: 16, flex: 1 },
  name: { fontSize: 20, fontWeight: "700" },
  email: { fontSize: 14, marginTop: 4 },
  section: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.4,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 8,
  },
  rowTitle: { flex: 1, fontSize: 16, marginLeft: 12 },
});
