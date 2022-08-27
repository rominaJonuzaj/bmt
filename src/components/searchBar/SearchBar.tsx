import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { SearchBar } from "react-native-elements";
import styles from "./SearchBar.styles";
interface Props {
  onChange: any;
  value: string | undefined;
  placeholder?: string;
}
const SearchBarComponent: React.FC<Props> = ({ onChange, value, placeholder = "Search..." }) => {
  return (
    <SearchBar
      placeholder={placeholder}
      onChangeText={onChange}
      inputContainerStyle={styles.inputContainer}
      containerStyle={styles.container}
      inputStyle={styles.inputText}
      value={value}
      searchIcon={() => <Icon name="search-outline" type="ionicon" />}
    />
  );
};

export default SearchBarComponent;
