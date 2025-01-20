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
  select: {
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 44,
    paddingHorizontal: 10,
    borderRadius: 6,
    color: colors.black,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  errorText: {
    color: colors.crimson,
    marginTop: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
  },
  modalList: {
    gap: 4,
  },
  modalItem: {
    padding: 8,
    backgroundColor: 'rgba(208, 208, 208, 0.4)',
    borderRadius: 6,
  },
});