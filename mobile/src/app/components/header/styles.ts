import { Platform, StatusBar, StyleSheet } from "react-native";
import { theme } from "@/theme";

const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius : 16,
    borderBottomRightRadius : 16,
    backgroundColor: colors.white,
    marginBottom: 14,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 34 : 34,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 34,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    fontWeight: "400"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.background
  }
});