import React, { useEffect, useState, createContext, useContext } from "react";
import { GraphQLClient } from "graphql-request";
//import * as Linking from "expo-linking";
// import { SecureStorageContext } from "../contexts/SecureStorageContext";
// import jwt_decode from "jwt-decode";

// @ts-ignore
import { ENDPOINT, ENDPOINT_API_KEY } from "@env";

const GraphqlClientContext = createContext({});

type Props = {
  children: JSX.Element;
};

// const refreshAuthToken: any = async (refreshToken) => {
//   const redirectUrl = Linking.makeUrl();
//   const res = await fetch(`${AUTH_LOGIN_ENDPOINT}/oauth2/token`, {
//     method: "POST",
//     headers: new Headers({ "content-type": "application/x-www-form-urlencoded" }),
//     body: Object.entries({
//       grant_type: "refresh_token",
//       client_id: USERPOOL_ID,
//       redirect_uri: redirectUrl,
//       refresh_token: refreshToken,
//     })
//       .map(([k, v]) => `${k}=${v}`)
//       .join("&"),
//   });
//   try {
//     const tokens = await res.json();
//     return tokens;
//   } catch (e) {
//     console.log("e", e);
//   }
// };

const GraphqlClientProvider: React.FC<Props> = ({ children }) => {
//   const { state, dispatch } = useContext(SecureStorageContext);
//   const [authToken, setAuthToken] = useState("");
//   useEffect(() => {
//     const getAuthToken = async () => {
//       await dispatch({ type: "GET_ALL_TOKENS" });
//       const decoded = state.value.accessToken ? (jwt_decode(state.value.accessToken) as any) : null;
//       if (decoded && Date.now() >= decoded?.exp * 1000) {
//         const refreshToken = state.value.refreshToken;
//         if (refreshToken) {
//           const newTokens = await refreshAuthToken(refreshToken);
//           if (newTokens.error) {
//             await dispatch({ type: "DELETE_ALL_TOKENS" });
//           } else {
//             await dispatch({ type: "SET_TOKENS", newTokens });
//           }
//         } else {
//           await dispatch({ type: "DELETE_ALL_TOKENS" });
//         }
//       } else {
//         setAuthToken(state.value);
//       }
//     };
//     getAuthToken();
//   }, [state.count]);

  const getHeaders = () => {
    return {
      headers: {
        // Authorization: authToken,
        "x-api-key": `${ENDPOINT_API_KEY}`,
      },
    };
  };
  const graphQLClient = new GraphQLClient(ENDPOINT, getHeaders());
  return <GraphqlClientContext.Provider value={graphQLClient}>{children}</GraphqlClientContext.Provider>;
};

export { GraphqlClientContext, GraphqlClientProvider };
