import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";

type GameId = "sudoku" | "caro";

const GAMES: {
  id: GameId;
  title: string;
  subtitle: string;
  icon: "grid" | "close";
}[] = [
  { id: "sudoku", title: "Sudoku", subtitle: "Classic 9×9 grid", icon: "grid" },
  { id: "caro", title: "Caro", subtitle: "Five in a row", icon: "close" },
];

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const cardBg = isDark ? "#1c1c1e" : "#fff";
  const text = isDark ? "#f5f5f7" : "#111";
  const sub = isDark ? "#8e8e93" : "#6d6d70";

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#000" : "#f2f2f7" }]}>
      <Text style={[styles.heading, { color: sub }]}>Chọn game</Text>
      {GAMES.map((game) => (
        <Pressable
          key={game.id}
          onPress={() => router.push(`/(tabs)/home/${game.id}`)}
          style={({ pressed }) => [
            styles.card,
            { backgroundColor: cardBg, opacity: pressed ? 0.9 : 1 },
          ]}
        >
          <View style={styles.iconWrap}>
            <Ionicons name={game.icon} size={28} color="#0a7ea4" />
          </View>
          <View style={styles.cardText}>
            <Text style={[styles.title, { color: text }]}>{game.title}</Text>
            <Text style={[styles.subtitle, { color: sub }]}>{game.subtitle}</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color={sub} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 8,
  },
  heading: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "rgba(10, 126, 164, 0.12)",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    flex: 1,
    marginLeft: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
});
