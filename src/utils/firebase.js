// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU5R0H2w0wYZEYLP-3bfDpVCVrMLls74k",
  authDomain: "netfilx-67627.firebaseapp.com",
  projectId: "netfilx-67627",
  storageBucket: "netfilx-67627.appspot.com",
  messagingSenderId: "346710677627",
  appId: "1:346710677627:web:d023b7423089db8e9d2ade",
  measurementId: "G-G9Q4WE6H75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);