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
const db = firebase.firestore(); // Firestore for storing user data

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById("full-name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;

    // Signup user
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Save extra data to Firestore
            return db.collection("users").doc(user.uid).set({
                fullName: fullName,
                username: username,
                email: email,
                phone: phone,
                dob: dob,
                address: address,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            alert("Signup successful! Redirecting to login...");
            window.location.href = "login.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});
