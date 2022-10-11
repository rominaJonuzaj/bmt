import * as React from 'react';
import { View, StyleSheet, Button, Platform, Text } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import CustomButton from '../../components/buttons/CustomButton';
import { COLORS } from '../../constants/Colors';

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello World!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
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
    const { uri } = await Print.printToFileAsync({
      html
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }

  const array = [
    { company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany" },
    { company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico" },
    { company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
    { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
    { company: "Laughing Bacchus Winecellars", contact: "Yoshi Tannamuri", country: "Canada" },
    { company: "Magazzini Alimentari Riuniti", contact: "Giovanni Rovelli", country: "Italy" },
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
      
      <h2>HTML Table</h2>
      
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
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