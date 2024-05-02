// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-1-e2bed.firebaseapp.com",
  projectId: "insta-next-1-e2bed",
  storageBucket: "insta-next-1-e2bed.appspot.com",
  messagingSenderId: "226799240087",
  appId: "1:226799240087:web:9d8459fbb378d533467ad2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read;
//         allow write: if
//         request.resource.size < 2 *1024 *1024 &&
//         request.resource.contentType.matches('image/.*')
//       }
//     }
//   }