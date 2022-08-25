import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./ItemHolidayView.styles";
import moment from "moment";
import HolidaysIconWithBadge from "../holidaysIcon/HolidaysIconWithBadge";
import { HOLIDAYS_LIST } from "../../navigation/screenNames";
import HolidaysModal from "../modal/HolidaysModal";
import Separator from "../../../assets/svgIcons/Separator";

interface HolidayViewProps {
  noOfUpcomingHolidays?: number;
  item: any;
  navigation: any;
  showSeparator?: boolean;
}

const ItemHolidayView: React.FC<HolidayViewProps> = ({ item, noOfUpcomingHolidays, navigation, showSeparator }) => {
  const [holidayName, setHolidayName] = useState<string>("");
  const [holidayDescription, setHolidayDescription] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnPress = (item: any) => {
    setModalVisible(!modalVisible);
    setHolidayName(item.name);
    setHolidayDescription(item.description);
  };

  return (
    <View style={styles.holidaysContainer}>
      <View style={styles.elementsContainer}>
        <View style={styles.imageContainer}>
          {noOfUpcomingHolidays && noOfUpcomingHolidays > 0 ? (
            <TouchableOpacity onPress={() => navigation.navigate(HOLIDAYS_LIST)}>
              <HolidaysIconWithBadge upcomingHolidaysNo={noOfUpcomingHolidays || 0} />
            </TouchableOpacity>
          ) : (
            <HolidaysIconWithBadge upcomingHolidaysNo={noOfUpcomingHolidays || 0} />
          )}
        </View>
        <TouchableOpacity onPress={() => handleOnPress(item)}>
          <>
            <View style={styles.holidayContainer}>
              <>
                {item?.date && item.observingOffices && (
                  <Text style={styles.text}>
                    {item.date && moment(item.date, "MMMM-D").format("dddd")},{" "}
                    {moment(item.date, "MMMM-D").format("MMMM")} {moment.localeData().ordinal(item.date.slice(-2))} is a
                    holiday in the{" "}
                    {item.observingOffices.map((office: any, index: any) => (
                      <Text key={index}>
                        {office}
                        {item.observingOffices?.length === index + 1 ? " Office." : " Office, "}
                      </Text>
                    ))}
                  </Text>
                )}
              </>
            </View>
          </>
        </TouchableOpacity>
        <HolidaysModal
          title={holidayName}
          descp={holidayDescription}
          setModalVisible={() => setModalVisible(!modalVisible)}
          modalVisible={modalVisible}
        />
      </View>
      {showSeparator && (
        <View style={styles.separatorImage}>
          <Separator />
        </View>
      )}
    </View>
  );
};

export default ItemHolidayView;
