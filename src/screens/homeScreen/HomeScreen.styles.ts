import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    height: "20%",
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
