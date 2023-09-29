import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB475Hmyex4_a61aQ3c-54v3LzLQ5WFlDo",
  authDomain: "hiprint-33962.firebaseapp.com",
  projectId: "hiprint-33962",
  storageBucket: "hiprint-33962.appspot.com",
  messagingSenderId: "837001911569",
  appId: "1:837001911569:web:96c6fbeed76a3e8fa700b0",
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
