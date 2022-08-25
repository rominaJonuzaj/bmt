import React, { useContext, useEffect, useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import CloseIcon from "../../../assets/svgIcons/CloseIcon";
import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import { useGetAnnouncementQuery, useUpdateAnnouncementMutation } from "../../graphql/generated";
import { HOME_SCREEN } from "../../navigation/screenNames";
import { Text } from "../../components/StyledText";
import styles from "./styles/EditAnnouncementModal.style";
import Modal from "react-native-modal";

interface Props {
  setModalVisible: (modalVisible: boolean) => void;
  modalVisible: boolean;
  item: any;
  navigation: any;
}

const EditAnnouncementModal: React.FC<Props> = ({ setModalVisible, modalVisible, navigation, item }) => {
  const client = useContext(GraphqlClientContext);
  const data = useUpdateAnnouncementMutation(client);
  const { data: announcementData } = useGetAnnouncementQuery(client, { id: item.id });
  const [selectedItem, setSelectedItem] = useState<{ header: string | null; body: string | null }>({
    header: "",
    body: "",
  });

  useEffect(() => {
    const announcement = announcementData?.getAnnouncement;
    setSelectedItem({ header: announcement?.header || null, body: announcement?.body || null });
  }, [announcementData]);

  const handleSubmit = () => {
    navigation.navigate(HOME_SCREEN, { refetch: true });
    data.mutate({ id: item.id, header: selectedItem?.header, body: selectedItem?.body });
    Alert.alert("Success!", "Announcement successfully updated.", [
      {
        text: "Close",
        onPress: () => {
          setModalVisible(!modalVisible);
        },
      },
    ]);
  };

  return (
    <Modal isVisible={modalVisible}>
      <TouchableOpacity style={styles.centeredView} onPressOut={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Edit Post</Text>
            <TouchableOpacity style={styles.customCancleButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalCancle}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customCloseButton} onPress={() => setModalVisible(!modalVisible)}>
              <CloseIcon style={styles.customCloseButton} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContainer}>
            <View style={styles.container}>
              <Text style={styles.text}>POST TITLE</Text>
              <TextInput
                onChangeText={(value) => setSelectedItem({ ...selectedItem, header: value })}
                style={styles.postTitle}
                value={selectedItem.header}
              />
              <Text style={styles.text}>POST TEXT</Text>
              <TextInput
                multiline
                style={styles.postText}
                onChangeText={(value) => setSelectedItem({ ...selectedItem, body: value })}
                value={selectedItem.body}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
                  <Text style={styles.saveText}>SAVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default EditAnnouncementModal;
