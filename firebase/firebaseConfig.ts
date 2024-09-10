import { ReactNativeFirebase, initializeApp } from '@react-native-firebase/app';
import auth from '../node_modules/@react-native-firebase/auth'
// Your Firebase configuration object
const firebaseConfig = {
    apiKey: 'AIzaSyAqoBCaHY-WwGdg3uX_VC8VyvawKNMpHB8',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'rn-social-app-14ed5',
    // storageBucket: 'YOUR_STORAGE_BUCKET',
    // messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: '1:615869232290:android:d91efa7a9c4554ba3213fb',
};

// Initialize Firebase
const firebaseApp: ReactNativeFirebase.FirebaseApp = initializeApp(firebaseConfig);

export { firebaseApp, auth };
