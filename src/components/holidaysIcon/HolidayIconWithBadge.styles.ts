import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  iconWrapper: {
    width: 18,
    top: 3,
    justifyContent: "center",
  },
  badge: {
    left: 29,
    top: 10,
    borderRadius: 10,
    width: 14,
    height: 14,
    backgroundColor: COLORS.PAPASMURF500,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 10,
    top: 3,
    textAlign: "center",
    justifyContent: "center",
  },
  textAndroid: {
    color: COLORS.WHITE,
    fontSize: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  icon: {
    left: "10%",
    position: "absolute",
    justifyContent: "center",
  },
});
