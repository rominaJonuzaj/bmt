import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  iconWrapper: {
    marginRight: "25%",
    justifyContent: "center",
  },
  badge: {
    left: 15,
    top: 8,
    borderRadius: 10,
    width: 17,
    height: 17,
    backgroundColor: COLORS.PAPASMURF500,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 10,
    textAlign: "center",
    justifyContent: "center",
    paddingVertical: 3,
  },
  alarmIcon: {
    position: "absolute",
  },
  iconBellWrapper: {
    marginRight: "20%",
    marginTop: 5,
    justifyContent: "center",
  },
  bellIcon: {
    position: "absolute",
  },
});
