import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    height: 50,
    borderRadius: 5,
    marginVertical: 15,
    borderColor: COLORS.PAPASMURF300,
    borderWidth: 2,
    paddingLeft: 8,
  },
  divider: {
    backgroundColor: COLORS.BLACK,
    height: 10,
  },
  header: {
    paddingHorizontal: "5%",
    marginVertical: 20,
  },
  surveyContainer: {
    paddingHorizontal: "5%",
    marginVertical: 20,
  },
  questions: {
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: "100%",
  },
  h1: {
    fontSize: 22,
    alignSelf: "center",
    fontWeight: "700",
  },
  sliderContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  slider: {
    width: "68%",
    marginHorizontal: 5,
  },
  value: {
    alignSelf: "center",
  },
  numberInput: {
    width: 40,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderColor: COLORS.PAPASMURF300,
    borderWidth: 2,
    textAlign: "center",
  },
  track: {
    backgroundColor: COLORS.WHITE,
    height: 1.5,
  },
  errorMessage: {
    color: COLORS.RED_ERROR,
    fontSize: 12,
    paddingBottom: 10,
    textAlign: "right",
  },
  icon: {
    width: 4,
  },
  text: {
    lineHeight: 20,
    fontSize: 17,
  },
});
