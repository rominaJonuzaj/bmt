import * as React from "react";
import { useContext, useState } from "react";
import { View } from "react-native";
import { Text } from "../../components/StyledText";
import SwitchButton from "../../components/buttons/switchButton";
import styles from "./SettingsScreen.styles";
import Container from "../../components/container/Container";

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabledInt, setIsEnabledInt] = useState(false);
  const toggleSwitchInt = () => setIsEnabledInt(previousState => !previousState);
  const [isEnabledPos, setIsEnabledPos] = useState(false);
  const toggleSwitchPos = () => setIsEnabledPos(previousState => !previousState);
  const [isEnabledLove, setIsEnabledLove] = useState(false);
  const toggleSwitchLove = () => setIsEnabledLove(previousState => !previousState);
  const [isEnabledMind, setIsEnabledMind] = useState(false);
  const toggleSwitchMind = () => setIsEnabledMind(previousState => !previousState);
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.switchContainer}>
          <Text style={styles.TextTitle}>Cfarë dëshironi të punoni sot?</Text>
          <SwitchButton
            onClick={toggleSwitch}
            isEnabled={isEnabled}
            label="Turn Off Mendimet Negative"
          />
           <SwitchButton
            onClick={toggleSwitchInt}
            isEnabled={isEnabledInt}
            label="Turn Off Mendimet Intrusive"
          />
           <SwitchButton
            onClick={toggleSwitchPos}
            isEnabled={isEnabledPos}
            label="Turn On Mendimet Positive"
          />
           <SwitchButton
            onClick={toggleSwitchLove}
            isEnabled={isEnabledLove}
            label="Turn On: Love For Myself"
          />
           <SwitchButton
            onClick={toggleSwitchMind}
            isEnabled={isEnabledMind}
            label="Turn On Good Mindset"
          />
        </View>
      </View>
    </Container>
  );
};

export default SettingsScreen;
