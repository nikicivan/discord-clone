import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTKwIC7Bt6aJFHCh4mX4vhF5TdQKBiJUM",
  authDomain: "discord-clone-4879c.firebaseapp.com",
  databaseURL: "https://discord-clone-4879c.firebaseio.com",
  projectId: "discord-clone-4879c",
  storageBucket: "discord-clone-4879c.appspot.com",
  messagingSenderId: "559557227575",
  appId: "1:559557227575:web:5c994b0b09983923a13bb2",
  measurementId: "G-16ND59HZ32",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
