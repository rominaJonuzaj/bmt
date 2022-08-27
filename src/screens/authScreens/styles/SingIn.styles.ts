import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.DARK_BLUE,
  },
  topView: {
    height: "80%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingHorizontal: 5,
    borderRadius: 4,
    fontSize: 16,
    lineHeight: 36,
    letterSpacing: 0.25,
    color: COLORS.WHITE,
  },
  bottomView: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    width: "100%",
    margin: 15,
    padding: 15,
  },
  signInText: {
    fontSize: 30,
    color: COLORS.DARK_BLUE,
  },
  errorLog: {
    height: 50,
    color: COLORS.RED_ERROR,
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
  },
});
