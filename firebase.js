// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv3FNbG1CZqd_GASUUYsmhKsMKm-GlkSA",
  authDomain: "blog-websitev2.firebaseapp.com",
  projectId: "blog-websitev2",
  storageBucket: "blog-websitev2.appspot.com",
  messagingSenderId: "706773548828",
  appId: "1:706773548828:web:03b8d7b60a6ec3edc004d9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

let a = "";

function getData() {
  console.log("get");
  return new Promise(function(resolve) {
    getDocs(collection(db, "posts"))
      .then((snapshot) => {
        let data = [];
        snapshot.docs.forEach((doc) => {
          data.push({...doc.data(), id: doc.id});
        })
        printData(data);
      })
      .catch(err => {
        console.log(err.message);
      })
  });
}

function printData(inp) {
  console.log("print");
  return new Promise(function(resolve) {
    for (let i in inp) {
      for (let j = 0; j < Object.keys(inp[i]).length; j++)
      {
        console.log(Object.values(inp[i])[j]);
      }
    }
    a = Object.values(inp[0])[0];
    console.log(a);
  });
}

function processData(inp) {
  console.log("process");
  console.log(a);
}

// current problem: async calls to firebase, I need to change the Promise functions so that the main function executes in order
// processData function is never executed for some reason

async function main() {
  await getData();
  await processData(a);
  console.log("wow");
}

main()
