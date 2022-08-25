import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
export default StyleSheet.create({
  holidaysContainer: {
    paddingTop: 20,
    justifyContent: "center",
    width: "100%",
  },
  imageContainer: {
    top: "50%",
    zIndex: 1,
    marginRight: "90%",
  },
  elementsContainer: {
    left: 1,
  },
  text: {
    fontSize: 15,
    justifyContent: "center",
    color: COLORS.WHITE,
    fontStyle: "italic",
    paddingLeft: 20,
  },
  office: {
    fontSize: 12,
    color: COLORS.WHITE,
  },
  container: {
    paddingHorizontal: 6,
  },
  holidayContainer: {
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: COLORS.PAPASMURF700,
    padding: 9,
    marginRight: 15,
  },
  flatList: {
    width: "100%",
    height: "100%",
  },
  separatorImage: {
    alignItems: "center",
    marginVertical: 15,
  },
});
