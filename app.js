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

  
   // console.log($("#name-input").val());
   // console.log($("#dest-input").val());
   // console.log($("#time-input").val());
   // console.log($("#freq-input").val());



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

// console.log(data.val().next);
// console.log(data.val().minutes);
  var trs = $("<tr>");
var nextArr = getNextArrival(data.val().frequency, data.val().time)
var minsAway = minutesAway(nextArr);


td1.append(data.val().name);
td2.append(data.val().destination);
td3.append(data.val().frequency);
td4.append(nextArr);
td5.append(minsAway);
trs.append(td1, td2, td3, td4, td5);
$(".table").append(trs);




});

    function getNextArrival(freq, strtTime){
        var currentTime = moment().unix();
        var startTime = moment(strtTime, "HH:mm").unix();

        while (startTime < currentTime){
            startTime = moment.unix(startTime).add(freq, 'm').unix();
        }
        return moment.unix(startTime).format("HH:mm")
    }
    function minutesAway(nextArrival){
        var currentTime = moment().unix();
        //return moment().subtract(nextArrival, 'h')
        return moment(nextArrival, "HH:mm").subtract(currentTime, 's').format("mm");
    }
