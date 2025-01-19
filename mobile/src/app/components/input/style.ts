import { StyleSheet } from "react-native";
import { theme } from "@/theme";

const { colors } = theme;
export const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: 8,
  },
});