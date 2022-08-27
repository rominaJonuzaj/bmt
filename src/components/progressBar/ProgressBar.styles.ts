import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  progressBar: {
    height: 25,
    backgroundColor: COLORS.DARK_GREY,
    flexDirection: "row",
  },
  percentageWrapper: {
    overflow: "visible",
  },
  percentage: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: "200",
    alignSelf: "flex-end",
    paddingTop: 3,
    marginRight: 3,
  },
  roundedPercentage: {
    borderRadius: 120,
    backgroundColor: COLORS.PAPASMURF500,
    borderColor: COLORS.WHITE,
    borderWidth: 1.5,
    height: 29,
    paddingHorizontal: 3,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -20,
  },
  roundedSimplePercentage: {
    borderRadius: 140,
    backgroundColor: COLORS.PAPASMURF500,
    borderColor: COLORS.WHITE,
    borderWidth: 1.5,
    minHeight: 27,
    paddingHorizontal: 4,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
  },
  customPercentage: {
    color: COLORS.WHITE,
    fontSize: 13,
    padding: 3,
    alignSelf: "center",
    fontWeight: "400",
  },
});
