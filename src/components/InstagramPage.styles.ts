import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

export default StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: 500,
  },
  socialHeader: {
    zIndex: 6,
    position: "absolute",
  },
  pageName: {
    color: "white",
    backgroundColor: COLORS.DREAMSICLE500,
    width: 160,
    height: 35,
    marginTop: 190,
    marginRight: 80,
    paddingTop: 9,
    paddingLeft: 19,
    fontSize: 14,
    borderRadius: 5,
    overflow: "hidden",
  },
  instagramLogo: {
    marginLeft: 4,
    marginTop: 200,
    position: "absolute",
    height: 13,
    width: 13,
    zIndex: 8,
  },

  postImage: {
    marginRight: 300,
    marginBottom: 290,
    zIndex: 4,
  },
  imageStyle: {
    width: 300,
    position: "absolute",
    borderRadius: 5,
  },

  postDescription: {
    color: "white",
    backgroundColor: COLORS.PAPASMURF700,
    borderRadius: 5,
    marginTop: 40,
    paddingTop: 40,
    paddingLeft: 10,
    paddingBottom: 15,
    width: 300,
    zIndex: 1,
    marginLeft: 20,
    overflow: "hidden",
  },
});
