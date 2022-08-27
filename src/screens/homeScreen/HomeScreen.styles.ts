import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    lineHeight: 20,
    fontSize: 17,
    color: COLORS.WHITE,
  },
});
