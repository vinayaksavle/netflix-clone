import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Uncomment this while seeding data i.e, inserting data
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAc8-e8kFj_yOj20oFmVao_08NK-n-xGiQ",
    authDomain: "netflix-clone-88c67.firebaseapp.com",
    databaseURL: "https://netflix-clone-88c67.firebaseio.com",
    projectId: "netflix-clone-88c67",
    storageBucket: "netflix-clone-88c67.appspot.com",
    messagingSenderId: "528070590746",
    appId: "1:528070590746:web:5c52eb063543aa465eaca3"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };