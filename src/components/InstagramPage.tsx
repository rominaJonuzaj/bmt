import React from "react";
import { View, Image } from "react-native";
import { Text } from "../components/StyledText";
import styles from "./InstagramPage.styles";

const instagramLogoPath = "../../assets/images/instagramLogo.png";
const instagramSampleImage = "../../assets/images/samplePictureInstagram.png";

const InstagramPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.socialHeader}>
        <Image style={styles.instagramLogo} source={require(instagramLogoPath)}></Image>
        <Text style={styles.pageName}>@inspire11consulting</Text>
      </View>
      <View style={styles.postImage}>
        <Image style={styles.imageStyle} source={require(instagramSampleImage)} />
      </View>
      <View>
        <Text style={styles.postDescription}>
          Morbi sit amet nibh eget metus vestibulum fringilla vel sit amet ante. Donec molestie eros nisi, eu fringilla
          lorem pharetra eget. Mauris pretium non turpis ac porta. Maecenas eleifend dolor erat, vitae scelerisque enim
          blandit non. Mauris scelerisque purus vel molestie venenatis.
        </Text>
      </View>
    </View>
  );
};

export default InstagramPage;
