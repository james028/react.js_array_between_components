import Rebase from "re-base";
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZDMngzdRJ51RqLVtGOyhGrF7DCCIR_Qg",
  authDomain: "array-rents.firebaseapp.com",
  databaseURL: "https://array-rents.firebaseio.com",
  projectId: "array-rents",
  storageBucket: "array-rents.appspot.com",
  messagingSenderId: "166654776183"
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
