import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  HOME_SCREEN,
  PROFILE_SCREEN,
  RESOURCES_SCREEN,
  SETTINGS_SCREEN,
} from "./screenNames";
import SocialProfileAvatar from "../../assets/svgIcons/SocialProfileAvatar";
import ArrowLeft from "../../assets/svgIcons/ArrowLeft";
import { ImageBackground, View, Text, Platform } from "react-native";
import ToolBox from "../../assets/svgIcons/ToolBox";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../constants/Colors";
import Cog from "../../assets/svgIcons/Cog";
import styles from "./styles/Drawer.styles";
import React from "react";
import Container from "../components/container/Container";
import Home from "../../assets/svgIcons/Home";
import HealthAnimation from "../components/healthAnimation/HealthAnimation";

const Drawer = (props: any) => {
  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={styles.arrowLeft}>
          <ArrowLeft width={30} height={30} color={COLORS.WHITE} />
        </TouchableOpacity>
        <ImageBackground
          source={{ uri: "https://i.pinimg.com/564x/78/4e/dc/784edcc12791fd25727c892b05d59a8b.jpg" }}
          style={styles.feedBackgroundImage}
          imageStyle={styles.backgroundImages}
        >
          <DrawerItem
            icon={() => <Home width={25} height={25} color={COLORS.DARK_PURPLE} />}
            onPress={() => props.navigation.navigate(HOME_SCREEN)}
            labelStyle={styles.label}
            style={styles.drawerItem}
            label="Faqja Kryesore"
          />
        </ImageBackground>
        <ImageBackground
          source={{ uri: "https://i.pinimg.com/736x/52/18/46/5218466c143c7799a8fcf2a443770eb3.jpg" }}
          style={styles.resourcesBackgroundImage}
          imageStyle={styles.backgroundImages}
        >
          <DrawerItem
            icon={() => <ToolBox width={24} height={24} color={COLORS.DARK_PURPLE} />}
            onPress={() => props.navigation.navigate(RESOURCES_SCREEN)}
            labelStyle={styles.label}
            style={styles.drawerItem}
            label="Informacion"
          />
        </ImageBackground>
        {/* <View style={styles.rowNavItems}> */}
          <View style={styles.columnNavItem}>
            <ImageBackground
              source={{ uri: "https://i.pinimg.com/474x/ce/9d/c6/ce9dc631ad26a398969aa143ed35f077.jpg" }}
              style={styles.teamBackgroundImage}
              imageStyle={styles.backgroundImages}
            >
              <DrawerItem
                icon={() => <SocialProfileAvatar width={22} height={22} color={COLORS.DARK_PURPLE} />}
                onPress={() => props.navigation.navigate(PROFILE_SCREEN)}
                labelStyle={styles.customLabel}
                style={styles.drawerItem}
                label="Profili Im"
              />
            </ImageBackground>
          </View>
          <View style={styles.columnNavItem}>
            <ImageBackground
              source={{ uri: "https://i.pinimg.com/736x/d2/b9/9b/d2b99bcbcd29e2b99ace2390f30f145c.jpg" }}
              style={styles.teamBackgroundImage}
              imageStyle={styles.backgroundImages}
            >
              <DrawerItem
                icon={() => <Cog width={22} height={22} color={COLORS.DARK_PURPLE} />}
                onPress={() => props.navigation.navigate(SETTINGS_SCREEN)}
                labelStyle={styles.customLabel}
                style={styles.drawerItem}
                label="Cilësimet"
              />
            </ImageBackground>
          </View>
           {/* <Text style={Platform.OS === "ios" ? styles.text : styles.textAndroid}>Breathe In ... Breathe Out ...</Text> */}
           <Text style={Platform.OS === "ios" ? styles.text : styles.textAndroid}>Merr Frymë ... Nxirr Frymë ...</Text>
          <View style={Platform.OS === "ios" ? styles.animation : styles.animationAndroid}>
          <HealthAnimation/></View>
        {/* </View> */}
      </DrawerContentScrollView>
    </Container>
  );
};

export default Drawer;
