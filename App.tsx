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

import { QueryClient, QueryClientProvider } from "react-query";
import { GraphqlClientProvider } from "./src/contexts/GraphqlClientContext";
import { UserProvider } from "./src/contexts/UserContext";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const queryClient = new QueryClient();

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (
      <RootSiblingParent>
              <UserProvider>
              <GraphqlClientProvider>
              <QueryClientProvider client={queryClient}>
              <Localei18n />
                <Navigation colorScheme={colorScheme} />
                </QueryClientProvider>
                </GraphqlClientProvider>
                </UserProvider>
      </RootSiblingParent>
    );
  } else {
    return (
      <RootSiblingParent>
              <UserProvider>
              <GraphqlClientProvider>
              <QueryClientProvider client={queryClient}>
              <Localei18n />
                <Navigation colorScheme={colorScheme} />
                </QueryClientProvider>
                </GraphqlClientProvider>
                </UserProvider>
      </RootSiblingParent>
    );
  }
}
export default withAuthenticator(App)
