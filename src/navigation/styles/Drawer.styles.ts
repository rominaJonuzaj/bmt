import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  drawerItem: {
    paddingVertical: 20,
    paddingLeft: 20,
  },
  animation: {
    flex: 1,
    top: "22%",
    height: 150,
  },
  animationAndroid: {
    flex: 1,
    height: 150,
  },
  textAndroid: {
    fontSize: 16,
    alignSelf: "center",
    top: 15,
    color: COLORS.WHITE,
  },
  text: {
    fontSize: 16,
    alignSelf: "center",
    top: 150,
    color: COLORS.WHITE,
  },
  arrowLeft: {
    paddingVertical: 15,
    paddingLeft: 10,
  },
  label: {
    color: COLORS.DARK_PURPLE,
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: 1.1,
    paddingTop: 2,
    marginLeft: -15,
    fontFamily: "epilogue-bold",
  },
  customLabel: {
    color: COLORS.DARK_PURPLE,
    fontWeight: "700",
    fontSize: 24,
    textAlign: "left",
    marginLeft: -15,
  },
  backgroundImages: {
    resizeMode: "cover",
    alignSelf: "flex-end",
    opacity: 0.60,
  },
  feedBackgroundImage: {
    backgroundColor: COLORS.WHITE,
  },
  metricsBackgroundImage: {
    backgroundColor: COLORS.WHITE,
  },
  resourcesBackgroundImage: {
    backgroundColor: COLORS.WHITE,
  },
  peopleBackgroundImage: {
    backgroundColor: COLORS.WHITE,
  },
  surveyBackgroundImage: {
    backgroundColor: COLORS.WHITE,
  },
  teamBackgroundImage: {
    backgroundColor: COLORS.WHITE,
  },
  // rowNavItems: {
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  // },
  columnNavItem: {
    flexBasis: "50%",
  },
});
