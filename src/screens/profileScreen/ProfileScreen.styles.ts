import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  userInfo: {
    alignItems: "center",
    marginTop: 10,
  },
  userInfoAndroid: {
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
  smallBoxContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    left: "10%",
  },
  imagePhone: {
    alignSelf: "center",
    backgroundColor: "transparent",
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
    right: "65%",
  },
  rowAndroid: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    marginTop: 20,
    right: "80%",
  },
  boxContent: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    marginTop: 20,
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  infoContainerAndroid: {
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
