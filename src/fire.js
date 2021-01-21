import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyBXmmxUnbWuEJ3IMsdBJ81MSil91X_sRtk",
    authDomain: "exodus-db491.firebaseapp.com",
    projectId: "exodus-db491",
    storageBucket: "exodus-db491.appspot.com",
    messagingSenderId: "351726171465",
    appId: "1:351726171465:web:24ee02fcc6fe303abf5698",
    measurementId: "G-BGQYYB6VVT"
};
var fire = firebase.initializeApp(config);
//firebase.analytics();
export default fire;