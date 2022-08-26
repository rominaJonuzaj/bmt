import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/Colors";

export default StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.WHITE,
    marginBottom: 20,
    paddingTop: 15,
    paddingLeft: 10,
  },
  text: {
    textAlign: "justify",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: COLORS.WHITE,
    marginVertical: 2,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "4.6%",
    backgroundColor: COLORS.DARK_BLUE,
  },
  buttonContainer: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  titleTextWrapper: {
    flex: 6,
    marginVertical: 20,
  },
  scrollView: {
    flex: 6,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  scrollBar: {
    height: "100%",
    width: 1,
    backgroundColor: "white",
  },
  scrollIndicator: {
    width: 6,
    backgroundColor: COLORS.DREAMSICLE500,
    marginLeft: -2,
  },
  contentContainer: {
    paddingRight: 14,
  },
  header: {
    fontSize: 12,
    color: COLORS.WHITE,
    fontWeight: "bold",
    paddingVertical: 4,
  },
  subHeader: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 12,
    paddingLeft: 30,
    paddingVertical: 4,
  },
  subHeaderWithNumber: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 12,
    paddingLeft: 14,
    paddingVertical: 4,
  },
  bulletPoints: {
    paddingLeft: 14,
  },
  centeredHeader: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    textDecorationLine: "underline",
    paddingVertical: 4,
  },
  italicText: {
    fontStyle: "italic",
  },
});
