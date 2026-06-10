import { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

/** Placeholder: thay bằng dữ liệu từ storage / backend (ngày đã mở app chơi). */
function useStreakMonth(year: number, month0: number) {
  return useMemo(() => {
    const days = new Date(year, month0 + 1, 0).getDate();
    const played = new Set<number>();
    for (let d = 1; d <= days; d += 1) {
      if (d % 3 === 0 || d % 7 === 1) played.add(d);
    }
    return { days, played };
  }, [year, month0]);
}

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

export default function DailyChallengesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const bg = isDark ? "#000" : "#f2f2f7";
  const card = isDark ? "#1c1c1e" : "#fff";
  const text = isDark ? "#f5f5f7" : "#111";
  const sub = isDark ? "#8e8e93" : "#6d6d70";
  const accent = "#0a7ea4";

  const now = new Date();
  const [y, m] = [now.getFullYear(), now.getMonth()];
  const { days, played } = useStreakMonth(y, m);
  const firstDow = new Date(y, m, 1).getDay();
  const offset = firstDow === 0 ? 6 : firstDow - 1;
  const cells: (number | null)[] = [...Array(offset).fill(null)];
  for (let d = 1; d <= days; d += 1) cells.push(d);

  const [streak] = useState(5);

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: bg }]}
      contentContainerStyle={styles.content}
    >
      <View style={[styles.headerCard, { backgroundColor: card }]}>
        <Text style={[styles.streak, { color: accent }]}>
          {streak} ngày liên tiếp
        </Text>
        <Text style={[styles.caption, { color: sub }]}>
          Các ngày có điểm danh (đã mở app chơi) được tô sáng — tích hợp lịch sử
          thật sau.
        </Text>
      </View>

      <View style={[styles.calCard, { backgroundColor: card }]}>
        <Text style={[styles.monthTitle, { color: text }]}>
          Tháng {m + 1} / {y}
        </Text>
        <View style={styles.weekRow}>
          {weekDays.map((w) => (
            <Text key={w} style={[styles.weekLabel, { color: sub }]}>
              {w}
            </Text>
          ))}
        </View>
        <View style={styles.grid}>
          {cells.map((d, i) => (
            <View
              key={i}
              style={[
                styles.cell,
                !!d &&
                  played.has(d) && {
                    backgroundColor: `${accent}33`,
                    borderColor: accent,
                  },
                { borderColor: isDark ? "#3a3a3c" : "#e5e5ea" },
              ]}
            >
              {d ? (
                <Text
                  style={[
                    styles.cellText,
                    { color: played.has(d) ? accent : sub },
                    played.has(d) && { fontWeight: "700" },
                  ]}
                >
                  {d}
                </Text>
              ) : null}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const cellSize = 40;

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  content: { padding: 16, paddingBottom: 32 },
  headerCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  streak: { fontSize: 22, fontWeight: "700" },
  caption: { fontSize: 14, marginTop: 6, lineHeight: 20 },
  calCard: { borderRadius: 16, padding: 16 },
  monthTitle: { fontSize: 17, fontWeight: "600", marginBottom: 12 },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  weekLabel: {
    width: cellSize,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  grid: { flexDirection: "row", flexWrap: "wrap" },
  cell: {
    width: cellSize,
    height: cellSize,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 6,
    marginRight: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: { fontSize: 14 },
});
