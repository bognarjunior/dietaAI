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
  input: {
    backgroundColor: colors.white,
    height: 44,
    paddingHorizontal: 10,
    borderRadius: 6,
    color: colors.black
  },
  errorText: {
    color: colors.crimson,
    marginTop: 4,
  }
});