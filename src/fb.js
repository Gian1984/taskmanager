 import firebase from 'firebase/app'
 import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyAPgBI6vIBVLCbDYAcMkVOYADtxaz-HVl4",
     authDomain: "taskmanager-c37c4.firebaseapp.com",
     projectId: "taskmanager-c37c4",
     storageBucket: "taskmanager-c37c4.appspot.com",
     messagingSenderId: "811318649444",
     appId: "1:811318649444:web:fe2f9d6d137e4e0eba3571"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();

 db.settings({ timestampsInSnapshots: true });

 export default db;