import { FontDisplay } from "expo-font";
import React, { useContext } from "react";
import { View, Image, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Email from "../../../assets/svgIcons/Email";
import CustomButton from "../../components/buttons/CustomButton";
import Container from "../../components/container/Container";
import { Text } from "../../components/StyledText";
import { COLORS } from "../../constants/Colors";
// import IMAGES, { IMAGES_URI, PROFILE_IMAGE_URI } from "../../constants/SourceImages";
// import { SecureStorageContext } from "../../contexts/SecureStorageContext";
//import { UserContext } from "../../contexts/UserContext";
import styles from "./ProfileScreen.styles";

const ProfileScreen = () => {
  //const { dispatch } = useContext(SecureStorageContext);
  //const user = useContext(UserContext);

//   const logoutUser = async () => {
//     dispatch({ type: "DELETE_ALL_TOKENS" });
//   };

  return (
    <Container style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.h1}>{"Romina PROFILE"}</Text>
        {/* <Image source={{ uri: PROFILE_IMAGE_URI + email.toLowerCase() + ".jpg" }} style={styles.image} /> */}
        <View style={styles.infoContainer}>
          {/* <Text style={styles.text}>{practiceAndMarket}</Text>
          <Text style={styles.text}>{role}</Text> */}
          <View style={styles.row}>
            {/* <Email style={styles.smallImage} /> */}
            {/* <Text style={styles.text}>{email}</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.buttonView}>
        <CustomButton onPress={null} title="Sign Out" color={COLORS.PAPASMURF500} />
      </View>
    </Container>
  );
};

export default ProfileScreen;
