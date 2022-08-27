import React, { useState, useEffect, useContext } from "react";
import { View, Image } from "react-native";
import { Text } from "../../components/StyledText";
import moment from "moment";
import AnnouncementDropDown from "../../components/dropdown/AnnouncementDropDown";
import { DROPDOWN_ANNOUNCEMENT_DATA } from "../../constants/DropDownAnnData";
import DeleteAnnouncementModal from "../../components/modal/DeleteAnnouncementModal";
import EditAnnouncementModal from "../../components/modal/EditAnnouncementModal";
import styles from "./ItemAnnouncementView.styles";
import { UserContext } from "../../contexts/UserContext";
import Separator from "../../../assets/svgIcons/Separator";

interface AnnouncementViewProps {
  item: any;
  navigation: any;
}

const ItemAnnouncementView: React.FC<AnnouncementViewProps> = ({ item, navigation }) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const user = useContext(UserContext);

  useEffect(() => {
    if (deleteTrigger) setDeleteModalVisible(deleteTrigger);
    else if (editModalVisible) setEditModalVisible(editModalVisible);
  }, [deleteTrigger, editModalVisible]);

  const createdDate = item.createdAt;
  const convertedDate = moment(createdDate).format("MMMM " + "DD" + "," + " YYYY");
  return (
    <>
      <View style={styles.listAnnouncement}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.boxImage}>
              <Image source={{ uri: item.image }} style={styles.imageUser} />
            </View>
            {user.role === "Corporate" && (
              <View style={styles.threeDots}>
                <AnnouncementDropDown
                  label={" "}
                  data={DROPDOWN_ANNOUNCEMENT_DATA}
                  onSelect={(item) => {
                    item.value === "delete" ? setDeleteTrigger(true) : setEditModalVisible(!editModalVisible);
                  }}
                />
              </View>
            )}
          </View>
          <View style={styles.announcementContainer}>
            {item.header ? <Text style={styles.header}>{item.header}</Text> : null}
            {convertedDate ? <Text style={styles.date}>{convertedDate}</Text> : null}
            <View style={styles.lineStyle} />
            {item.body ? <Text style={styles.body}>{item.body}</Text> : null}
          </View>
        </View>
        <View style={styles.separator}>
          <Separator />
        </View>
      </View>
      <DeleteAnnouncementModal
        setModalVisible={(modalVisible) => {
          setDeleteTrigger(false);
          setDeleteModalVisible(modalVisible);
        }}
        modalVisible={deleteModalVisible}
        item={item}
        navigation={navigation}
      />
      <EditAnnouncementModal
        setModalVisible={() => setEditModalVisible(!editModalVisible)}
        modalVisible={editModalVisible}
        item={item}
        navigation={navigation}
      />
    </>
  );
};
export default ItemAnnouncementView;
