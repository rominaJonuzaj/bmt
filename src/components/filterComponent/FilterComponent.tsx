import React, { useContext, useMemo, useState } from "react";
import { TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Text } from "../../components/StyledText";
import styles from "./styles/FilterComponent.style";
import Modal from "react-native-modal";
import { useListOfficesQuery, useListMetricsQuery } from "../../graphql/generated";
import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import SearchBarComponent from "../searchBar/SearchBar";
import CheckBox from "../checkbox/CheckBox";
import DropDownItem from "./DropDownItem";
import CloseIcon from "../../../assets/svgIcons/CloseIcon";
interface Props {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  data?: any;
  selectedCities?: (selectedCities: string[]) => void;
  selectedProjects?: (selectedProjects: string[]) => void;
  selectedPractices?: (selectedPractice: string[]) => void;
  selectedReportingTime?: (selectedReportingTime: string[]) => void;
  selectedOrders?: (selectedOrder: string) => void;
  customDropdown?: boolean;
}

function arrayRemove(arr, value) {
  return arr.filter((item) => {
    return !item.includes(value);
  });
}
const FilterModal: React.FC<Props> = ({
  modalVisible,
  setModalVisible,
  selectedCities,
  selectedOrders,
  customDropdown,
  selectedReportingTime,
  selectedPractices,
}) => {
  const [practiceExpanded, setPracticeExpanded] = useState(false);
  const [marketExpanded, setMarketExpanded] = useState(false);
  const [projectExpanded, setProjectExpanded] = useState(false);
  const [OrderByExpanded, setOrderByExpanded] = useState(false);
  const [reportExpanded, setReportExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [selectedOffices, setSelectedOffices] = useState<string[]>([]);
  const [order, setOrder] = useState<string>("A-Z");
  const client = useContext(GraphqlClientContext);
  const { data: officesData } = useListOfficesQuery(client);
  const { data: projecstData } = useListMetricsQuery(client);
  const projects = projecstData?.listMetrics?.items?.map((item) => item?.name).filter((v, i, a) => a.indexOf(v) === i);
  const practices = ["Design", "Digital", "Data & Analytics", "Engineering"];
  const [selectedPracticesArr, setSelectedPracticesArr] = useState<string[]>([]);
  const reportingTimeArr = ["Q1", "Q2", "Q3", "Q4"];
  const [selectedReportingTimeArr, setSelectedReportingTimeArr] = useState<string[]>([]);
  const [selectedProjectsArr, setSelectedProjectsArr] = useState<string[]>([]);

  const offices = officesData?.listOffices?.items?.map((item) => item.name);

  const handleCityCheckbox = (option: any) => {
    if (selectedOffices?.includes(option)) setSelectedOffices(arrayRemove(selectedOffices, option));
    else setSelectedOffices([...selectedOffices, option]);
  };
  const handleProjectCheckBox = (option: any) => {
    if (selectedProjectsArr?.includes(option)) setSelectedProjectsArr(arrayRemove(selectedProjectsArr, option));
    else setSelectedProjectsArr([...selectedProjectsArr, option]);
  };
  const handleSelectedPracticesCheckbox = (option: any) => {
    if (selectedPracticesArr?.includes(option)) setSelectedPracticesArr(arrayRemove(selectedPracticesArr, option));
    else setSelectedPracticesArr([...selectedPracticesArr, option]);
  };
  const handleReportingTimeCheckbox = (option: any) => {
    if (selectedReportingTimeArr?.includes(option))
      setSelectedReportingTimeArr(arrayRemove(selectedReportingTimeArr, option));
    else setSelectedReportingTimeArr([...selectedReportingTimeArr, option]);
  };
  const handleOrderCheckbox = (option: any) => {
    if (order === option) setOrder("");
    else setOrder(option);
  };
  const handleCose = () => {
    setModalVisible(false);
    selectedPractices && selectedPractices(selectedPracticesArr);
    selectedReportingTime && selectedReportingTime(selectedReportingTimeArr);
  };
  const handleClear = () => {
    setSelectedOffices([]);
    setSelectedProjectsArr([]);
    setSelectedPracticesArr([]);
    // selectedProjects([]);
    selectedCities && selectedCities([]);
    selectedPractices && selectedPractices([]);
    selectedOrders && selectedOrders("");
    setOrder("A-Z");
  };

  const handleFilterApply = () => {
    setModalVisible(false);
    selectedCities && selectedCities(selectedOffices);
    selectedOrders && selectedOrders(order);
    selectedPractices && selectedPractices(selectedPracticesArr);
    // selectedProjects(selectedProjectsArr);
  };

  const searchedProject = useMemo(() => {
    if (searchValue) {
      return projects?.filter((item) => {
        const project = item?.toUpperCase();
        const textData = searchValue.toUpperCase();
        return project?.includes(textData);
      });
    }
    setSearchValue(searchValue);
  }, [searchValue]);

  return (
    <Modal isVisible={modalVisible}>
      <View style={styles.modal}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {customDropdown ? (
            <View style={styles.dropdown}>
              <View style={[styles.header, { marginBottom: 0 }]}>
                <DropDownItem
                  label="Reporting Time"
                  setExpanded={() => setReportExpanded(!reportExpanded)}
                  expanded={reportExpanded}
                  lastItem
                />
                <TouchableOpacity style={styles.customCloseButton} onPress={handleCose}>
                  <CloseIcon style={styles.customCloseButton} />
                </TouchableOpacity>
              </View>
              {/* {practiceExpanded &&
                practices.map((item, index) => (
                  <View key={index} style={styles.checkboxContainer}>
                    <CheckBox
                      label={item}
                      onClick={(e) => handleSelectedPracticesCheckbox(e)}
                      isChecked={selectedPracticesArr.includes(item)}
                      value={item}
                    />
                  </View>
                ))} */}
              {/* <DropDownItem
                label="Practice"
                setExpanded={() => setPracticeExpanded(!practiceExpanded)}
                expanded={practiceExpanded}
                lastItem
              /> */}
              {reportExpanded &&
                reportingTimeArr.map((item, index) => (
                  <View key={index} style={styles.checkboxContainer}>
                    <CheckBox
                      label={item}
                      onClick={(e) => handleReportingTimeCheckbox(e)}
                      isChecked={selectedReportingTimeArr.includes(item)}
                      value={item}
                    />
                  </View>
                ))}
            </View>
          ) : (
            <View style={styles.dropdown}>
              <View style={styles.header}>
                <DropDownItem
                  label="Market"
                  setExpanded={() => setMarketExpanded(!marketExpanded)}
                  expanded={marketExpanded}
                />
                <TouchableOpacity style={styles.clearButton}>
                  <Text style={styles.closeText} onPress={handleClear}>
                    CLEAR
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={handleFilterApply}>
                  <CloseIcon style={styles.closeButton} />
                </TouchableOpacity>
              </View>
              {marketExpanded &&
                offices?.map((office, index) => (
                  <View key={index} style={styles.checkboxContainer}>
                    <CheckBox
                      label={office}
                      key={index}
                      onClick={(e) => handleCityCheckbox(e)}
                      isChecked={selectedOffices.includes(office)}
                      value={office}
                    />
                  </View>
                ))}
              <DropDownItem
                label="Practice"
                setExpanded={() => setPracticeExpanded(!practiceExpanded)}
                expanded={practiceExpanded}
              />
              {practiceExpanded &&
                practices.map((item, index) => (
                  <View key={index} style={styles.checkboxContainer}>
                    <CheckBox
                      label={item}
                      onClick={(e) => handleSelectedPracticesCheckbox(e)}
                      isChecked={selectedPracticesArr.includes(item)}
                      value={item}
                    />
                  </View>
                ))}
              {/* <DropDownItem
                label="Project"
                setExpanded={() => setProjectExpanded(!projectExpanded)}
                expanded={projectExpanded}
              />
              {projectExpanded && (
                <>
                  <View style={styles.searchBar}>
                    <SearchBarComponent onChange={setSearchValue} value={searchValue} />
                  </View>
                  <ScrollView style={styles.filterWrapper}>
                    {searchedProject
                      ? searchedProject?.map((item, index) => (
                          <View key={index} style={styles.checkboxContainer}>
                            <CheckBox
                              label={item || ""}
                              onClick={(e) => handleProjectCheckBox(e)}
                              isChecked={selectedProjectsArr.includes(item || "")}
                              value={item}
                            />
                          </View>
                        ))
                      : projects?.map((item, index) => (
                          <View key={index} style={styles.checkboxContainer}>
                            <CheckBox
                              label={item || ""}
                              key={index}
                              onClick={(e) => handleProjectCheckBox(e)}
                              isChecked={selectedProjectsArr.includes(item || "")}
                              value={item}
                            />
                          </View>
                        ))}
                  </ScrollView>
                </>
              )} */}
              <View style={styles.headerLast}>
                <DropDownItem
                  label="Order By"
                  setExpanded={() => setOrderByExpanded(!OrderByExpanded)}
                  expanded={OrderByExpanded}
                  lastItem={true}
                />
              </View>
              {OrderByExpanded && (
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    isChecked={order === "A-Z"}
                    label="A-Z"
                    value="A-Z"
                    onClick={(e) => handleOrderCheckbox(e)}
                  />
                  <CheckBox
                    isChecked={order === "Z-A"}
                    label="Z-A"
                    value="Z-A"
                    onClick={(e) => handleOrderCheckbox(e)}
                  />
                </View>
              )}
            </View>
          )}
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};
export default FilterModal;
