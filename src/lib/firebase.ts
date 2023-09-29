import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCxrQtsVhb52DopFG1is-dr4OkOla3yLfQ",
  authDomain: "personili.firebaseapp.com",
  projectId: "personili",
  storageBucket: "personili.appspot.com",
  messagingSenderId: "394619137964",
  appId: "1:394619137964:web:08fc828de3a5aa03279409",
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
