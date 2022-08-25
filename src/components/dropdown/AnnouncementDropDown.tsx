import { COLORS } from "../../constants/Colors";
import styles from "./styles/AnnouncementDropDown.styles";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import { FlatList, Modal, Platform, TouchableOpacity, View } from "react-native";
import { Text } from "../../components/StyledText";
import Bin from "../../../assets/svgIcons/Bin";
import ThreeDotsIcon from "../../../assets/svgIcons/ThreeDotsIcon";
import Pencil from "../../../assets/svgIcons/Pencil";

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
}

const AnnouncementDropDown: FC<Props> = ({ label, data, onSelect }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState<number>();

  useEffect(() => {
    DropdownButton.current.measure((_fx: any, _fy: any, _w: any, h: any, _px: any, py: any) => {
      setDropdownTop(py + h);
    });
  }, [{ ...setDropdownTop }]);

  const toggleDropdown = (): void => {
    DropdownButton.current.measure((_fx: any, _fy: any, _w: any, h: any, _px: any, py: any) => {
      setDropdownTop(py + h);
    });
    setVisible(!visible);
  };

  const onItemPress = (item: any): void => {
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }): ReactElement<any, any> => (
    <TouchableOpacity
      style={[styles.item, item.value === "edit" && { borderBottomWidth: 0 }]}
      onPress={() => onItemPress(item)}
    >
      <Text style={{ color: "black" }}>{item.label}</Text>
      {item.value === "delete" ? (
        <Bin color={COLORS.BLACK} />
      ) : (
        item.value === "edit" && <Pencil color={COLORS.BLACK} />
      )}
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={Platform.OS === "android" && visible && styles.androidContainer}>
            <View
              style={
                Platform.OS === "android"
                  ? [styles.dropdownAndroid, { top: dropdownTop }]
                  : [styles.dropdown, { top: dropdownTop }]
              }
            >
              <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <>
      <TouchableOpacity ref={DropdownButton} onPress={toggleDropdown} style={styles.container}>
        <ThreeDotsIcon />
        {renderDropdown()}
      </TouchableOpacity>
    </>
  );
};
export default AnnouncementDropDown;
