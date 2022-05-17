import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvReNdp7BwDEpI4i-AIl1It3adzkHO7kk",
  authDomain: "testing-form-faf9f.firebaseapp.com",
  databaseURL: "https://testing-form-faf9f-default-rtdb.firebaseio.com",
  projectId: "testing-form-faf9f",
  storageBucket: "testing-form-faf9f.appspot.com",
  messagingSenderId: "920305477671",
  appId: "1:920305477671:web:8a0647b2b1000b04d60602"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
export { db };
