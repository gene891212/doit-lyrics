import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { initializeFirestore, memoryLocalCache, persistentLocalCache } from 'firebase/firestore'

// // blog-db903
// const firebaseConfig = {
//   apiKey: "AIzaSyD43JJNR2N3jpFVkhSJPIwX5LOYl9gvkJc",
//   authDomain: "blog-db903.firebaseapp.com",
//   databaseURL: "https://blog-db903-default-rtdb.firebaseio.com",
//   projectId: "blog-db903",
//   storageBucket: "blog-db903.appspot.com",
//   messagingSenderId: "462047592288",
//   appId: "1:462047592288:web:887b0e53070a0b32e92805",
//   measurementId: "G-GMV4370K96"
// };

// song-lyrics-29f0c
const firebaseConfig = {
  apiKey: 'AIzaSyBDvuCqnWr0d3QX7bOmkBlM5dIFmmAAL6c',
  authDomain: 'song-lyrics-29f0c.firebaseapp.com',
  projectId: 'song-lyrics-29f0c',
  storageBucket: 'song-lyrics-29f0c.appspot.com',
  messagingSenderId: '581822410871',
  appId: '1:581822410871:web:9262efbfcccbc92e5bd672',
  measurementId: 'G-WZKND2ED1H'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

// using memoryLocalCache
// const db = initializeFirestore(app, {localCache: persistentLocalCache({})});

console.log('Firebase initialized')
export default db
