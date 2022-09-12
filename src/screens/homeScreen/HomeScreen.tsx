import React from "react";
import { View, Text } from "react-native";
import styles from "./HomeScreen.styles";
import Container from "../../components/container/Container";
import CustomButton from "../../components/buttons/CustomButton";
import { COLORS } from "../../constants/Colors";
import { SURVEY_SCREEN } from "../../navigation/screenNames";
import ExerciseAnimation from "../../components/exerciseAnimation/ExerciseAnimation";

const HomeScreen = (props: any) => {

  return (
    <Container style={styles.container}>
    <ExerciseAnimation/>
      <Text style={styles.text}>{"Shënojmë të dhënat e sotme! :)"}</Text>
      <View style={styles.buttonView}>
        <CustomButton onPress={() => props.navigation.navigate(SURVEY_SCREEN)} title="Si jeni sot?" color={COLORS.FADED_BLUE} />
      </View>
    </Container>
  );
};
export default HomeScreen;
