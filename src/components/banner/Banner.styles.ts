import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.PAPASMURF700,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    color: COLORS.WHITE,
    minHeight: 50,
    width: "90%",
    margin: "auto",
  },
  text: {
    color: COLORS.WHITE,
  },
});
