import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { COLORS } from "../../constants/Colors";

const BackButton = ({ screenName, navigation }: { screenName: string; navigation: any }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <View>
        <Icon name="arrow-left" color={COLORS.WHITE} size={55} />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
