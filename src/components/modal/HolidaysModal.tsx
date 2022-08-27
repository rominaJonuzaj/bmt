import React from "react";
import { TouchableOpacity, View } from "react-native";
import CloseIcon from "../../../assets/svgIcons/CloseIcon";
import { Text } from "../../components/StyledText";
import styles from "./styles/Modal.style";
import Modal from "react-native-modal";
interface Props {
  setModalVisible: (modalVisible: boolean) => void;
  modalVisible: boolean;
  title: string;
  descp: string;
}

const HolidaysModal: React.FC<Props> = ({ setModalVisible, modalVisible, title, descp }) => {
  return (
    <Modal isVisible={modalVisible}>
      <TouchableOpacity style={styles.centeredView} onPressOut={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity style={styles.customCloseButton} onPress={() => setModalVisible(!modalVisible)}>
              <CloseIcon style={styles.customCloseButton} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{descp}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default HolidaysModal;
