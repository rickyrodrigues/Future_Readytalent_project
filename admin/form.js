import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// //</script> replace the needed info in this code from 
// apiKey: "AIzaSyBH8fy_eGoIU6IEFsaauVyBk2CCLg5mveY", 
// authDomain: "my-portfilio-77731.firebaseapp.com", 
// databaseURL: "https://my-portfilio-77731-default-rtdb.firebaseio.com",
//  projectId: "my-portfilio-77731", 
//  storageBucket: "my-portfilio-77731.appspot.com", 
//  messagingSenderId: "557344904777", 
//  appId: "1:557344904777:web:421edd9e28c361ca7a1198",
//   measurementId: "G-2YELZEX95E" };
// //
// //
 const firebaseConfig = {
  apiKey: "AIzaSyDChHkImaXs6NdEEMTa1hhdI8dgakdo0fw",
  authDomain: "amy--87863.firebaseapp.com",
  projectId: "amy--87863",
  storageBucket: "amy--87863.appspot.com",
  messagingSenderId: "90163706875",
  appId: "1:90163706875:web:b0966e1c4c5871dcf6a95e"
 };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


  document.getElementById("reg-btn").addEventListener('click', function(){
   document.getElementById("register-div").style.display="inline";
   document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
 document.getElementById("register-div").style.display="none";
 document.getElementById("login-div").style.display="inline";

});

  document.getElementById("login-btn").addEventListener('click', function(){
   const loginEmail= document.getElementById("login-email").value;
   const loginPassword =document.getElementById("login-password").value;

  //  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  // .then((userCredential) => {
  //   const user = userCredential.user;
  //   document.getElementById("result-box").style.display="inline";
  //    document.getElementById("login-div").style.display="none";
  //    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
  // })
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
    // Redirect the user to `C:\Users\Asus\OneDrive\Documents\miniproject\presentation\student\studentpages.html`
    window.location.href = "admin.html";
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


  document.getElementById("register-btn").addEventListener('click', function(){

   const registerEmail= document.getElementById("register-email").value;
   const registerPassword =document.getElementById("register-password").value;

   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
    // Add the role of student to the user
    user.updateProfile({
      "role": "student"
    });
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;

  });
});


document.getElementById("log-out-btn").addEventListener('click', function(){
  signOut(auth).then(() => {
     document.getElementById("result-box").style.display="none";
       document.getElementById("login-div").style.display="inline";
  }).catch((error) => {
     document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });

});
