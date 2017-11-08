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

   $("#add-schedule").on("click", function() {

      event.preventDefault();

  
   console.log($("#name-input").val());
   console.log($("#dest-input").val());
   console.log($("#time-input").val());
   console.log($("#freq-input").val());



        database.ref().push({

        name: $("#name-input").val(),
        destination: $("#dest-input").val(),
        time: $("#time-input").val(),
        frequency: $("#freq-input").val(),

      });
     });



 // var refs = firebase.database().ref('post-comments/' + postId);
database.ref().on('child_added', function(data) {

 var td1 = $("<td>");
 td1.attr("id", "tdName");

 var td2 = $("<td>");
 td2.attr("id", "tdDest");
 var td3 = $("<td>");
 td3.attr("id", "tdFrequency");
 var td4 = $("<td>");
 td4.attr("id", "tdNext");
 var td5 = $("<td>");
 td5.attr("id", "tdMinutes");

// data.forEach(function(childSnapshot){
console.log(data.val().name);
console.log(data.val().destination);
console.log(data.val().frequency);
// console.log(data.val().next);
// console.log(data.val().minutes);
  var trs = $("<tr>");

td1.append(data.val().name);
td2.append(data.val().destination);
td3.append(data.val().frequency);
// td5.append(data.val().next);
// td6.append(data.val().minutes);
trs.append(td1, td2, td3, td4, td5);
$(".table").append(trs);


// var d = new Date();

// var month = d.getMonth()+1;
// var year = d.getFullYear();

// var currentdate = data.val().date;

// currentdate = currentdate.split("-");
// console.log(currentdate);
// // currentdate.indexOf(0);

// console.log(currentdate[0]);
// console.log(currentdate[1]);

// console.log(data.val().date);


});


// function maths (startdate){

//   var d = new Date();

// var month = d.getMonth()+1;
// var year = d.getFullYear();
// console.log(month, year);
// var startdate = startdate.split("-");
// console.log(parseInt(startdate[0]));
// var totalmonth = (parseInt(startdate[0]) - year)*12 + (parseInt(startdate[0]) - month);
// return totalmonth;


// }

//  console.log(maths());
//=======================================================//
  // $("#add-schedule").on("click", function() {
  // event.preventDefault();

  // name = $("#name-input").val();
  // destination = $("#dest-input").val();
  // time = $("#time-input").val();
  // frequency = $("#freq-input").val();

  // database.ref().push({
  //   name: $("#name-input").val()
  //   destination: $("#dest-input").val(),
  //   time: $("#time-input").val(),
  //   frequency: $("#freq-input").val(),
  //    });
  // });

  // database.ref().on("value", function(snapshot) {
  // 	  console.log(snapshot.val());

  // 	  console.log(snapshot.val().name);
  //     console.log(snapshot.val().destination);
  //     console.log(snapshot.val().time);
  //     console.log(snapshot.val().frequency);

  // // $("#trainScheduleList").text(snapshot.val().name + " | " + snapshot.val().destination + " | " + snapshot.val().time + " | " + snapshot.val().frequency);

  //     }, function(errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  // });