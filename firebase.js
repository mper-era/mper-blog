import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQxcyHvvWeNffjqMPtWX57KXqStlOQHrg",
  authDomain: "blog-website-2a22d.firebaseapp.com",
  projectId: "blog-website-2a22d",
  storageBucket: "blog-website-2a22d.appspot.com",
  messagingSenderId: "686020065417",
  appId: "1:686020065417:web:19150be5fffd4134866e58",
};

const app = initializeApp(firebaseConfig);
let db = firebase.firestore();