import "react-native-gesture-handler";
import React from "react";
import { useColorScheme } from "react-native";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation/index";
import { RootSiblingParent } from "react-native-root-siblings";

import Amplify from 'aws-amplify';
import config from "./src/aws-exports";
import { withAuthenticator } from 'aws-amplify-react-native';
import Localei18n from "./src/components/Language/Localei18n";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
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
              <Localei18n />
                <Navigation colorScheme={colorScheme} />
              {/* </QueryClientProvider>
            </GraphqlClientProvider>
          </UserProvider>
        </SecureStorageProvider> */}
      </RootSiblingParent>
    );
  }
}
export default withAuthenticator(App)
