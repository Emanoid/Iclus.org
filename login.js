  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAjH6aHXxSNdup7AKYKj64lrIMuy2M3aaI",
    authDomain: "powerministries-fa0ed.firebaseapp.com",
    databaseURL: "https://powerministries-fa0ed.firebaseio.com",
    projectId: "powerministries-fa0ed",
    storageBucket: "powerministries-fa0ed.appspot.com",
    messagingSenderId: "903607742976",
    appId: "1:903607742976:web:2ee914fb400f621c67dee5",
    measurementId: "G-W28R2F8ELR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

    const auth = firebase.auth();

    function signIn(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

        auth.onAuthStateChanged(function(user) {
            if(user){
                window.location = "video.html"

            }
        });
    }

    function signOut(){
        auth.signOut();
        window.location = "login.html"                  
    }

    

  
