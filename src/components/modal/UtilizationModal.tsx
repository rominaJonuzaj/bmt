import React from "react";
import { TouchableOpacity, View } from "react-native";
import CloseIcon from "../../../assets/svgIcons/CloseIcon";
import { Text } from "../../components/StyledText";
import styles from "./styles/Modal.style";
import Modal from "react-native-modal";
import { UTILIZATION_DEFINITION } from "../../constants/Constants";
interface Props {
  setModalVisible: (modalVisible: boolean) => void;
  modalVisible: boolean;
}

const UtilizationModal: React.FC<Props> = ({ setModalVisible, modalVisible }) => {
  return (
    <Modal isVisible={modalVisible}>
      <TouchableOpacity style={styles.centeredView} onPressOut={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Utilization</Text>
            <TouchableOpacity style={styles.customCloseButton} onPress={() => setModalVisible(!modalVisible)}>
              <CloseIcon style={styles.customCloseButton} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{UTILIZATION_DEFINITION}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default UtilizationModal;
