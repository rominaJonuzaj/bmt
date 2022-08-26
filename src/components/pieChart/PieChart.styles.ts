import { COLORS } from "../../constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  text: {
    color: COLORS.WHITE,
  },
  rectangle: {
    width: 4,
    height: 4,
  },
  pieChart: {
    height: 150,
    width: 150,
  },
});
