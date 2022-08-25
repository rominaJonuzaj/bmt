import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../components/StyledText";
import DoubleArrowDown from "../../../assets/svgIcons/DoubleArrowDown";
import DoubleArrowUp from "../../../assets/svgIcons/DoubleArrowUp";
import { COLORS } from "../../constants/Colors";
import styles from "./styles/DropDownItem.styles";

interface Props {
  label: string;
  setExpanded: (expanded: boolean) => void;
  expanded: boolean;
  lastItem?: boolean;
}
const DropDownItem: React.FC<Props> = ({ label, setExpanded, expanded = false, lastItem = false }) => {
  return expanded ? (
    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
      <View style={lastItem ? styles.lastItem : styles.item}>
        <DoubleArrowUp color={COLORS.BLACK} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View style={lastItem ? styles.lastItem : styles.item}>
          <DoubleArrowDown color={COLORS.BLACK} />
          <Text style={styles.text}>{label}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default DropDownItem;
