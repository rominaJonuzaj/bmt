import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    marginTop: "5%",
  },
  animation: {
    flex: 1,
    width: "80%",
  },
  animationAndroid: {
    flex: 1,
  },
  button: {
    width: "90%",
    paddingVertical: "3%",
    borderRadius: 3,
    backgroundColor: COLORS.OUTERSPACE200,
    marginBottom: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: "4%",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    paddingLeft: "4%",
    paddingVertical: 15,
  },
  textInfo: {
    fontSize: 11,
    lineHeight: 11.65,
    letterSpacing: 0.25,
    color: COLORS.DARK_BLUE,
  },
  text: {
    fontSize: 20,
    lineHeight: 22.65,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: COLORS.DARK_PURPLE,
  },
});
