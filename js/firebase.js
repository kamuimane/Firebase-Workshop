import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ####################################################################
// ||                                                                ||
// ||                      Firebase Goes Below                       ||
// ||                                                                ||
// ####################################################################
const firebaseConfig = {
  apiKey: "AIzaSyDHrXzEOV1DzOBBLTeP3fc5AlBN0cK0cOc",
  authDomain: "hackutd-fb-workshop.firebaseapp.com",
  projectId: "hackutd-fb-workshop",
  storageBucket: "hackutd-fb-workshop.appspot.com",
  messagingSenderId: "834761453926",
  appId: "1:834761453926:web:b77b2240d1e511b31658a7",
  measurementId: "G-MNLBFREDFC"
};
// ####################################################################
// ||                                                                ||
// ||                      Firebase Goes Above                       ||
// ||                                                                ||
// ####################################################################
let db = null;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch {
  console.error('Failed to initialize Firebase.');
}

export default db;
