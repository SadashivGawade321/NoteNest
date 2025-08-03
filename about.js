const firebaseConfig = {
  apiKey: "AIzaSyC6AVQvJP9zGI3th91S12sRY5aX_FRdIOU",
  authDomain: "notenest-251ba.firebaseapp.com",
  projectId: "notenest-251ba",
  storageBucket: "notenest-251ba.appspot.com", // fixed here
  messagingSenderId: "23566026463",
  appId: "1:23566026463:web:205bfb04646e4c472a8b6a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Now you can use firebase.firestore() and firebase.auth()
const db = firebase.firestore();
const auth = firebase.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}