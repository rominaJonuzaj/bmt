import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  text: {
    color: COLORS.BLACK,
    paddingLeft: 20,
    fontSize: 13,
    textTransform: "uppercase",
    alignSelf: "center",
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: COLORS.PAPASMURF100,
    marginBottom: 10,
    padding: 10,
  },
  lastItem: {
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10,
    backgroundColor: COLORS.PAPASMURF100,
  },
});
