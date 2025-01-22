import { StyleSheet } from "react-native";
import { theme } from "@/theme";
import { object } from "zod";

const { colors } = theme;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  containerHeader: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingBottom: 20,
    paddingTop: 60,
    marginBottom: 20
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  titleHeader: {
    fontSize: 28,
    color: colors.background,
    fontWeight: 'bold',
  },
  buttonHeader: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 6
  },
  buttonTextHeader: {
    color: colors.white,
    fontWeight: '500'
  },
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
  },
  list: {
    flex: 1,
    paddingHorizontal: 16
  },
  name: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold'
  },
  objective: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 8
  },
  foods: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    gap: 12
  },
  food: {
    backgroundColor: 'rgba(208, 208, 208, 0.4)',
    padding: 12,
    borderRadius: 8
  },
  foodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  foodContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  foodTitle: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold'
  },
  foodLabel: {
    fontSize: 16,
    marginTop: 14,
    marginBottom: 8,
    color: colors.black,
    fontWeight: 'bold'
  },
  supplements: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    gap: 12
  },
  supplement: {
    backgroundColor: colors.white,
    marginTop: 14,
    padding: 16,
    borderRadius: 8,
    marginBottom: 20
  },
  button: {
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
    marginBottom: 30
  },
  buttonText: {
    color: colors.white,
    fontWeight: '500'
  }
});