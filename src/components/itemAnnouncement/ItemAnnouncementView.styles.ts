import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
export default StyleSheet.create({
  listAnnouncement: {
    flex: 1,
    marginTop: 30,
  },
  announcementContainer: {
    paddingVertical: "0%",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: COLORS.BLACK,
  },
  container: {
    paddingHorizontal: 10,
  },
  threeDots: {
    zIndex: 3,
    elevation: 3,
    marginRight: 10,
  },
  boxImage: {
    marginTop: "-10%",
  },
  imageUser: {
    width: 70,
    height: 70,
    justifyContent: "space-evenly",
    marginLeft: 20,
    borderRadius: 6,
    shadowColor: COLORS.BLACK,
  },
  date: {
    fontSize: 12,
    marginLeft: 18,
    color: COLORS.WHITE,
  },
  cardContainer: {
    paddingVertical: "10%",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: COLORS.PAPASMURF700,
    shadowColor: COLORS.BLACK,
  },
  card: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    marginTop: "-7.5%",
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    paddingHorizontal: 15,
    marginBottom: 4,
    color: COLORS.WHITE,
  },
  body: {
    fontSize: 12,
    paddingHorizontal: 19,
    color: COLORS.WHITE,
  },
  lineStyle: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    width: "95%",
    marginVertical: 8,
  },
  flatList: {
    width: "100%",
  },
  separatorImage: {
    height: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  separator: {
    alignItems: "center",
    marginVertical: "5%",
  },
});
