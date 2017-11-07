<script src="https://www.gstatic.com/firebasejs/4.6.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJl660a3OBYiDsXGpdsJIDhA6Hwle3Bhk",
    authDomain: "trainproject-6ca99.firebaseapp.com",
    databaseURL: "https://trainproject-6ca99.firebaseio.com",
    projectId: "trainproject-6ca99",
    storageBucket: "trainproject-6ca99.appspot.com",
    messagingSenderId: "709804667961"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var destination = "";
  var time = 0;
  var frequency = 0;

  $("#add-schedule").on("click", function() {
  event.preventDefault();

  name = $("#name-input").val();
  destination = $("#dest-input").val();
  time = $("#time-input").val();
  frequency = $("#freq-input").val();

  database.ref().set({
    name: name,
    destination: destination,
    time: time,
    frequency: frequency,
     });
  });

  database.ref().on("value", function(snapshot) {
  	      console.log(snapshot.val());
  }







</script>