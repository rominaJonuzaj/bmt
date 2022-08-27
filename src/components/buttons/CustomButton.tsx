import { TouchableOpacity } from "react-native";
import { Text } from "../../components/StyledText";
import styles from "./styles/CustomButton.style";
import React from "react";
interface CustomButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  color,
  borderColor,
  borderWidth,
  disabled,
}: CustomButtonProps) => {
  const currentStyle = [styles.button, { backgroundColor: color, borderColor: borderColor, borderWidth: borderWidth }];
  return (
    <TouchableOpacity onPress={onPress} style={currentStyle} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
