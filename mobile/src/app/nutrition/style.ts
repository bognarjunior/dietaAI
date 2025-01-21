import { StyleSheet } from "react-native";
import { theme } from "@/theme";

const { colors } = theme;
export const styles = StyleSheet.create({
  container: {},
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  loadingText: {
    fontSize: 18,
    color: colors.white,
    marginBottom: 8
  }
});