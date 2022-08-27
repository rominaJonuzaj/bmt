import DropDownPicker, { ValueType } from "react-native-dropdown-picker";
import { COLORS } from "../../constants/Colors";
import { Icon } from "react-native-elements";
import styles from "./styles/DropdownPicker.styles";
import React, { useState } from "react";
import { Platform, View } from "react-native";
import Filter from "../../../assets/svgIcons/Filter";

export interface Props {
  label?: string;
  data: any;
  onChange?: (value: ValueType[] | null) => void;
  filterDropdown?: boolean;
  surveyDropdown?: boolean;
  open?: any;
  setOpen?: any;
}

const DropDown: React.FC<Props> = ({ label, data, onChange, filterDropdown, surveyDropdown, open, setOpen }) => {
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);

  return (
    <View style={Platform.OS === "android" && open && styles.androidContainer}>
      {filterDropdown ? (
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(value) => onChange(value)}
          style={styles.container}
          labelStyle={styles.label}
          placeholderStyle={styles.label}
          listItemContainerStyle={styles.listItem}
          arrowIconContainerStyle={styles.arrowIcon}
          TickIconComponent={() => <Icon name="check" size={16} color={COLORS.PAPASMURF500} type="font-awesome" />}
          dropDownContainerStyle={styles.customDropDownContainer}
          ArrowUpIconComponent={() => <Filter color={COLORS.GALAXY500} />}
          ArrowDownIconComponent={() => <Filter color={COLORS.GALAXY500} />}
        />
      ) : (
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(value) => onChange(value)}
          placeholder={label}
          style={[styles.container, surveyDropdown ? styles.surveyDropdown : { width: "43%" }]}
          labelStyle={[styles.selectedItem]}
          listItemContainerStyle={styles.listItem}
          placeholderStyle={[styles.placeholder, surveyDropdown && styles.customSelectedItem]}
          dropDownContainerStyle={[styles.dropDownContainer, surveyDropdown && styles.customSurveyDropdown]}
          ArrowUpIconComponent={() => (
            <Icon
              name={surveyDropdown ? "angle-up" : "caret-up"}
              size={surveyDropdown ? 23 : 16}
              color={surveyDropdown ? COLORS.BLUE : COLORS.WHITE}
              type="font-awesome"
            />
          )}
          ArrowDownIconComponent={() => (
            <Icon
              name={surveyDropdown ? "angle-down" : "caret-down"}
              size={surveyDropdown ? 23 : 16}
              color={surveyDropdown ? COLORS.BLUE : COLORS.WHITE}
              type="font-awesome"
            />
          )}
        />
      )}
    </View>
  );
};

export default DropDown;
