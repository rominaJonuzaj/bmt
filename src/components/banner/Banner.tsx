import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "../../components/StyledText";
import styles from "./Banner.styles";

interface BannerProps {
  title: string;
  description: string;
  linkTo: string;
}

//this function is not used right now, TBD
const Banner: FC<BannerProps> = ({ title, description, linkTo }): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
      </View>
    </>
  );
};

export default Banner;
