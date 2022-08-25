import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../components/StyledText";
import moment from "moment";
import styles from "./ItemNotificationsView.styles";
import { useCreateAnnouncementSubscriberMutation } from "../../graphql/generated";
import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import FormClose from "../../../assets/svgIcons/FormClose";
import { UserContext } from "../../contexts/UserContext";
interface ItemNotificationsViewProps {
  item: any;
}

const ItemNotificationsView: React.FC<ItemNotificationsViewProps> = ({ item }) => {
  const user = useContext(UserContext);
  const client = useContext(GraphqlClientContext);
  const createdDate = item.createdAt;
  const convertedDate = moment(createdDate).format("MMMM " + "DD" + "," + " YYYY");
  const data = useCreateAnnouncementSubscriberMutation(client);
  const hideAnnouncement = () => {
    data.mutate({ announcementId: item.id, hasSeenAnnouncement: true, email: user.email });
  };
  return (
    <>
      <View style={styles.notificationContainer}>
        <View style={styles.headerContainer}>
          {convertedDate ? <Text style={styles.date}>{convertedDate}</Text> : null}
          <TouchableOpacity style={styles.customCancleButton} onPress={hideAnnouncement}>
            <FormClose />
          </TouchableOpacity>
        </View>
        {item.body ? <Text style={styles.body}>{item.body}</Text> : null}
      </View>
    </>
  );
};
export default ItemNotificationsView;
