import React from "react";
import { View, Text } from "react-native";
import styles from "./SubmitSurvey.style";
import Container from "../../components/container/Container";
import CustomButton from "../../components/buttons/CustomButton";
import { COLORS } from "../../constants/Colors";
import { HOME_SCREEN } from "../../navigation/screenNames";

const SubmitSurvey = (props: any) => {

  return (
    <Container style={styles.container}>
      <Text style={styles.text}>{"Të dhënat e sotme u ruajtën me sukses!"}</Text>
      <View style={styles.buttonView}>
        <CustomButton onPress={() => props.navigation.navigate(HOME_SCREEN)} title="Kthehuni në Faqen Kryesore" color={COLORS.FADED_BLUE} />
      </View>
    </Container>
  );
};
export default SubmitSurvey;
