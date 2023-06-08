import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzwcvWqRYKKVYdKOMs3UVd_Rl1kKzzZoQ",
  authDomain: "eride-3098b.firebaseapp.com",
  projectId: "eride-3098b",
  storageBucket: "eride-3098b.appspot.com",
  messagingSenderId: "265434274831",
  appId: "1:265434274831:web:1ace6ae9f0526831f4977a"
};

if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
