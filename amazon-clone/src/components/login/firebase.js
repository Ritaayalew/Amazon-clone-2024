// // Import the functions you need from the SDKs you need
// import firebase from 'firebase';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAlhHuRW5HeAM3gWXqLwXImu4jIWOi0aUY",
//     authDomain: "novemb-f2496.firebaseapp.com",
//     projectId: "novemb-f2496",
//     storageBucket: "novemb-f2496.firebaseapp.com",
//     messagingSenderId: "12808516494",
//     appId: "1:12808516494:web:89b821982ce743a61f2adf",
//     measurementId: "G-DYMN9L8CDV"
// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// console.log("hello");
// console.log(firebaseApp);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };





// // import { initializeApp } from 'firebase/app';
// // import { getFirestore } from 'firebase/firestore';
// // import { getAuth } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlhHuRW5HeAM3gWXqLwXImu4jIWOi0aUY",
    authDomain: "novemb-f2496.firebaseapp.com",
    projectId: "novemb-f2496",
    storageBucket: "novemb-f2496.appspot.com",
    messagingSenderId: "12808516494",
    appId: "1:12808516494:web:89b821982ce743a61f2adf",
    measurementId: "G-DYMN9L8CDV"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

console.log(firebaseApp); // This should log the initialized Firebase app
console.log('Firestore DB:', db);

export { db, auth };
