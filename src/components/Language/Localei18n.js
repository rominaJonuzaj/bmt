import { NativeModules, Platform } from 'react-native'
import { I18n } from '@aws-amplify/core'

let langRegionLocale = 'en_US'

// If we have an Android phone
if (Platform.OS === 'android') {
  langRegionLocale = NativeModules.I18nManager.localeIdentifier || ''
} else if (Platform.OS === 'ios') {
  langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || ''
}

const authScreenLabels = {
    en: {
      'Sign Up': 'Create new account',
      'Sign Up Account': 'Create a new account'
    },
    sq: {
      'Sign Up': 'Regjistrohu',
      'Forgot Password': 'Harruat Fjalëkalimin?',
      'Sign In Account': 'Hyni në llogarinë tuaj',
      'Enter your email': 'Shënoni Email',
      'Enter your password': 'Shënoni Fjalëkalimin',
      'Password': 'Fjalëklaim',
      'Sign In': 'Hyni',
      'Please Sign In / Sign Up': 'Ju Lutem Hyni/Regjistorhuni',
      'Sign in to your account': 'Hyni në llogarinë tuaj',
      'Create a new account': 'Krijoni një llogari',
      'Confirm a Code': 'Konfirmoni Kodin',
      'Confirm Sign Up': 'Konfirmoni Regjistrimin',
      'Resend code': 'Ridërgo Kodin',
      'Back to Sign In': 'Kthehuni në Sign In',
      'Confirm': 'Konfirmo',
      'Confirmation Code': 'Kodi për konfirmim',
      'Sign Out': 'Dil',
      'Username': 'Emri i përdoruesit',
      'Enter your username': 'Shënoni emrin e përdoruesit',
      'Username cannot be empty': 'Emri i përdoruesit nuk mund të jetë bosh',
      'Phone Number': 'Numri i Telefonit',
      'Send': 'Dërgo',
      'Reset your password': 'Rikrijoni fjalëkalimin'
    }
  }
  
  // "en_US" -> "en", "es_CL" -> "es", etc
  const languageLocale = langRegionLocale.substring(0, 2)
  I18n.setLanguage(languageLocale)
  I18n.putVocabularies(authScreenLabels)

const Localei18n = () => null

export default Localei18n;