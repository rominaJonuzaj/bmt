import * as React from "react";
import { PieChart } from "react-native-svg-charts";
import { View } from "react-native";
import { Text } from "../../components/StyledText";
import styles from "./PieChart.styles";

export interface Props {
  data: any;
}
const DonutPieChart: React.FC<Props> = ({ data }) => {
  const colors: string[] = [];

  const randomColor = () => {
    const random = ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(0, 7);
    colors.push(random);
    return random;
  };

  const pieData = data
    .filter((value: number) => value > 0)
    .map((value: any, index: number) => ({
      value,
      svg: {
        fill: randomColor(),
      },
      key: `pie-${index}`,
    }));

  return (
    <View>
      <PieChart style={styles.pieChart} innerRadius={40} data={pieData} />
      {colors.map((item, index) => (
        <View key={index} style={styles.infoContainer}>
          <View
            style={{
              width: 17,
              height: 15,
              backgroundColor: item,
              marginRight: 5,
            }}
          ></View>
          <Text style={styles.text}> Billable </Text>
        </View>
      ))}
    </View>
  );
};
export default DonutPieChart;
