var firebaseConfig = {
    apiKey: "AIzaSyD06h7x1ezE8GNG2Pv3L9i1zU7tQtiWVTk",
    authDomain: "ramco-1057d.firebaseapp.com",
    databaseURL: "https://ramco-1057d.firebaseio.com",
    projectId: "ramco-1057d",
    storageBucket: "",
    messagingSenderId: "303732437138",
    appId: "1:303732437138:web:1f04cd6c151f40bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('myDatabase');

  function submitForm(){
     
      var name = document.getElementById('name').value
      var email = document.getElementById('e-mail').value
      var track = document.getElementById('track').value
      var number = document.getElementById('number').value
      saveMessage(name,email,track,number);

  }
  document.getElementById('submit-button').addEventListener('submit' , submitForm);
  function saveMessage(name,email,track,number){
      newMessageRef = messagesRef.push();
newMessageRef.set({
    name: name,
    email: email,
    track: track,
    number: number,
});
  }
