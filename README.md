# CRUD-Ract-Native-expo
CRUD Ract Native using expo

Install dependecy...

npm install react-navigation
npm install react-native-reanimated react-native-gesture-handler --save
npm install react-navigation-stack
npm install react-navigation-tabs
npm install react-redux
npm install redux
npm install redux-thunk


Inform yours credencial firebase

import * as firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "---------------",
    authDomain: "------------",
    databaseURL: "-------------",
    projectId: "----------------",
    storageBucket: "--------------",
    messagingSenderId: "--------------",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
