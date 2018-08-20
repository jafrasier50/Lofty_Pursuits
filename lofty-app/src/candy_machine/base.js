import Rebase from 're-base';
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqbQQ02427xp603TDLvdo3KKQRnOaVxAs",
    authDomain: "catch-of-the-day-frasier.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-frasier.firebaseio.com",
  });

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;