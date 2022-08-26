// import React, { useEffect, useState, createContext, useContext } from "react";
// import * as SecureStore from "expo-secure-store";
// import { SecureStorageContext } from "./SecureStorageContext";
// import jwt_decode from "jwt-decode";

// const UserContext = createContext<UserState>({
//   name: "",
//   email: "",
//   practice: "",
//   market: "",
//   role: "",
//   isUserLoggedIn: false,
//   hasAcceptedTermsAndConditions: false,
//   weatherUnitPreference: "",
//   timeFormatPreference: "",
// });

// type Props = {
//   children: JSX.Element;
// };

// export type UserState = {
//   name: string;
//   email: string;
//   practice: string;
//   market: string;
//   role: string;
//   isUserLoggedIn: boolean;
//   hasAcceptedTermsAndConditions: boolean;
//   weatherUnitPreference: string;
//   timeFormatPreference: string;
// };

// const UserProvider: React.FC<Props> = ({ children }) => {
//   const { state, dispatch } = useContext(SecureStorageContext);
//   const [user, setUser] = useState<UserState>({
//     name: "",
//     email: "",
//     practice: "",
//     market: "",
//     role: "",
//     isUserLoggedIn: false,
//     hasAcceptedTermsAndConditions: false,
//     weatherUnitPreference: "fahrenheit",
//     timeFormatPreference: "standard",
//   });
//   useEffect(() => {
//     const updateUserState = async () => {
//       let userObj = {};
//       const accessToken = await SecureStore.getItemAsync("accessToken");
//       const idToken = await SecureStore.getItemAsync("idToken");
//       let userFullName;
//       if (idToken) {
//         const decodedIdToken = jwt_decode(idToken);
//         userFullName = decodedIdToken.name;
//         const userEmail = decodedIdToken.email;
//         const userRole = decodedIdToken.role;
//         const userMarket = decodedIdToken["custom:market"];
//         const userPractice = decodedIdToken["custom:practice"];
//         userObj = {
//           ...userObj,
//           name: userFullName,
//           email: userEmail,
//           market: userMarket,
//           role: userRole,
//           practice: userPractice,
//         };
//       }
//       userObj = { ...userObj, isUserLoggedIn: accessToken ? true : false };
//       const hasAcceptedTermsAndConditions = await SecureStore.getItemAsync("hasAcceptedTermsAndConditions");
//       const weatherUnitPreference = await SecureStore.getItemAsync("weatherUnitPreference");
//       const timeFormatPreference = await SecureStore.getItemAsync("timeFormatPreference");
//       userObj = {
//         ...userObj,
//         hasAcceptedTermsAndConditions: hasAcceptedTermsAndConditions ? true : false,
//         weatherUnitPreference: weatherUnitPreference,
//         timeFormatPreference: timeFormatPreference,
//       };
//       setUser(userObj);
//     };
//     updateUserState();
//   }, [state.count]);
//   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
// };

// export { UserContext, UserProvider };
