// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOYMVxySSSoSD0XqmadzzFedU1jjkJV6E",
    authDomain: "saikrishna-e2c71.firebaseapp.com",
    databaseURL: "https://saikrishna-e2c71-default-rtdb.firebaseio.com",
    projectId: "saikrishna-e2c71",
    storageBucket: "saikrishna-e2c71.firebasestorage.app",
    messagingSenderId: "136963885829",
    appId: "1:136963885829:web:ea4476388c19a37795c56c",
    measurementId: "G-52WNM7FWZW"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful! Redirecting...");
            window.location.href = "dashboard.html"; // Change this to your dashboard or homepage
        })
        .catch((error) => {
            alert(error.message);
        });
});
