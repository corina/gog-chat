import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCvPj0xsjTNLrfgp3ldqL2KvrH-ktIHdmc",
  authDomain: "gog-chat.firebaseapp.com",
  databaseURL: "https://gog-chat.firebaseio.com",
  projectId: "gog-chat",
  storageBucket: "",
  messagingSenderId: "912021152663"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export default firebase;
