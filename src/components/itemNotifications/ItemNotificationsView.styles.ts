import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  notificationContainer: {
    paddingVertical: "4%",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: COLORS.PAPASMURF700,
    shadowColor: COLORS.BLACK,
    width: "90%",
    marginTop: 30,
    borderRadius: 5,
  },
  date: {
    fontSize: 13,
    marginLeft: 18,
    color: COLORS.WHITE,
  },
  body: {
    fontSize: 13,
    paddingHorizontal: 19,
    color: COLORS.WHITE,
  },
  customCancleButton: {
    marginRight: 10,
  },
  headerContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
});
