import * as React from "react";
import { useContext, useState } from "react";
import { View } from "react-native";
import { Text } from "../../components/StyledText";
import SwitchButton from "../../components/buttons/switchButton";
// import { SecureStorageContext } from "../../contexts/SecureStorageContext";
// import { UserContext } from "../../contexts/UserContext";
import styles from "./SettingsScreen.styles";
import Container from "../../components/container/Container";

const SettingsScreen = () => {
//   const { dispatch } = useContext(SecureStorageContext);
//   const user = useContext(UserContext);

//   const [switchButtons, setSwitchButtons] = useState({
//     isTemperaturePreferenceButtonEnabled: user.weatherUnitPreference === "celsius" ? true : false,
//     isTimeFormatButtonEnabled: user.timeFormatPreference === "military" ? true : false,
//   });

//   const handleTemperatureSwitch = async () => {
//     try {
//       setSwitchButtons({
//         ...switchButtons,
//         isTemperaturePreferenceButtonEnabled: !switchButtons.isTemperaturePreferenceButtonEnabled,
//       });

//       !switchButtons.isTemperaturePreferenceButtonEnabled
//         ? dispatch({ type: "SET_WEATHER_UNIT_PREFERENCE", value: "celsius" })
//         : dispatch({ type: "SET_WEATHER_UNIT_PREFERENCE", value: "fahrenheit" });
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleTimeFormatSwitch = async () => {
//     try {
//       !switchButtons.isTimeFormatButtonEnabled
//         ? dispatch({ type: "SET_TIME_FORMAT_PREFERENCE", value: "military" })
//         : dispatch({ type: "SET_TIME_FORMAT_PREFERENCE", value: "standard" });

//       setSwitchButtons({
//         ...switchButtons,
//         isTimeFormatButtonEnabled: !switchButtons.isTimeFormatButtonEnabled,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.switchContainer}>
          <Text style={styles.TextTitle}>WHAT DO YOU WANT TO TURN OFF?</Text>
          <SwitchButton
            onClick={null}
            isEnabled={null}
            label="Turn Off Negative Thoughts"
          />
           <SwitchButton
            onClick={null}
            isEnabled={null}
            label="Turn Off Inttusive Thoughts"
          />
           <SwitchButton
            onClick={null}
            isEnabled={null}
            label="Turn On Positive Thoughts"
          />
           <SwitchButton
            onClick={null}
            isEnabled={null}
            label="Turn On: Love For Myself"
          />
           <SwitchButton
            onClick={null}
            isEnabled={null}
            label="Turn On Good Mindset"
          />
           <SwitchButton
            onClick={null}
            isEnabled={null}
            label="Turn Off Impulsive Triggers"
          />
          {/* <SwitchButton
            onClick={handleTimeFormatSwitch}
            isEnabled={switchButtons.isTimeFormatButtonEnabled}
            label="Switch to Military Time Format"
          /> */}
        </View>
      </View>
    </Container>
  );
};

export default SettingsScreen;
