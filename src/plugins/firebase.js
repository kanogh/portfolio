import { initializeApp } from "firebase/app";
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyAAT5OKp3GW5j9IRPBr2uDJ_qq804lLPa8",
  authDomain: "portfolio-f3d60.firebaseapp.com",
  projectId: "portfolio-f3d60",
  storageBucket: "portfolio-f3d60.appspot.com",
  messagingSenderId: "548160958268",
  appId: "1:548160958268:web:c23bbcd9bb3c23f39f3839",
  measurementId: "G-ZVXFW9W4LL"
};

const firebaseApp = initializeApp(firebaseConfig);
const functions = getFunctions(firebaseApp);

export {functions}