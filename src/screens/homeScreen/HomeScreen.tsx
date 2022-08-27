import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
//import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import styles from "./HomeScreen.styles";
import Container from "../../components/container/Container";
import Survey from "../surveys/Survey";
import CustomButton from "../../components/buttons/CustomButton";
import { COLORS } from "../../constants/Colors";
import { SURVEY_SCREEN } from "../../navigation/screenNames";
import HealthAnimation from "../../components/healthAnimation/HealthAnimation";
import ExerciseAnimation from "../../components/exerciseAnimation/ExerciseAnimation";

const HomeScreen = (props: any) => {
  //const client = useContext(GraphqlClientContext);

  return (
    <Container style={styles.container}>
      {/* <View style={styles.wrap}> */}
    <ExerciseAnimation/>
      <Text style={styles.text}>{"Let's enter today's data! :)"}</Text>
      <View style={styles.buttonView}>
        <CustomButton onPress={() => props.navigation.navigate(SURVEY_SCREEN)} title="How was your day?" color={COLORS.FADED_BLUE} />
      </View>
      {/* <HealthAnimation/> */}
      {/* </View> */}
    </Container>
  );
};
export default HomeScreen;
