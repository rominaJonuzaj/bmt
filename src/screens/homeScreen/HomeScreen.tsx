import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
//import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import styles from "./HomeScreen.styles";
import Container from "../../components/container/Container";

const HomeScreen = () => {
  //const client = useContext(GraphqlClientContext);

  return (
    <Container style={styles.container}>
      {/* <View style={styles.holidays}>
        <OfficeHolidays navigation={navigation} />
      </View> */}
      <View><Text>{"HOME SCREEEEEEEEN"}</Text></View>
    </Container>
  );
};
export default HomeScreen;
