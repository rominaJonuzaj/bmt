import React from "react";
import { View, Image, TouchableOpacity, Linking, Platform } from "react-native";
import Email from "../../../assets/svgIcons/Email";
import Phone from "../../../assets/svgIcons/Phone";
import CustomButton from "../../components/buttons/CustomButton";
import Container from "../../components/container/Container";
import { Text } from "../../components/StyledText";
import { COLORS } from "../../constants/Colors";
// import IMAGES, { IMAGES_URI, PROFILE_IMAGE_URI } from "../../constants/SourceImages";
import styles from "./ProfileScreen.styles";
import { Auth } from 'aws-amplify';

const ProfileScreen = () => {

//   const logoutUser = async () => {
//     dispatch({ type: "DELETE_ALL_TOKENS" });
//   };

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
};


  return (
    <Container style={styles.container}>
      <View style={Platform.OS === "ios" ?  styles.userInfo : styles.userInfoAndroid}>
        <Text style={styles.h1}>{"Romina a.k.a Dory"}</Text>
        {/* <Image source={{ uri: PROFILE_IMAGE_URI + email.toLowerCase() + ".jpg" }} style={styles.image} /> */}
        <Image source={require("../../../assets/images/me.jpg")} style={styles.image}/>
        <View style={Platform.OS === "ios" ? styles.infoContainer : styles.infoContainerAndroid}>
          <Text style={styles.text}>{"Diagnoza: Bipolar Level 2"}</Text>
          <View style={Platform.OS === "ios" ? styles.row : styles.rowAndroid}>
            <Email style={styles.smallImage} />
            {/* <Text style={styles.text}>{email}</Text> */}
            <Text style={styles.text}>{"romina@test.com"}</Text>
          </View>
          <View style={styles.boxContent}>
          <>
            <TouchableOpacity style={styles.smallBoxContent} onPress={() => Linking.openURL(`tel:${+355685894976}`)}>
                  <Phone style={styles.imagePhone} />
                 <Text style={styles.text}>{"+355685894976"}</Text> 
            </TouchableOpacity>
          </>
         </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <CustomButton onPress={signOut} title="Sign Out" color={COLORS.DARK_PURPLE} />
      </View>
    </Container>
  );
};

export default ProfileScreen;
