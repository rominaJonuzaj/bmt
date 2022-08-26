import React, { useContext, useState } from "react";
import { TouchableOpacity, View, Alert, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import CloseIcon from "../../../assets/svgIcons/CloseIcon";
import { Text } from "../../components/StyledText";
import styles from "./styles/AddAnnouncementModal.style";
import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import { PROFILE_IMAGE_URI } from "../../constants/SourceImages";
import { useCreateAnnouncementMutation } from "../../graphql/generated";
import { HOME_SCREEN } from "../../navigation/screenNames";
import Modal from "react-native-modal";
import { UserContext } from "../../contexts/UserContext";
interface Props {
  setAddModalVisible: (addModalVisible: boolean) => void;
  addModalVisible: boolean;
  navigation: any;
}

const AddAnnouncementModal: React.FC<Props> = ({ setAddModalVisible, addModalVisible, navigation }) => {
  const client = useContext(GraphqlClientContext);
  const user = useContext(UserContext);
  const data = useCreateAnnouncementMutation(client);
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const image = PROFILE_IMAGE_URI + user.email.toLowerCase() + ".jpg";

  const handleSubmit = () => {
    if (body === "") {
      Alert.alert("Error!", "Can not submit an empty form!", [
        {
          text: "Close",
          onPress: () => {
            setHeader("");
            setBody("");
            setAddModalVisible(false);
          },
        },
      ]);
    } else {
      data.mutate({ header: header, body: body.trim(), image: image });
      Alert.alert("Success!", "Announcement successfully added.", [
        {
          text: "Close",
          onPress: () => {
            setHeader("");
            setBody("");
            setAddModalVisible(false);
          },
        },
      ]);
    }
    navigation.navigate(HOME_SCREEN, { refetch: true });
  };
  return (
    <Modal isVisible={addModalVisible}>
      <TouchableOpacity style={styles.centeredView} onPressOut={() => setAddModalVisible(!addModalVisible)}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Create New Post</Text>
            <TouchableOpacity style={styles.customCancleButton} onPress={() => setAddModalVisible(!addModalVisible)}>
              <Text style={styles.modalCancle}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.customCloseButton} onPress={() => setAddModalVisible(!addModalVisible)}>
              <CloseIcon style={styles.customCloseButton} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.container}>
                <Text style={styles.text}>POST TITLE</Text>
                <TextInput
                  onChangeText={(value) => setHeader(value)}
                  style={styles.postTitle}
                  placeholder="Title"
                  value={header}
                />
                <Text style={styles.text}>POST TEXT</Text>
                <TextInput
                  multiline
                  style={styles.postText}
                  onChangeText={(value) => setBody(value)}
                  placeholder="Body"
                  value={body}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                  <Text style={styles.submitText}>PUBLISH POST</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AddAnnouncementModal;
