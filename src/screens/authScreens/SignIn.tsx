// //import AsyncStorage from "@react-native-async-storage/async-storage";
// import { View, Image } from "react-native";
// import React, { useEffect } from "react";
// import styles from "./styles/SingIn.styles";
// // import * as WebBrowser from "expo-web-browser";
// // import * as Linking from "expo-linking";
// // import * as Crypto from "expo-crypto";
// // import * as Random from "expo-random";
// // import { encode as btoa } from "base-64";
// //import { SecureStorageContext } from "../../contexts/SecureStorageContext";

// //import { USERPOOL_ID, AUTH_LOGIN_ENDPOINT } from "@env";
// import Container from "../../components/container/Container";
// import CustomButton from "../../components/buttons/CustomButton";
// import { COLORS } from "../../constants/Colors";

// const SignIn = () => {
// //   const { dispatch } = React.useContext(SecureStorageContext);

// //   const URLEncode = (str: string) => {
// //     return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
// //   };
// //   const sha256 = async (buffer: string) => {
// //     return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, buffer, {
// //       encoding: Crypto.CryptoEncoding.BASE64,
// //     });
// //   };

//   const queryParamObjFromUrl: any = (url: string) => {
//     let queryParamObj = {};
//     const query = url.split("?")[1];
//     const queryParamArray = query.split("&");
//     queryParamArray.forEach((i) => {
//       //@ts-ignore
//       return (queryParamObj[i.split("=")[0]] = i.split("=")[1]);
//     });
//     return queryParamObj;
//   };

//   useEffect(() => {
//     // const urlListenerCallback = async (event: any) => {
//     //   const url = event?.url;
//     //   const redirectUrl = Linking.makeUrl();
//     //   const queryParamObj = queryParamObjFromUrl(url);
//     //   const codeVerifier = await AsyncStorage.getItem(`codeVerifier-${queryParamObj.state}`);
//     //   const PCKECall = await fetch(`${AUTH_LOGIN_ENDPOINT}/oauth2/token`, {
//     //     method: "POST",
//     //     headers: new Headers({ "content-type": "application/x-www-form-urlencoded" }),
//     //     body: Object.entries({
//     //       grant_type: "authorization_code",
//     //       client_id: `${USERPOOL_ID}`,
//     //       code: queryParamObj.code,
//     //       code_verifier: codeVerifier,
//     //       redirect_uri: `${redirectUrl}`,
//     //     })
//     //       .map(([k, v]) => `${k}=${v}`)
//     //       .join("&"),
//     //   });
//     //   const tokens = await PCKECall.json();
//     //   if (tokens.access_token) {
//     //     dispatch({ type: "SET_TOKENS", tokens });
//     //   }
//     // };
//     // Linking.addEventListener("url", urlListenerCallback);
//   }, []);

//   const onSignIn = async () => {
//     // const randomBytes = await Random.getRandomBytesAsync(32);
//     // const state = URLEncode(btoa(randomBytes.toString()));
//     // const codeVerifier = URLEncode(btoa(randomBytes.toString()));
//     // await AsyncStorage.setItem(`codeVerifier-${state}`, codeVerifier);
//     // const codeChallenge = URLEncode(await sha256(codeVerifier));
//     // const redirectUrl = Linking.makeUrl();
//     // const ssoLink = `${AUTH_LOGIN_ENDPOINT}/login?response_type=code&client_id=${USERPOOL_ID}&state=${state}&code_challenge_method=S256&code_challenge=${codeChallenge}&redirect_uri=${redirectUrl}`;
//     // await WebBrowser.openBrowserAsync(ssoLink);
//   };

//   return (
//     <Container style={styles.container}>
//       <View style={styles.topView}>
//         <CustomButton onPress={onSignIn} title="LOGIN" color={COLORS.PAPASMURF500} />
//       </View>
//       <View style={styles.bottomView}>
//         <Image style={styles.image} source={require("../../../assets/images/adaptive-icon.png")}></Image>
//       </View>
//     </Container>
//   );
// };

// export default SignIn;
