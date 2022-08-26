import React from "react";
import { Platform, View } from "react-native";
import { Text } from "../../components/StyledText";
import HolidaysIcon from "../../../assets/svgIcons/HolidaysIcon";
import styles from "./HolidayIconWithBadge.styles";

interface HolidayIconWithBadgeProps {
  upcomingHolidaysNo: number;
}
const HolidayIconWithBadge: React.FC<HolidayIconWithBadgeProps> = ({ upcomingHolidaysNo }) => (
  <View style={styles.iconWrapper}>
    <HolidaysIcon style={styles.icon} />
    {upcomingHolidaysNo > 0 && (
      <View style={styles.badge}>
        <Text style={Platform.OS === "android" ? styles.textAndroid : styles.text}>{upcomingHolidaysNo}</Text>
      </View>
    )}
  </View>
);

export default HolidayIconWithBadge;
