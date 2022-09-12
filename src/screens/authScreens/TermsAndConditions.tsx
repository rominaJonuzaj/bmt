// import React, { useRef, useState } from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { Text, View } from "react-native";
// import CustomButton from "../../components/buttons/CustomButton";
// import styles from "./styles/Terms.styles";
// import { COLORS } from "../../constants/Colors";
// import { ScrollView } from "react-native-gesture-handler";
// //import { SecureStorageContext } from "../../contexts/SecureStorageContext";
// import { Animated } from "react-native";

// const TermsAndConditions = () => {
//   //const { dispatch } = React.useContext(SecureStorageContext);
//   const [disabledButton, setDisabledButton] = useState(true);
//   const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
//   const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
//   const scrollIndicator = useRef(new Animated.Value(0)).current;
//   const scrollIndicatorSize =
//     completeScrollBarHeight > visibleScrollBarHeight
//       ? (visibleScrollBarHeight * visibleScrollBarHeight) / completeScrollBarHeight
//       : visibleScrollBarHeight;

//   const difference = visibleScrollBarHeight > scrollIndicatorSize ? visibleScrollBarHeight - scrollIndicatorSize : 1;

//   const scrollIndicatorPosition = Animated.multiply(
//     scrollIndicator,
//     visibleScrollBarHeight / completeScrollBarHeight
//   ).interpolate({
//     inputRange: [0, difference],
//     outputRange: [0, difference],
//     extrapolate: "clamp",
//   });
//   const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
//     return layoutMeasurement.height + contentOffset.y >= contentSize.height - 1 ? true : false;
//   };

//   // const handleAgree = async () => {
//   //   try {
//   //     dispatch({ type: "SET_TERMSANDCONDITIONS", value: JSON.stringify(true) });
//   //   } catch (err) {}
//   // };

//   // const handleDisagree = () => {
//   //   dispatch({ type: "DELETE_ALL_TOKENS" });
//   // };

//   return (
//     <SafeAreaProvider style={styles.container}>
//       <View style={styles.titleTextWrapper}>
//         <Text style={styles.title}>Terms & Conditions</Text>
//         <View style={styles.scrollView}>
//           <ScrollView
//             contentContainerStyle={styles.contentContainer}
//             showsVerticalScrollIndicator={false}
//             scrollEventThrottle={16}
//             onContentSizeChange={(_, height) => {
//               setCompleteScrollBarHeight(height);
//             }}
//             onLayout={({
//               nativeEvent: {
//                 layout: { height },
//               },
//             }) => {
//               setVisibleScrollBarHeight(height);
//             }}
//             onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollIndicator } } }], {
//               useNativeDriver: false,
//               listener: ({ nativeEvent }) => {
//                 if (nativeEvent && isCloseToBottom(nativeEvent)) {
//                   setDisabledButton(false);
//                 }
//               },
//             })}
//           >
//             <Text style={styles.text}>
//               These terms and conditions create a contract between you and Inspire11 LLC (the “Agreement”). Please read
//               the Agreement carefully. To confirm your understanding and acceptance of the Agreement, click “Accept.” If
//               you click the button labeled “Cancel,” you are rejecting this Agreement and may not use the Inspire11
//               mobile application.
//             </Text>
//             <Text style={styles.header}>A. Introduction</Text>
//             <Text style={styles.text}>
//               This Agreement governs your use of Inspire11’s mobile application (“Services”), through which you can
//               access content and other in-app services (collectively, “Content”). Content may be offered through the
//               Services by Inspire11 or a third party. Our Services are available for your use in your country or
//               territory of residence (“Home Country”). By creating an account for use of the Services in a particular
//               country or territory you are specifying it as your Home Country. To use our Services, you need compatible
//               hardware, software (latest version recommended and sometimes required), and internet access (fees may
//               apply). Our Services’ performance may be affected by these factors.
//             </Text>
//             <Text style={styles.text}>
//               Your download, installation or use of the Services constitutes your acceptance of this Agreement, which
//               takes effect on the date on which you download, install, or use the Services. If you do not agree with
//               these terms, you should stop downloading, installing, or using the Services immediately.
//             </Text>
//             <Text style={styles.header}>B. Using Our Services</Text>
//             <Text style={styles.subHeader}>a. Payment, Taxes & Refunds</Text>
//             <Text style={styles.text}>
//               There is no fee to use our Services. You can acquire Content on our Services through what is referred to
//               as a “Transaction.” Each Transaction is an electronic contract between you and Inspire11, and/or you and
//               the entity providing the Content on our Services. When you make your first Transaction, we will ask you to
//               choose how frequently we should ask for your password for future Transactions. If you enable Touch ID for
//               Transactions, we will ask you to authenticate all Transactions with your fingerprint, and if you enable
//               Face ID for Transactions, we will ask you to authenticate all Transactions using facial recognition. Your
//               password settings can be managed at any time in the Inspire11 mobile app. Inspire11 will charge your
//               selected payment method (such as your credit card, debit card, gift card/code, or other method available
//               in your Home Country) for any paid Transactions, including any applicable taxes. If we cannot charge your
//               selected payment method for any reason (such as expiration or insufficient funds), you remain responsible
//               for any uncollected amounts, and we will attempt to charge the payment method again as you may update your
//               payment method information. If you pre-order Content, you will be charged when the Content is delivered to
//               you unless you cancel before the Content becomes available. In accordance with local law, Inspire11 may
//               update information regarding your selected payment method if provided such information by your financial
//               institution. All Transactions are final. Content prices may change at any time. If technical problems
//               prevent or unreasonably delay delivery of Content, your exclusive and sole remedy is either replacement of
//               the Content or refund of the price paid, as determined by Inspire11. From time to time, Inspire11 may
//               refuse a refund request if we find evidence of fraud, refund abuse, or other manipulative behavior that
//               entitles Inspire11 to a corresponding counterclaim.
//             </Text>
//             <Text style={styles.text}>
//               Inspire11 may also provide you with the opportunity to donate to a charity or organization highlighted by
//               Inspire11, including a non-profit arm of Inspire11. Any donation to such a charity or non-profit
//               organization shall also be considered a “Transaction” and shall be subject to the same terms and
//               conditions.
//             </Text>
//             <Text style={styles.subHeader}>b. Accessing Services</Text>
//             <Text style={styles.text}>
//               To use Inspire11’s Services and access Content, you must be: (1) aged 18 or older; and (2) a current
//               employee, contractor, or subcontractor of Inspire11 with an “@inspire11.com” email address. To access the
//               Services, you must create a unique account using your @inspire11.com email address. Each @inspire11.com
//               email address will only be permitted to have a single account to access Services and Content.
//             </Text>
//             <Text style={styles.text}>
//               You may not share your account information, your unique @inspire11.com email address, or access to
//               Services and/or Content with any other person or entity. Access to the Services or Content is valuable,
//               and you are responsible for maintaining its confidentiality and security. If you give someone who is not a
//               current employee, contractor, or subcontractor of Inspire11 access to the Services and/or Content, you
//               violate this Agreement and your access to the Services and/or Content may be revoked.
//             </Text>
//             <Text style={styles.text}>
//               Inspire11 is not responsible for any losses arising from the unauthorized use of your account. Please
//               contact Inspire11 if you suspect that your account has been compromised.
//             </Text>
//             <Text style={styles.subHeader}>c. Privacy Policy</Text>
//             <Text style={styles.text}>
//               Your use of our Services is subject to Inspire11’s Privacy Policy, which is attached as Exhibit A to this
//               Agreement.
//             </Text>
//             <Text style={styles.subHeader}>d. Services & Content Usage Rules</Text>
//             <Text style={styles.text}>
//               Your use of the Services and Content must follow the rules set forth in this section (“Usage Rules”). Any
//               other use of the Services and Content is a material breach of this Agreement. Inspire11 may monitor your
//               use of the Services and Content to ensure that you are following these Usage Rules.
//             </Text>
//             <Text style={styles.text}>All Services:</Text>
//             <Text style={styles.text}>
//               - You may use the Services and Content only for personal, noncommercial purposes.
//             </Text>
//             <Text style={styles.text}>
//               - Inspire11’s delivery of Services or Content does not transfer any commercial or promotional use rights
//               to you and does not constitute a grant or waiver of any rights of the copyright owners.
//             </Text>
//             <Text style={styles.text}>
//               - It is your responsibility not to lose, destroy, or damage Content once downloaded. We encourage you to
//               back up your Content regularly.
//             </Text>
//             <Text style={styles.text}>
//               - You may not tamper with or circumvent any security technology included with the Services.
//             </Text>
//             <Text style={styles.text}>
//               - You may access our Services only using Inspire11’s software and may not modify or use modified versions
//               of such software.
//             </Text>
//             <Text style={styles.subHeader}>e. Downloads</Text>
//             <Text style={styles.text}>
//               You may be limited in the amount of Content you may download, and some downloaded Content may expire after
//               a given amount of time after downloaded or first played. Certain Content may not be available for download
//               at all.
//             </Text>
//             <Text style={styles.text}>
//               You may be able to redownload previously acquired Content (“Redownload”) to your devices that are signed
//               in with the same Inspire11 ID (“Associated Devices”). Content may not be available for Redownload if that
//               Content is no longer offered on our Services.
//             </Text>
//             <Text style={styles.subHeader}>f. Content & Service Availability</Text>
//             <Text style={styles.text}>
//               Terms found in this Agreement that relate to Services, Content types, features or functionality not
//               available in your Home Country are not applicable to you unless and until they become available to you.
//               Certain Services and Content available to you in your Home Country may not be available to you when
//               traveling outside of your Home Country.
//             </Text>
//             <Text style={styles.header}>C. Your Submissions to our Services</Text>
//             <Text style={styles.text}>
//               Our Services may allow you to submit or post materials such as comments, ratings and reviews, pictures,
//               videos, and podcasts (including associated metadata and artwork). Your use of such features must comply
//               with the Submissions Guidelines below, which may be updated from time to time. If you see materials that
//               do not comply with the Submissions Guidelines, please use the Report a Concern feature. You hereby grant
//               Inspire11 a worldwide, royalty-free, perpetual, nonexclusive license to use the materials you submit
//               within the Services and related marketing, and Inspire11 internal purposes. Inspire11 may monitor and
//               decide to remove or edit any submitted material.
//             </Text>
//             <Text style={styles.text}>Submissions Guidelines: You may not use the Services to:</Text>
//             <Text style={styles.text}>
//               - post any materials that (i) you do not have permission, right or license to use, or (ii) infringe on the
//               rights of any third party;{" "}
//             </Text>
//             <Text style={styles.text}>
//               - post objectionable, offensive, unlawful, deceptive, inaccurate, or harmful content;
//             </Text>
//             <Text style={styles.text}>- post personal, private, or confidential information belonging to others; </Text>
//             <Text style={styles.text}>- request personal information from a minor;</Text>
//             <Text style={styles.text}>
//               - impersonate or misrepresent your affiliation with another person, or entity;{" "}
//             </Text>
//             <Text style={styles.text}>
//               - post or transmit spam, including but not limited to unsolicited or unauthorized advertising, promotional
//               materials, or informational announcements;
//             </Text>
//             <Text style={styles.text}>
//               - post, modify, or remove a rating or review in exchange for any kind of compensation or incentive;
//             </Text>
//             <Text style={styles.text}>- post a fake rating or review;</Text>
//             <Text style={styles.text}>- plan or engage in any illegal, fraudulent, or manipulative activity.</Text>
//             <Text style={styles.header}>D. Additional Terms for Certain Content Acquired from Third Parties</Text>
//             <Text style={styles.text}>
//               Some Content available in certain Services are acquired by You from the third-party provider of such
//               Content (as displayed on the product page and/or during the acquisition process for the relevant Content),
//               not Inspire11. In such case, Inspire11 acts as an agent for the Content provider in providing the Content
//               to you, and therefore Inspire11 is not a party to the Transaction between you and the Content provider.
//               The Content provider reserves the right to enforce the terms of use relating to such Content. The Content
//               provider is solely responsible for such Content, any warranties to the extent that such warranties have
//               not been disclaimed, and any claims that you or any other party may have relating to such Content.
//             </Text>
//             <Text style={styles.header}>E. Miscellaneous Terms Applicable to All Services</Text>
//             <Text style={styles.subHeader}>a. Definition of Inspire11</Text>
//             <Text style={styles.text}>Depending on your Home Country, “Inspire11” means:</Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • Inspire11 LLC headquartered at 1 E. Wacker Dr., Suite 1110, Chicago, IL 60601, for users in the United
//               States, including Puerto Rico;
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • Inspire11 shpk. Prishtinë, with offices at Rruga B, Royal C15/10 pn, Prishtinë, Kosovo, for users in
//               Kosovo; and
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • Inspajr Eleven Dooel, with offices at Inspire11 DOO Tetovo, Str. Ilindenska nr. 335, Tetovo, Macedonia,
//               for users in Macedonia.
//             </Text>
//             <Text style={styles.subHeader}>b. Contract Changes</Text>
//             <Text style={styles.text}>
//               Inspire11 reserves the right at any time to modify this Agreement and to add new or additional terms or
//               conditions on your use of the Services and/or Content. Such modifications and additional terms and
//               conditions will be effective immediately and incorporated into this Agreement. By continuing to use the
//               Services after receiving notice of such modifications or additional terms, you will be deemed to accept
//               the modifications or additional terms.
//             </Text>
//             <Text style={styles.subHeader}>c. Third-Party Materials</Text>
//             <Text style={styles.text}>
//               Inspire11 is not responsible or liable for third party materials included within or linked from the
//               Content or the Services.
//             </Text>
//             <Text style={styles.subHeader}>d. Intellectual Property</Text>
//             <Text style={styles.text}>
//               You agree that the Services, including but not limited to Content, graphics, user interface, audio clips,
//               video clips, editorial content, and the scripts and software used to implement the Services, contain
//               proprietary information and material that is owned by Inspire11 and/or its licensors, and is protected by
//               applicable intellectual property and other laws, including but not limited to copyright. You agree that
//               you will not use such proprietary information or materials in any way whatsoever except for use of the
//               Services for personal, noncommercial uses in compliance with this Agreement. No portion of the Services
//               may be reproduced in any form or by any means, except as expressly permitted by this Agreement. You agree
//               not to modify, rent, loan, sell, or distribute the Services or Content in any manner, and you shall not
//               exploit the Services in any manner not expressly authorized.{" "}
//             </Text>
//             <Text style={styles.text}>
//               The Inspire11 name, the Inspire11 logo, any Inspire11 trademarks, Inspire11 copyrighted material,
//               Inspire11-created and patent-protected material, and other Inspire11 trademarks, service marks, graphics,
//               and logos used in connection with the Services are trademarks or registered trademarks of Inspire11 in the
//               U.S. and other countries throughout the world. You are granted no right or license with respect to any of
//               the aforesaid trademarks.
//             </Text>
//             <Text style={styles.subHeader}>e. Copyright</Text>
//             <Text style={styles.text}>
//               Unless otherwise noted, Services and Content provided by Inspire11 are © Inspire11 LLC and its
//               subsidiaries.{" "}
//             </Text>
//             <Text style={styles.text}>
//               If you believe that any Content available through the Services infringes a copyright claimed by you,
//               please contact Inspire11 at info@inspire11.com.
//             </Text>
//             <Text style={styles.subHeader}>f. Termination & Suspension of Services</Text>
//             <Text style={styles.text}>
//               If you fail, or Inspire11 suspects that you have failed, to comply with any of the provisions of this
//               Agreement, Inspire11 may, without notice to you: (i) terminate this Agreement and/or your mobile
//               application account, and you will remain liable for all amounts due under your account up to and including
//               the date of termination; and/or (ii) terminate your license to the software; and/or (iii) preclude your
//               access to the Services.{" "}
//             </Text>
//             <Text style={styles.text}>
//               Inspire11 further reserves the right to modify, suspend, or discontinue the Services (or any part or
//               Content thereof) at any time with or without notice to you, and Inspire11 will not be liable to you or to
//               any third party should it exercise such rights.
//             </Text>
//             <Text style={styles.subHeader}>g. Disclaimer of Warranties; Liability Limitation</Text>
//             <Text style={styles.text}>
//               INSPIRE11 DOES NOT GUARANTEE, REPRESENT, OR WARRANT THAT YOUR USE OF THE SERVICES WILL BE UNINTERRUPTED OR
//               ERROR-FREE, AND YOU AGREE THAT FROM TIME TO TIME, INSPIRE11 MAY REMOVE THE SERVICES FOR INDEFINITE PERIODS
//               OF TIME, CANCEL THE SERVICES AT ANY TIME, OR OTHERWISE LIMIT OR DISABLE YOUR ACCESS TO THE SERVICES
//               WITHOUT NOTICE TO YOU.{" "}
//             </Text>
//             <Text style={styles.text}>
//               YOU EXPRESSLY AGREE THAT YOUR USE OF, OR INABILITY TO USE, OR ACTIVITY IN CONNECTION WITH THE SERVICES IS
//               AT YOUR SOLE RISK. THE SERVICES AND ALL CONTENT DELIVERED TO YOU THROUGH THE SERVICES ARE (EXCEPT AS
//               EXPRESSLY STATED BY INSPIRE11) PROVIDED "AS IS" AND "AS AVAILABLE" FOR YOUR USE, WITHOUT WARRANTIES OF ANY
//               KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
//               PARTICULAR PURPOSE, TITLE, AND NONINFRINGEMENT. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF
//               IMPLIED WARRANTIES, THE ABOVE EXCLUSION OF IMPLIED WARRANTIES MAY NOT APPLY TO YOU.{" "}
//             </Text>
//             <Text style={styles.text}>
//               IN NO CASE SHALL INSPIRE11, ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, OR
//               LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES
//               ARISING FROM YOUR USE OF ANY OF THE SERVICES OR FOR ANY OTHER CLAIM RELATED IN ANY WAY TO YOUR USE OF THE
//               SERVICES AND/OR CONTENT, INCLUDING, BUT NOT LIMITED TO, ANY ERRORS OR OMISSIONS IN ANY CONTENT, OR ANY
//               INJURY, LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR
//               OTHERWISE MADE AVAILABLE VIA THE SERVICES, EVEN IF ADVISED OF THEIR POSSIBILITY. BECAUSE SOME COUNTRIES,
//               STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR
//               INCIDENTAL DAMAGES, IN SUCH COUNTRIES, STATES OR JURISDICTIONS, INSPIRE11'S LIABILITY SHALL BE LIMITED TO
//               THE EXTENT SUCH LIMITATION IS PERMITTED BY LAW.{" "}
//             </Text>
//             <Text style={styles.text}>
//               INSPIRE11 SHALL USE REASONABLE EFFORTS TO PROTECT INFORMATION SUBMITTED BY YOU IN CONNECTION WITH THE
//               SERVICES, BUT YOU AGREE THAT YOUR SUBMISSION OF SUCH INFORMATION IS AT YOUR SOLE RISK, AND, TO THE FULLEST
//               EXTENT PERMITTED UNDER APPLICABLE LAW, YOU HEREBY RELEASE INSPIRE11 FROM ANY AND ALL LIABILITY TO YOU FOR
//               ANY LOSS OR LIABILITY RELATING TO SUCH INFORMATION IN ANY WAY.
//             </Text>
//             <Text style={styles.text}>
//               INSPIRE11 DOES NOT REPRESENT OR GUARANTEE THAT THE SERVICES WILL BE FREE FROM LOSS, CORRUPTION, ATTACK,
//               VIRUSES, INTERFERENCE, HACKING, OR OTHER SECURITY INTRUSION, AND YOU HEREBY RELEASE INSPIRE11 FROM ANY
//               LIABILITY RELATING THERETO. YOU SHALL BE RESPONSIBLE FOR BACKING UP YOUR OWN SYSTEM, INCLUDING ANY CONTENT
//               ACQUIRED OR RENTED THROUGH THE SERVICES.
//             </Text>
//             <Text style={styles.text}>
//               INSPIRE11 IS NOT RESPONSIBLE FOR DATA CHARGES YOU MAY INCUR IN CONNECTION WITH YOUR USE OF THE SERVICES.
//             </Text>
//             <Text style={styles.subHeader}>h. Waiver & Indemnity</Text>
//             <Text style={styles.text}>
//               INSPIRE11 MOBILE APP T&C 6 BY USING THE SERVICES, YOU AGREE, TO THE EXTENT PERMITTED BY LAW, TO INDEMNIFY
//               AND HOLD INSPIRE11, ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, CONTRACTORS, AND LICENSORS
//               HARMLESS WITH RESPECT TO ANY CLAIMS ARISING OUT OF YOUR BREACH OF THIS AGREEMENT, YOUR USE OF THE
//               SERVICES, OR ANY ACTION TAKEN BY INSPIRE11 AS PART OF ITS INVESTIGATION OF A SUSPECTED VIOLATION OF THIS
//               AGREEMENT OR AS A RESULT OF ITS FINDING OR DECISION THAT A VIOLATION OF THIS AGREEMENT HAS OCCURRED. YOU
//               AGREE THAT YOU SHALL NOT SUE OR RECOVER ANY DAMAGES FROM INSPIRE11, ITS DIRECTORS, OFFICERS, EMPLOYEES,
//               AFFILIATES, AGENTS, CONTRACTORS, AND LICENSORS AS A RESULT OF ITS DECISION TO REMOVE OR REFUSE TO PROCESS
//               ANY INFORMATION OR CONTENT, TO WARN YOU, TO SUSPEND OR TERMINATE YOUR ACCESS TO THE SERVICES, OR TO TAKE
//               ANY OTHER ACTION DURING THE INVESTIGATION OF A SUSPECTED VIOLATION OR AS A RESULT OF INSPIRE11'S
//               CONCLUSION THAT A VIOLATION OF THIS AGREEMENT HAS OCCURRED. THIS WAIVER AND INDEMNITY PROVISION APPLIES TO
//               ALL VIOLATIONS DESCRIBED IN OR CONTEMPLATED BY THIS AGREEMENT.
//             </Text>
//             <Text style={styles.subHeader}>i. Statutory Exceptions for Public Institutions</Text>
//             <Text style={styles.text}>
//               If you are a qualified public educational or government institution and any part of this Agreement, such
//               as, by way of example, all or part of the indemnification section, is invalid or unenforceable against you
//               because of applicable local, national, state, or federal law, then that portion shall be deemed invalid or
//               unenforceable, as the case may be, and instead construed in a manner most consistent with applicable
//               governing law.
//             </Text>
//             <Text style={styles.subHeader}>j. Governing Law</Text>
//             <Text style={styles.text}>
//               Except to the extent expressly provided in the following paragraph, this Agreement and the relationship
//               between you and Inspire11, and all Transactions on the Services shall be governed by the laws of the State
//               of Illinois, excluding its conflicts of law provisions. You and Inspire11 agree to submit to the personal
//               and exclusive jurisdiction of the courts located within the county of Cook, Illinois, to resolve any
//               dispute or claim arising from this Agreement. If (a) you are not a U.S. citizen; (b) you do not reside in
//               the U.S.; or (c) you are not accessing the Service from the U.S., you hereby agree that any dispute or
//               claim arising from this Agreement shall be governed by the laws of the United Kingdom, without regard to
//               any conflict of law provisions, and you hereby irrevocably submit to the non-exclusive jurisdiction of the
//               courts located in the U.K. Specifically excluded from application to this Agreement is that law known as
//               the United Nations Convention on the International Sale of Goods.
//             </Text>
//             <Text style={styles.subHeader}>k. Other Provisions</Text>
//             <Text style={styles.text}>
//               This Agreement constitutes the entire agreement between you and Inspire11 and governs your use of the
//               Services, superseding any prior agreements with respect to the same subject matter between you and
//               Inspire11. You also may be subject to additional terms and conditions that may apply when you use
//               affiliate services, third-party content, third-party software, or additional services such as the Volume
//               Purchase Program. If any part of this Agreement is held invalid or unenforceable, that portion shall be
//               construed in a manner consistent with applicable law to reflect, as nearly as possible, the original
//               intentions of the parties, and the remaining portions shall remain in full force and effect. Inspire11's
//               failure to enforce any right or provisions in this Agreement will not constitute a waiver of such or any
//               other provision. Inspire11 will not be responsible for failures to fulfill any obligations due to causes
//               beyond its control.{" "}
//             </Text>
//             <Text style={styles.text}>
//               You agree to comply with all local, state, federal, and national laws, statutes, ordinances, and
//               regulations that apply to your use of the Services. Your use of the Services may also be subject to other
//               laws. Risk of loss for all electronically delivered Transactions pass to the acquirer upon electronic
//               transmission to the recipient. No Inspire11 employee or agent has the authority to vary this Agreement.
//             </Text>
//             <Text style={styles.text}>
//               Inspire11 may notify you with respect to the Services by sending an email message to your email address or
//               a letter via postal mail to your mailing address, or by a posting on the Services. Notices shall become
//               effective immediately. Inspire11 may also contact you by email or push notification to send you additional
//               information about the Services.
//             </Text>
//             <Text style={styles.text}>
//               You hereby grant Inspire11 the right to take steps Inspire11 believes are reasonably necessary or
//               appropriate to enforce and/or verify compliance with any part of this Agreement. You agree that Inspire11
//               has the right, without liability to you, to disclose any data and/or information to law enforcement
//               authorities, government officials, and/or a third party, as Inspire11 believes is reasonably necessary or
//               appropriate to enforce and/or verify compliance with any part of this Agreement (including but not limited
//               to Inspire11's right to cooperate with any legal process relating to your use of the Services and/or
//               Content, and/or a thirdparty claim that your use of the Services and/or Content is unlawful and/or
//               infringes such third party's rights).
//             </Text>
//             <Text style={styles.centeredHeader}>Exhibit A: Privacy Policy</Text>
//             <Text style={styles.subHeaderWithNumber}>1. Personal Data.</Text>
//             <Text style={styles.text}>
//               Inspire11 believes strongly in fundamental privacy rights — and that those fundamental rights should not
//               differ depending on where you live in the world. That’s why we treat any data that relates to an
//               identified or identifiable individual or that is linked or linkable to them by Inspire11 as “personal
//               data,” no matter where the individual lives. This means that data that directly identifies you — such as
//               your name — is personal data, and also data that does not directly identify you, but that can reasonably
//               be used to identify you — such as the serial number of your device — is personal data. Aggregated data is
//               considered non-personal data for the purposes of this Privacy Policy. This Privacy Policy covers how
//               Inspire11 handles personal data whether you interact with us on our websites, through our mobile
//               application, or in person.
//             </Text>
//             <Text style={styles.text}>
//               Please note that Inspire11 may link to third parties on our website or through our mobile application;
//               this Privacy Policy does not apply to how third parties define personal data or how they use it. We
//               encourage you to read their privacy policies and know your privacy rights before interacting with them.
//             </Text>
//             <Text style={styles.subHeaderWithNumber}>2. Your Privacy Rights at Inspire11.</Text>
//             <Text style={styles.text}>
//               At Inspire11, we respect your ability to know, access, correct, transfer, restrict the processing of, and
//               delete your personal data. If you choose to exercise these privacy rights, you will not be treated in a
//               discriminatory way nor will you receive a lesser degree of service from Inspire11. Inspire11 does not sell
//               your data.
//             </Text>
//             <Text style={styles.text}>
//               To help protect the security of your personal data, if you wish to restrict or delete your personal data,
//               you must first sign into your account and verify your identity. There may be situations where we cannot
//               grant your request — for example, if you ask us to delete your transaction data and Inspire11 is legally
//               obligated to keep a record of that transaction to comply with law. We may also decline to grant a request
//               if doing so would undermine our legitimate use of data for antifraud and security purposes, such as when
//               you request deletion of an account that is being investigated for security concerns. Other reasons your
//               privacy request may be denied are if it jeopardizes the privacy of others, is frivolous or vexatious, or
//               would be extremely impractical.
//             </Text>
//             <Text style={styles.subHeaderWithNumber}>3. Personal Data Inspire11 Collects from You.</Text>
//             <Text style={styles.text}>
//               At Inspire11, we strive to collect only the personal data that we need. The personal data Inspire11
//               collects depends on how you interact with Inspire11. When you contact Inspire11 seeking information,
//               create an account on the Inspire11 mobile application, or access third-party information through the
//               mobile application, we may collect a variety of information, including:
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Account Information.</Text>Your @inspire11.com email address and related
//               account details, including email address, devices registered, name, address, phone number, account status,
//               and age.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Device Information.</Text>Data from which your device could be
//               identified, such as device serial number, or about your device, such as browser type.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Contact Information.</Text>Data such as name, email address, physical
//               address, phone number, or other contact information.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Payment Information.</Text>Data about your billing address and method of
//               payment, such as bank details, credit, debit, or other payment card information.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Transaction Information.</Text>Data about purchases of Inspire11
//               products and services or transactions facilitated by Inspire11, including purchases on Inspire11 platforms
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Fraud Prevention Information.</Text>Data used to help identify and
//               prevent fraud, including a device trust score.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • Usage Data. Data about your activity on and use of our offerings, such as app launches within our
//               services, including browsing history; search history; product interaction; crash data, performance, and
//               other diagnostic data; and other usage data.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Other Information You Provide to Us.</Text>Details such as the content
//               of your communications with Inspire11, including interactions with customer support and contacts through
//               social media channels.{" "}
//             </Text>
//             <Text style={styles.text}>
//               You are not required to provide the personal data that we have requested. However, if you choose not to do
//               so, in many cases we will not be able to provide you with our products or services or respond to requests
//               you may have.
//             </Text>
//             <Text style={styles.subHeaderWithNumber}>4. Personal Data Inspire11 Receives from Other Sources.</Text>
//             <Text style={styles.text}>
//               Inspire11 may receive personal data about you from other individuals, from businesses or third parties
//               acting at your direction, from our partners who work with us to provide our products and services and
//               assist us in security and fraud prevention, and from other lawful sources, including:
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Individuals.</Text>Inspire11 may collect data about you from other
//               individuals — for example, if that individual invited you to participate in an Inspire11 service or forum,
//               or shared content with you.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>At Your Direction.</Text>You may direct other individuals or third
//               parties to share data with Inspire11. For example, you may direct your mobile carrier to share data about
//               your carrier account with Inspire11 for account activation.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Inspire11 Partners.</Text>We may also validate the information you
//               provide — for example, when creating an Inspire11 account, with a third party for security, and for
//               fraud-prevention purposes. For research and development purposes, we may use datasets such as those that
//               contain images, voices, or other data that could be associated with an identifiable person. When acquiring
//               such datasets, we do so in accordance with applicable law, including law in the jurisdiction in which the
//               dataset is hosted. When using such datasets for research and development, we do not attempt to reidentify
//               individuals who may appear therein.
//             </Text>
//             <Text style={styles.subHeaderWithNumber}>5. Inspire11’s Use of Personal Data.</Text>
//             <Text style={styles.text}>
//               Inspire11 uses personal data to power our services, to process your transactions, to communicate with you,
//               for security and fraud prevention, and to comply with law. We may also use personal data for other
//               purposes with your consent. Inspire11 uses your personal data only when we have a valid legal basis to do
//               so. Depending on the circumstance, Inspire11 may rely on your consent or the fact that the processing is
//               necessary to fulfill a contract with you, protect your vital interests or those of other persons, or to
//               comply with law. We may also process your personal data where we believe it is in our or others’
//               legitimate interests, taking into consideration your interests, rights, and expectations. If you have
//               questions about the legal basis, you can contact the Data Protection Officer at privacy@inspire11.com.
//               Inspire11 retains personal data only for so long as necessary to fulfill the purposes for which it was
//               collected, including as described in this Privacy Policy or as required by law. We will retain your
//               personal data for the period necessary to fulfill the purposes outlined in this Privacy Policy and our
//               service-specific privacy summaries. When assessing retention periods, we first carefully examine whether
//               it is necessary to retain the personal data collected and, if retention is required, work to retain the
//               personal data for the shortest possible period permissible under law.
//             </Text>
//             <Text style={styles.subHeaderWithNumber}>6. Inspire11’s Sharing of Personal Data.</Text>
//             <Text style={styles.text}>
//               Inspire11 may share personal data with service providers who act on our behalf, our partners, or others at
//               your direction. However, Inspire11 does not share personal data with third parties for their own marketing
//               purposes.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Service Providers.</Text>Inspire11 may engage third parties to act as
//               our service providers and perform certain tasks on our behalf, such as processing or storing data,
//               including personal data, in connection with your use of our services and delivering products to customers.
//               Inspire11 service providers are obligated to handle personal data consistent with this Privacy Policy and
//               according to our instructions. They cannot use the personal data we share for their own purposes and must
//               delete or return the personal data once they've fulfilled our request.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Partners.</Text>At times, Inspire11 may partner with third parties to
//               provide services or other offerings. Inspire11 requires its partners to protect your personal data.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Others.</Text>Inspire11 may share personal data with others at your
//               direction or with your consent, such as when we share information with your carrier to activate your
//               account. We may also disclose information about you if we determine that for purposes of national
//               security, law enforcement, fraud prevention, or other issues of public importance, disclosure is necessary
//               or appropriate. We may also disclose information about you where there is a lawful basis for doing so, if
//               we determine that disclosure is reasonably necessary to enforce our terms and conditions or to protect our
//               operations or users, or in the event of a reorganization, merger, or sale.
//             </Text>
//             <Text style={styles.subHeaderWithNumber}>7. Protection of Personal Data at Inspire11.</Text>
//             <Text style={styles.text}>
//               At Inspire11, we believe that great privacy rests on great security. We use administrative, technical, and
//               physical safeguards to protect your personal data, taking into account the nature of the personal data and
//               the processing, as well as the threats posed. We are constantly working to improve on these safeguards to
//               help keep your personal data secure.
//             </Text>
//             <Text style={styles.subHeaderWithNumber}>8. Cookies and Other Technologies.</Text>
//             <Text style={styles.text}>
//               Inspire11’s websites, online services, mobile applications, and advertisements may use “cookies” and other
//               technologies such as web beacons. These technologies help us to better understand user behavior including
//               for security and fraud prevention purposes, tell us which parts of our websites people have visited, and
//               facilitate and measure the effectiveness of advertisements and web searches.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Communications Cookies.</Text>These cookies are used to enable network
//               traffic to and from Inspire11’s systems, including by helping us detect any errors.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Strictly Necessary Cookies.</Text>These cookies are set as required to
//               provide a specific feature or service that you have accessed or requested. For example, they allow us to
//               display our websites in the proper format and language, to authenticate and verify your transactions, and
//               to preserve the contents of your Bag when shopping online at Inspire11.com.
//             </Text>
//             <Text style={[styles.text, styles.bulletPoints]}>
//               • <Text style={styles.italicText}>Other Cookies.</Text>These cookies are used to understand how visitors
//               interact with our websites and online services, including by helping us to assess the effectiveness of
//               advertisements and web searches. Inspire11 also uses these cookies to remember choices you make while
//               browsing, so we can provide you with a customized experience.
//             </Text>
//             <Text style={styles.text}>
//               Certain features of the Inspire11 website or app may not be available if all cookies are disabled. In
//               addition to cookies, Inspire11 uses other technologies that help us achieve similar objectives. In some
//               email messages Inspire11 sends to you, we provide a “click-through URL” that links you to content on the
//               Inspire11 website or app. When you click one of these URLs, they pass through a separate server before
//               arriving at the destination page. We track this click-through to help us determine interest in particular
//               topics and measure whether we are communicating with you effectively. If you prefer not to be tracked in
//               this way, you should not click graphic or text links in email messages. Inspire11 generally treats data we
//               collect using these cookies and similar technologies as nonpersonal data. However, to the extent that
//               Internet Protocol (IP) addresses or similar identifiers are considered personal data by local law, we also
//               treat these identifiers as personal data in those regions. In addition, Inspire11 sometimes combines
//               nonpersonal data collected from these technologies with other personal data Inspire11 holds. When we
//               combine data in this way, we treat the combined data as personal data for purposes of this Privacy Policy.
//             </Text>
//             <Text style={styles.subHeaderWithNumber}>9. Transfer of Personal Data Between Countries.</Text>
//             <Text style={styles.text}>
//               Inspire11 products and offerings connect you to the world. To make that possible, your personal data may
//               be transferred to or accessed by entities around the world. Inspire11 complies with laws on the transfer
//               of personal data between countries to help ensure your data is protected, wherever it may be. The
//               Inspire11 entity that controls your personal data may differ depending on where you live. For example, if
//               you are employed in Kosovo, Inspire11 shpk. will control and have access to your personal data. At this
//               time, Inspire11 does not transfer personal data within the European Economic Area, nor in participating
//               Asia-Pacific Economic Cooperation countries and therefore, does not comply with either the GPR or APEC
//               CBPR.
//             </Text>
//             <Text style={styles.subHeaderWithNumber}>10. Our Companywide Commitment to Your Privacy.</Text>
//             <Text style={styles.text}>
//               To make sure your personal data is secure, we communicate our privacy and security guidelines to Inspire11
//               employees and strictly enforce privacy safeguards within the company. If you have questions about
//               Inspire11’s Privacy Policy or privacy practices, would like to contact our Data Protection Officer, or
//               would like to submit a complaint, you can contact us at privacy@inspire11.com. You can also ask us
//               questions about how to submit a privacy complaint and we will endeavor to help. Inspire11 takes your
//               privacy questions seriously. A dedicated team reviews your inquiry to determine how best to respond to
//               your question or concern, including those inquiries received in response to an access or download request.
//               In most cases, all substantive contacts receive a response within seven days. In other cases, we may
//               require additional information or let you know that we need more time to respond. Where your complaint
//               indicates an improvement could be made in our handling of privacy issues, we will take steps to make such
//               an update at the next reasonable opportunity. In the event that a privacy issue has resulted in a negative
//               impact on you or another person, we will take steps to address that with you or that other person. If you
//               are not satisfied with Inspire11’s response, you may refer your complaint to the applicable regulator. If
//               you ask us, we will endeavor to provide you with information about relevant complaint avenues which may be
//               applicable to your circumstances. When there is a material change to this Privacy Policy, we’ll post a
//               notice at least a week in advance of doing so and contact you directly about the change if we have your
//               data on file.
//             </Text>
//           </ScrollView>
//           <View style={styles.scrollBar}>
//             <Animated.View
//               style={[
//                 styles.scrollIndicator,
//                 {
//                   height: scrollIndicatorSize,
//                   transform: [{ translateY: scrollIndicatorPosition }],
//                 },
//               ]}
//             />
//           </View>
//         </View>
//       </View>
//       <View>
//         <CustomButton
//           title="Accept"
//           onPress={() => !disabledButton && handleAgree()}
//           color={disabledButton ? COLORS.GREY : COLORS.BLUE}
//         ></CustomButton>
//         <CustomButton title="Cancel" color={COLORS.DARK_BLUE} onPress={() => handleDisagree()}></CustomButton>
//       </View>
//     </SafeAreaProvider>
//   );
// };

// export default TermsAndConditions;


import React, { useContext, useEffect, useRef, useState } from "react";
import { View } from "react-native";
//import { GraphqlClientContext } from "../../contexts/GraphqlClientContext";
import Container from "../../components/container/Container";
import styles from "./styles/Terms.styles";

const TermsAndConditions = () => {
  //const client = useContext(GraphqlClientContext);

  return (
    <Container style={styles.container}>
      <View><>"Hello"</></View>
    </Container>
  );
};
export default TermsAndConditions;
