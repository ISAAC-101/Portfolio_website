 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAsiCPWg1a96Hlu0xAG4-hUcp3vG744ybc",
    authDomain: "portfolio-website-959dd.firebaseapp.com",
    projectId: "portfolio-website-959dd",
    storageBucket: "portfolio-website-959dd.firebasestorage.app",
    messagingSenderId: "525423803639",
    appId: "1:525423803639:web:5e9227af5703809bcd27f2",
    measurementId: "G-KDWTFEME5Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);