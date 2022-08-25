import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    alignItems: "center",
    backgroundColor: COLORS.PAPASMURF100,
    borderRadius: 2,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  modalTitle: {
    fontSize: 20,
    color: COLORS.OUTERSPACE500,
    fontWeight: "bold",
    width: "35%",
  },
  modalText: {
    fontSize: 17,
    color: COLORS.DARK_GREY,
    fontWeight: "400",
    top: 10,
  },
  deleteButton: {
    backgroundColor: COLORS.PAPASMURF500,
    paddingHorizontal: 25,
    paddingVertical: 16,
    borderRadius: 2,
  },
  deleteText: {
    fontSize: 16,
    color: COLORS.WHITE,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 25,
    marginVertical: 10,
    justifyContent: "space-between",
    flexWrap: "nowrap",
    width: "80%",
  },
  customCancleButton: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 25,
    paddingVertical: 16,
    borderRadius: 2,
  },
  modalCancle: {
    fontSize: 16,
    color: COLORS.BLACK,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
});
