import React from "react";
import { View, TouchableOpacity, Linking, Platform } from "react-native";
import { Text } from "../../components/StyledText";
import styles from "../resourcesScreen/QuickLinks.styles";
import Links from "../../constants/Links";
import Container from "../../components/container/Container";
import HotlineCrisis from "../../../assets/svgIcons/HotlineCrisis";
import Therapy from "../../../assets/svgIcons/Therapy";
import Information from "../../../assets/svgIcons/Information";
import Meditation from "../../../assets/svgIcons/Meditation";
import { COLORS } from "../../constants/Colors";
import HelpAnimation from "../../components/helpAnimation/HelpAnimation";

const QuickLinks = () => {
  return (
    <Container style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(Links.CrisisHotline)}>
        <HotlineCrisis color={COLORS.DARK_PURPLE} />
        <View style={styles.textContainer}>
          <Text style={styles.textInfo}>In a verge of help!</Text>
          <Text style={styles.text}>Crisis Hotline</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(Links.BipolarFocusedTherapy)}>
        <Therapy color={COLORS.DARK_PURPLE} />
        <View style={styles.textContainer}>
          <Text style={styles.textInfo}>Online Therapy</Text>
          <Text style={styles.text}>Bipolar Focused Therapy</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(Links.BipolarInformation)}>
        <Information color={COLORS.DARK_PURPLE}/>
        <View style={styles.textContainer}>
          <Text style={styles.textInfo}>Official Information Site</Text>
          <Text style={styles.text}>Bipolar Information</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(Links.Meditate)}>
        <Meditation color={COLORS.DARK_PURPLE}/>
        <View style={styles.textContainer}>
          <Text style={styles.textInfo}>Mindfulness & Meditation</Text>
          <Text style={styles.text}>Meditate</Text>
        </View>
      </TouchableOpacity>
      <View style={Platform.OS === "ios" ? styles.animation : styles.animationAndroid}>
      <HelpAnimation/></View>
    </Container>
  );
};
export default QuickLinks;
