
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage"


var firebaseConfig = {
    apiKey: "AIzaSyCHjqU54mNS3OrIAZ7XqbPYfZv7NNBRu7M",
    authDomain: "myolx-2bcf7.firebaseapp.com",
    databaseURL: "https://myolx-2bcf7.firebaseio.com",
    projectId: "myolx-2bcf7",
    storageBucket: "myolx-2bcf7.appspot.com",
    messagingSenderId: "674243758800",
    appId: "1:674243758800:web:3aab079fa8490962cdecd5"
  };

  var fire = firebase.initializeApp(firebaseConfig);
  console.log(fire);


export default fire;