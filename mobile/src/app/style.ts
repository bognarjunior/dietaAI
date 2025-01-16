import { StyleSheet } from "react-native"; 
import { theme } from "@/theme";

const { colors } = theme

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: colors.green
  },
  textAI: { 
    color: colors.white
  },
  text: {
    fontSize: 16,
    color: colors.white,
    width: 240,
    textAlign: "center",
    marginVertical: 8,
  },
  button: {
    backgroundColor: colors.blue,
    width: "100%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 34
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  }
});