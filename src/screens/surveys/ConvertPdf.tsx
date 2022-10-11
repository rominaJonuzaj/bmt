import * as React from 'react';
import { View, StyleSheet, Button, Platform, Text } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import CustomButton from '../../components/buttons/CustomButton';
import { COLORS } from '../../constants/Colors';
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

const html = `
<!DOCTYPE html>
<html>
  <head>
  <style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
  </head>
  <body>
  
  <h2>BMT: Të Dhënat Javore</h2>
  
  <table>
    <tr>
      <th>Orët e gjumit</th>
      <th>Luhatjet e Humorit</th>
      <th>Ankthi</th>
      <th>Irritimi</th>
      <th>Depresioni</th>
    </tr>
  </table>
  <br/>
  <table>
    <tr>
      <th>5</th>
      <th>5</th>
      <th>5</th>
      <th>5</th>
      <th>5</th>
    </tr>
  </table>
  
  </body>
</html>
  `;

export default function ConvertPdf() {
  const [selectedPrinter, setSelectedPrinter] = React.useState(undefined);

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: createDynamicTable(),
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    try {
    const { uri } = await Print.printToFileAsync({html});
    console.log('File has been saved to:', uri);
    if (Platform.OS === "ios") {
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }else {
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (permission.granted) {
        await MediaLibrary.createAssetAsync(uri);
      }
    } }
    catch (error) {
      console.error(error);
    }
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }

  const array = [
    { company: "5", contact: "5", country: "5", anxiety: "5", depression: "5" },
    // { company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico" },
    // { company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
    // { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
    // { company: "Laughing Bacchus Winecellars", contact: "Yoshi Tannamuri", country: "Canada" },
    // { company: "Magazzini Alimentari Riuniti", contact: "Giovanni Rovelli", country: "Italy" },
  ]
  const createDynamicTable = () => {
    var table = '';
    for (let i in array) {
      const item = array[i];
      table = table + `
      <tr>
        <td>${item.company}</td>
        <td>${item.contact}</td>
        <td>${item.country}</td>
        <td>${item.anxiety}</td>
        <td>${item.depression}</td>
      </tr>
      `
    }
    console.log(table);
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
      <style>
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        
        tr:nth-child(even) {
          background-color: #dddddd;
        }
      </style>
      </head>
      <body>
      
      <h2>BMT: Të Dhënat Javore</h2>
      
      <table>
        <tr>
        <th>Orët e gjumit</th>
        <th>Luhatjet e Humorit</th>
        <th>Ankthi</th>
        <th>Irritimi</th>
        <th>Depresioni</th>
        </tr>
        ${table}
      </table>
      
      </body>
    </html>
      `;
    return html;
  }

  return (
    <View>
      <View style={styles.spacerContainer} />
      <CustomButton title='Printo' onPress={print} borderWidth={1} borderColor={COLORS.DREAMSICLE300}/>
      <View style={styles.spacer} />
      <CustomButton title='Shkarko Skedarin PDF' onPress={printToFile}  borderWidth={1} borderColor={COLORS.FADED_BLUE}/>
      {Platform.OS === 'ios' &&
        <>
          <View style={styles.spacer} />
          <CustomButton title='Selekto Printerin' onPress={selectPrinter} borderWidth={1} borderColor={COLORS.WHITE}/>
          <View style={styles.spacer} />
          {selectedPrinter ? <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
    spacerContainer: {
        paddingVertical: '30%',
    },
  spacer: {
    margin: 10,
  },
  printer: {
    margin: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: "100%",
  },
})