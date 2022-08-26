import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  userInfo: {
    alignItems: "center",
  },
  h1: {
    fontSize: 21,
  },
  image: {
    width: 270,
    height: 270,
    borderRadius: 10,
    marginTop: 20,
  },
  smallImage: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    marginTop: 20,
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  buttonView: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
