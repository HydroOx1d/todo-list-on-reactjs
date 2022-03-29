import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyACpBoj1vF8t_rJvMvuo4InyTMQ4KsV6cU",
  authDomain: "todo-in-react-21a68.firebaseapp.com",
  databaseURL: 'https://todo-in-react-21a68-default-rtdb.firebaseio.com/',
  projectId: "todo-in-react-21a68",
  storageBucket: "todo-in-react-21a68.appspot.com",
  messagingSenderId: "695457836653",
  appId: "1:695457836653:web:fb6ce4ee669fd2d0501964",
};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const database = getDatabase(app)