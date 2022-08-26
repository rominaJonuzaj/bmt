import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";
export default StyleSheet.create({
  modal: {
    maxHeight: "100%",
    minHeight: "50%",
  },
  dropdown: {
    backgroundColor: COLORS.WHITE,
    width: "100%",
  },
  clearButton: {
    justifyContent: "center",
    marginLeft: "auto",
  },
  closeButton: {
    marginHorizontal: 12,
    justifyContent: "center",
  },
  customCloseButton: {
    marginLeft: "auto",
    alignSelf: "center",
    paddingRight: 12,
    fontSize: 20,
  },
  closeText: {
    fontSize: 14,
    textTransform: "uppercase",
    paddingRight: 7,
    color: COLORS.BLACK,
  },
  text: {
    color: COLORS.BLACK,
    fontSize: 14,
    textTransform: "uppercase",
    alignSelf: "center",
  },
  searchBar: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    backgroundColor: COLORS.PAPASMURF100,
    marginBottom: 10,
  },
  headerLast: {
    flexWrap: "nowrap",
  },
  filterWrapper: {
    maxHeight: 100,
  },
  checkboxContainer: {
    paddingLeft: 10,
  },
});
