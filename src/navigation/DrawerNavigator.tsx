//import HumanResourcesSearchTeam from "../../assets/svgIcons/HumanResourcesSearchTeam";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  HOME_SCREEN,
  PROFILE_SCREEN,
  RESOURCES_SCREEN,
  SETTINGS_SCREEN,
} from "./screenNames";
import SocialProfileAvatar from "../../assets/svgIcons/SocialProfileAvatar";
import ArrowLeft from "../../assets/svgIcons/ArrowLeft";
//import PieChart from "../../assets/svgIcons/pieChart";
import { ImageBackground, View } from "react-native";
import ToolBox from "../../assets/svgIcons/ToolBox";
import { TouchableOpacity } from "react-native";
//import navImages from "../constants/NavImages";
import Feed from "../../assets/svgIcons/Feed";
import { COLORS } from "../constants/Colors";
import Cog from "../../assets/svgIcons/Cog";
import styles from "./styles/Drawer.styles";
import React from "react";
import List from "../../assets/svgIcons/List";
import Container from "../components/container/Container";
import { Assets } from "react-navigation-stack";

const Drawer = (props: any) => {
  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={styles.arrowLeft}>
          <ArrowLeft width={30} height={30} color={COLORS.DREAMSICLE500} />
        </TouchableOpacity>
        <ImageBackground
          source={{ uri: "https://i.pinimg.com/originals/98/4a/76/984a7602f2200e18e6a8657722c09385.png" }}
          style={styles.feedBackgroundImage}
          imageStyle={styles.backgroundImages}
        >
          <DrawerItem
            icon={() => <Feed width={25} height={25} color={COLORS.WHITE} />}
            onPress={() => props.navigation.navigate(HOME_SCREEN)}
            labelStyle={styles.label}
            style={styles.drawerItem}
            label="Home / Feed"
          />
        </ImageBackground>
        {/* <ImageBackground
          source={{ uri: navImages.Metrics }}
          style={styles.metricsBackgroundImage}
          imageStyle={styles.backgroundImages}
        >
          <DrawerItem
            icon={() => <PieChart width={24} color={COLORS.WHITE} height={24} />}
            onPress={() => props.navigation.navigate(METRICS)}
            labelStyle={styles.label}
            style={styles.drawerItem}
            label="Metrics"
          />
        </ImageBackground> */}
        <ImageBackground
          source={{ uri: "https://i.pinimg.com/originals/98/4a/76/984a7602f2200e18e6a8657722c09385.png" }}
          style={styles.resourcesBackgroundImage}
          imageStyle={styles.backgroundImages}
        >
          <DrawerItem
            icon={() => <ToolBox width={24} height={24} color={COLORS.WHITE} />}
            onPress={() => props.navigation.navigate(RESOURCES_SCREEN)}
            labelStyle={styles.label}
            style={styles.drawerItem}
            label="Resources"
          />
        </ImageBackground>
        {/* <ImageBackground
          source={{ uri: navImages.PingPong }}
          style={styles.peopleBackgroundImage}
          imageStyle={styles.backgroundImages}
        >
          <DrawerItem
            icon={() => <HumanResourcesSearchTeam width={24} height={24} color={COLORS.WHITE} />}
            onPress={() => props.navigation.navigate(EMPLOYEE_DIRECTORY)}
            labelStyle={styles.label}
            style={styles.drawerItem}
            label="People"
          />
        </ImageBackground> */}
        {/* <ImageBackground
          source={{ uri: navImages.Volleyball }}
          style={styles.surveyBackgroundImage}
          imageStyle={styles.backgroundImages}
        >
          <DrawerItem
            icon={() => <List color={COLORS.WHITE} />}
            onPress={() => props.navigation.navigate(ALL_SURVEYS)}
            labelStyle={styles.label}
            style={styles.drawerItem}
            label="Surveys"
          />
        </ImageBackground> */}
        <View style={styles.rowNavItems}>
          <View style={styles.columnNavItem}>
            <ImageBackground
              source={{ uri: "https://i.pinimg.com/originals/98/4a/76/984a7602f2200e18e6a8657722c09385.png" }}
              style={styles.teamBackgroundImage}
              imageStyle={styles.backgroundImages}
            >
              <DrawerItem
                icon={() => <SocialProfileAvatar width={22} height={22} color={COLORS.WHITE} />}
                onPress={() => props.navigation.navigate(PROFILE_SCREEN)}
                labelStyle={styles.customLabel}
                style={styles.drawerItem}
                label="Profile"
              />
            </ImageBackground>
          </View>
          <View style={styles.columnNavItem}>
            <ImageBackground
              source={{ uri: "https://i.pinimg.com/originals/98/4a/76/984a7602f2200e18e6a8657722c09385.png" }}
              style={styles.teamBackgroundImage}
              imageStyle={styles.backgroundImages}
            >
              <DrawerItem
                icon={() => <Cog width={22} height={22} color={COLORS.WHITE} />}
                onPress={() => props.navigation.navigate(SETTINGS_SCREEN)}
                labelStyle={styles.customLabel}
                style={styles.drawerItem}
                label="Settings"
              />
            </ImageBackground>
          </View>
        </View>
      </DrawerContentScrollView>
    </Container>
  );
};

export default Drawer;
