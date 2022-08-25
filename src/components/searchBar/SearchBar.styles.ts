import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.WHITE,
  },
  container: {
    padding: 0,
    borderRadius: 5,
    borderBottomColor: COLORS.PAPASMURF300,
    borderTopColor: COLORS.PAPASMURF300,
    borderWidth: 1,
    borderColor: COLORS.PAPASMURF300,
    shadowColor: COLORS.PAPASMURF300,
  },
  inputText: {
    color: COLORS.BLACK,
  },
});
