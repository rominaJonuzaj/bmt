import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.DARK_PURPLE,
  },
  headerStyle: {
    backgroundColor: COLORS.DARK_PURPLE,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  drawerStyle: {
    width: "100%",
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 43,
    letterSpacing: 1.2,
    marginTop: 7,
    color: COLORS.WHITE,
    fontFamily: "epilogue-bold",
  },
  customHeaderTitle: {
    color: COLORS.WHITE,
    fontSize: 20,
    lineHeight: 43,
    letterSpacing: 1.2,
  },
  image: {
    width: 100,
    height: 40,
  },
});
