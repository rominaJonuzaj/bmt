import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  buttonView: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: "15%",
  },
  text: {
    lineHeight: 20,
    fontSize: 17,
    color: COLORS.WHITE,
    bottom: "15%",
  },
});
