import React, { useContext, useEffect, useState } from "react";
import { Keyboard, ScrollView, TextInput, View } from "react-native";
import styles from "../surveys/Survey.style";
import { Text } from "../../components/StyledText";
import { Divider } from "react-native-elements";
import CheckBox from "../../components/checkbox/CheckBox";
import CustomButton from "../../components/buttons/CustomButton";
import { COLORS } from "../../constants/Colors";
import { Slider } from "@miblanchard/react-native-slider";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { ANXIETY_MOOD, DEPRESSED_MOOD, ELEVATED_MOOD, HOURS_SLEEP, IRRITABILITY, NOTES, SHARE_FEEDBACK_TEXT } from "../../constants/Constants";
import Container from "../../components/container/Container";
import { HOME_SCREEN, SUBMIT_SURVEY } from "../../navigation/screenNames";
import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import { createSurvey } from "../../graphql/mutations";



const Survey = (props: any) => {
  // const id = route.params.id;
  const client = useContext(GraphqlClientContext);
  // const data = createSurvey(client);

  const trackMarks = Array.from({ length: 24 }, (_, i) => i + 1);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [surveyResponse, setSurveyResponse] = useState({
    shareFeedback: false,
    feedback: "",
    score: "",
    description: "",
    sleepScore: "",
    depressedScore:"",
    moodScore:"",
    irritationScore:"",
  });

  const handleSliderChange = (value: string) => {
    if (+value > 10) setErrorMessage("Please pick a number between 1 and 10!");
    else {
      setSurveyResponse({ ...surveyResponse, score: value });
      setErrorMessage("");
    }
  };

  useEffect(() => {
    if (surveyResponse.feedback !== "" && +surveyResponse.score > 0) {
      setIsButtonDisabled(false);
    }
  }, [surveyResponse.feedback, surveyResponse.score]);

  const month= new Date().getMonth()+1;
  const date= new Date().getDate() +"/" + month +"/"+new Date().getFullYear();

  const handleSubmit = () => {
    const inputs = {
      // surveyId: id,
      feedback: surveyResponse.feedback,
      shareFeedback: surveyResponse.shareFeedback,
      score: +surveyResponse.score,
      description: surveyResponse.description,
      sleepScore: surveyResponse.sleepScore,
      depressedScore: surveyResponse.depressedScore,
      moodScore: surveyResponse.moodScore,
      irritationScore: surveyResponse.irritationScore,
    };
    data.mutate(inputs);
    navigation.navigate(SUBMIT_SURVEY);
    setSurveyResponse({ shareFeedback: false, feedback: "", score: "",  description: "",
    sleepScore: "",
    depressedScore:"",
    moodScore:"",
    irritationScore:"", });
    setIsButtonDisabled(!isButtonDisabled);
  };

  const handleOnClick = (_: string, value: boolean) => {
    setSurveyResponse({ ...surveyResponse, shareFeedback: !value });
  };

  return (
    <Container style={styles.container}>
      <ScrollView>
      <View style={styles.surveyContainer}>
        <View><Text style={styles.textDate}>{"Data e sotme: " + date}</Text></View>
        <Divider color={COLORS.DREAMSICLE300} width={2} />
        <View style={styles.questions}>
        <Text style={styles.text}>{ "1. " + HOURS_SLEEP}</Text>
         <TextInput
            multiline
            style={styles.input}
            onChangeText={(value) => setSurveyResponse({ ...surveyResponse, description: value })}
            placeholder=" Shkruaj këtu"
            value={surveyResponse.description}
          />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}</View>
        <View style={styles.questions}>
        <Text style={styles.text}>{"2. " + DEPRESSED_MOOD}</Text>
        <TextInput
            multiline
            style={styles.input}
            onChangeText={(value) => setSurveyResponse({ ...surveyResponse, depressedScore: value })}
            placeholder=" Shkruaj këtu"
            value={surveyResponse.depressedScore}
          />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
</View> 
<View style={styles.questions}>
        <Text style={styles.text}>{"3. " + ELEVATED_MOOD}</Text>
        <TextInput
            multiline
            style={styles.input}
            onChangeText={(value) => setSurveyResponse({ ...surveyResponse, moodScore: value })}
            placeholder=" Shkruaj këtu"
            value={surveyResponse.moodScore}
          />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
</View> 
<View style={styles.questions}>
        <Text style={styles.text}>{"4. " + IRRITABILITY}</Text>
        <TextInput
            multiline
            style={styles.input}
            onChangeText={(value) => setSurveyResponse({ ...surveyResponse, irritationScore: value })}
            placeholder=" Shkruaj këtu"
            value={surveyResponse.irritationScore}
          />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
</View>
<View style={styles.questions}>
          <Text style={styles.text}>{"5. " + ANXIETY_MOOD}</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.value}>{trackMarks[0]}</Text>
          <Slider
            value={+surveyResponse.score}
            onValueChange={handleSliderChange}
            minimumValue={0}
            maximumValue={10}
            step={1}
            trackMarks={trackMarks}
            thumbTintColor={COLORS.FOREST300}
            containerStyle={styles.slider}
            trackStyle={styles.track}
            renderTrackMarkComponent={() => (
              <Icon type="material-community" name="rectangle" color={COLORS.WHITE} iconStyle={styles.icon} size={17} />
            )}
            thumbStyle={{}}
          />
          <Text style={styles.value}>{trackMarks[9]}</Text>
          <TextInput
            value={`${surveyResponse.score}`}
            style={styles.numberInput}
            onChangeText={handleSliderChange}
            keyboardType="number-pad"
          />
        </View>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
</View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Text style={styles.text}>{"6. " + NOTES}</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={(value) => setSurveyResponse({ ...surveyResponse, feedback: value })}
            placeholder=" Shkruaj këtu"
            value={surveyResponse.feedback}
          />
        </ScrollView>
        <View>
          <CheckBox
            label={SHARE_FEEDBACK_TEXT}
            darkCheckbox
            value={surveyResponse.shareFeedback}
            isChecked={surveyResponse.shareFeedback}
            onClick={(e, value) => {
              handleOnClick(e, value);
              Keyboard.dismiss();
            }}
          />
        </View>
      </View>
      <Divider color={COLORS.WHITE} width={5} />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Anullo"
          onPress={() => props.navigation.navigate(HOME_SCREEN)}
          borderWidth={1}
          borderColor={COLORS.WHITE}
        />
        <CustomButton
          title="Ruaj"
          onPress={() => props.navigation.navigate(SUBMIT_SURVEY)}
          // onPress={handleSubmit}
          color={isButtonDisabled ? COLORS.GREY : COLORS.FADED_BLUE}
          disabled={isButtonDisabled}
        />
      </View>
      </ScrollView>
    </Container>
  );
};

export default Survey;
