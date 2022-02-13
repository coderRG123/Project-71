import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB-HLHRorYS2i-3ifcaOdqlHA89VPkidRs",
    authDomain: "project-71-d128d.firebaseapp.com",
    projectId: "project-71-d128d",
    storageBucket: "project-71-d128d.appspot.com",
    messagingSenderId: "245237027686",
    appId: "1:245237027686:web:18a41302850b4d6f20eea7"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
