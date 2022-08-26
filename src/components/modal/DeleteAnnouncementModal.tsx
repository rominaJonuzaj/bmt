import moment from "moment";
import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import { useDeleteAnnouncementMutation } from "../../graphql/generated";
import { HOME_SCREEN } from "../../navigation/screenNames";
import { Text } from "../../components/StyledText";
import styles from "./styles/DeleteAnnouncement.styles";
import Modal from "react-native-modal";

interface Props {
  setModalVisible: (modalVisible: boolean) => void;
  modalVisible: boolean;
  item: any;
  navigation: any;
}

const DeleteAnnouncementModal: React.FC<Props> = ({ setModalVisible, modalVisible, item, navigation }) => {
  const client = useContext(GraphqlClientContext);
  const data = useDeleteAnnouncementMutation(client);

  const handleDelete = (id: any) => {
    navigation.navigate(HOME_SCREEN, { refetch: true });
    let todaysDate = moment();
    data?.mutate({ id: id, deletedAt: todaysDate });
    setModalVisible(!modalVisible);
  };

  return (
    <Modal isVisible={modalVisible}>
      <TouchableOpacity style={styles.centeredView} onPressOut={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Delete Post</Text>
          <Text style={styles.modalText}>Are you sure you want to delete this post?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.customCancleButton} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalCancle}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleDelete(item.id);
              }}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteText}>DELETE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DeleteAnnouncementModal;
