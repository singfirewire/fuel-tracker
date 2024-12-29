import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA5c5nHaw6s1X1quiybFD_zq7vB4t1fIVQ",
    authDomain: "eventcost-pro.firebaseapp.com",
    databaseURL: "https://eventcost-pro-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "eventcost-pro",
    storageBucket: "eventcost-pro.appspot.com",
    messagingSenderId: "114353067568",
    appId: "1:114353067568:web:5d7105775cf6a15de8bffs"
};

const app = initializeApp(firebaseConfig);
export default app;
