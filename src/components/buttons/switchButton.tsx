import React from "react";
import { View, Switch } from "react-native";
import { COLORS } from "../../constants/Colors";
import styles from "../../components/buttons/switchButton.styles";
import { Text } from "../../components/StyledText";

const SwitchButton = ({ isEnabled, onClick, label }: { isEnabled: boolean; onClick: () => void; label: string }) => {
  return (
    <View style={styles.switchContainer}>
      <Switch
        trackColor={{ false: COLORS.PAPASMURF100, true: COLORS.PAPASMURF500 }}
        thumbColor={COLORS.WHITE}
        ios_backgroundColor={COLORS.PAPASMURF100}
        onValueChange={onClick}
        value={isEnabled}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default SwitchButton;
