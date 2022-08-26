import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  drawerItem: {
    paddingVertical: 20,
    paddingLeft: 20,
  },
  arrowLeft: {
    paddingVertical: 15,
    paddingLeft: 10,
  },
  label: {
    color: COLORS.WHITE,
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: 1.1,
    paddingTop: 2,
    marginLeft: -15,
    fontFamily: "epilogue-bold",
  },
  customLabel: {
    color: COLORS.WHITE,
    fontWeight: "700",
    fontSize: 14,
    textAlign: "left",
    marginLeft: -15,
  },
  backgroundImages: {
    resizeMode: "cover",
    alignSelf: "flex-end",
    opacity: 0.25,
  },
  feedBackgroundImage: {
    backgroundColor: COLORS.PAPASMURF800,
  },
  metricsBackgroundImage: {
    backgroundColor: COLORS.PAPASMURF700,
  },
  resourcesBackgroundImage: {
    backgroundColor: COLORS.PAPASMURF600,
  },
  peopleBackgroundImage: {
    backgroundColor: COLORS.PAPASMURF500,
  },
  surveyBackgroundImage: {
    backgroundColor: COLORS.PAPASMURF400,
  },
  teamBackgroundImage: {
    backgroundColor: COLORS.PAPASMURF300,
  },
  rowNavItems: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  columnNavItem: {
    flexBasis: "50%",
  },
});
