import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "40%",
  },
  modalView: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 2,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 17,
    color: COLORS.OUTERSPACE500,
    textTransform: "uppercase",
    width: "90%",
  },
  modalText: {
    fontSize: 14,
    color: COLORS.OUTERSPACE500,
  },
  closeModalText: {
    fontSize: 17,
    color: COLORS.OUTERSPACE500,
    textTransform: "uppercase",
    marginLeft: "auto",
  },
  modalHeader: {
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "90%",
    paddingBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.PAPASMURF300,
  },
  modalContainer: {
    width: "90%",
    paddingTop: 10,
    paddingBottom: 30,
  },
  customCloseButton: {
    marginLeft: "auto",
    alignSelf: "center",
    paddingRight: 12,
    fontSize: 20,
  },
});
