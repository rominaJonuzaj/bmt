import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.PAPASMURF700,
  },
  label: {
    color: COLORS.BLACK,
  },
  dropdown: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
    width: 165,
    marginHorizontal: "56%",
    marginTop: 5,
    position: "relative",
    zIndex: 1,
  },
  dropdownAndroid: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
    width: 165,
    marginHorizontal: "59%",
    marginTop: "0.5%",
    position: "relative",
    zIndex: 1,
  },
  androidContainer: {
    bottom: 20,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  overlay: {
    width: "100%",
    height: "100%",
    right: 15,
    position: "relative",
    zIndex: 1,
  },
});
