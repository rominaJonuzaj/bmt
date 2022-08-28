// import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { useLogging } from './src/hooks/useLogging';
// import HomeStackNav from './src/navigation/HomeStack';

// export default function App() {
//     const [logging] = useLogging('Application');

//     useEffect(() => {
//         logging.info('Loading application.');
//     }, [logging]);

//     return (
//         <View style={styles.container}>
//             <Text>Welcome to BMT!</Text>
//             <StatusBar style="auto" />
//             <HomeStackNav></HomeStackNav>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'cyan',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
import "react-native-gesture-handler";
import React from "react";
import { useColorScheme } from "react-native";
// import Amplify from "aws-amplify";
// import config from "./aws-exports";
// import { QueryClient, QueryClientProvider } from "react-query";
import useCachedResources from "./src/hooks/useCachedResources";
//import { UserProvider } from "./src/contexts/UserContext";
// import { SecureStorageProvider } from "./src/contexts/SecureStorageContext";
// import { GraphqlClientProvider } from "./src/contexts/GraphqlClientContext";
import Navigation from "./src/navigation/index";
import { RootSiblingParent } from "react-native-root-siblings";

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

// Amplify.configure(config);
// const queryClient = new QueryClient();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <RootSiblingParent>
        {/* <SecureStorageProvider>
          <UserProvider>
            <GraphqlClientProvider>
              <QueryClientProvider client={queryClient}> */}
                <Navigation colorScheme={colorScheme} />
              {/* </QueryClientProvider>
            </GraphqlClientProvider>
          </UserProvider>
        </SecureStorageProvider> */}
      </RootSiblingParent>
    );
  }
}
