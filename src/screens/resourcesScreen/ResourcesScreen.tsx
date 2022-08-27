import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
//import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import styles from "./ResourcesScreen.styles";
import Container from "../../components/container/Container";
import QuickLinks from "./QuickLinks";

const HomeScreen = () => {
  //const client = useContext(GraphqlClientContext);

  return (
    <Container style={styles.container}>
      <QuickLinks/>
    </Container>
  );
};
export default HomeScreen;
