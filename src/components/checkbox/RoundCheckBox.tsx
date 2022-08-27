import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../components/StyledText";
import Icon from "react-native-elements/dist/icons/Icon";
import { COLORS } from "../../constants/Colors";
import styles from "./styles/RoundCheckBox.styles";

interface Props {
  label: string | undefined;
  onClick?: (name: string, value: boolean) => void;
  value?: any;
  isChecked?: boolean;
}
const RoundCheckBox: React.FC<Props> = ({ label, onClick, value, isChecked }) => {
  const [isSelected, setIsSelected] = useState(isChecked || false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick && onClick(value, isSelected);
  };
  useEffect(() => {
    setIsSelected(isChecked || false);
  }, [isChecked]);

  return (
    <TouchableOpacity style={styles.checkboxList} onPress={handleClick}>
      <View style={[styles.checkboxBase, isSelected && styles.checkboxChecked]}>
        {isSelected && <Icon name="circle" type="material" color={COLORS.WHITE} size={12} />}
      </View>
      <Text style={styles.checkboxValue}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RoundCheckBox;
