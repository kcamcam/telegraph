

var message = "";
$(window).keypress(function(e) {
    console.log(e.which);
    if (e.which === 32) {//space pressed
      message = message + "-";
      document.getElementById("input").innerHTML = message;
    }
    else if (e.which === 46) {//. pressed
      message = message + ".";
      document.getElementById("input").innerHTML = message;
    }
    else if (e.which === 47) {//n pressed
      message = message + '&nbsp;';
      document.getElementById("input").innerHTML = message;
    }
});

// var starttime;
// var curKey;
// // $('#seconds-counter').keydown(function(e) {
//   if (curKey != e.which) {
//     var d = new Date();
//     starttime = d.getTime();
//     $('#down-time').text(starttime);
//     curKey = e.which;
//   }
// });
// $('#seconds-counter').keyup(function() {
//   var d = new Date();
//   var endTime = d.getTime();
//   $('#up-time').text(endTime);
//   var timeTaken = endTime - starttime;
//   $('#result-val').text(timeTaken / 1000);
//   curKey = null;
// });

// https://stackoverflow.com/questions/25134224/how-to-detect-a-key-pressed-for-x-seconds-in-javascript
// $(function(){
//     var keyDownArray = {};
//     var triggerTime = 3000; // number of ms to trigger function at
//
//     var keyDownEvent = function(e){
//         // use the event keyCode as a unique identifier
//         if(!(e.keyCode in keyDownArray) ){
//             // use the event keyCode as a unique identifier
//             // use setTimeout to make sure trigger only occurs once
//             keyDownArray[e.keyCode] = setTimeout(function(){
//                 // call your function here (can pass in e.keyCode if function requires custom functions on a per key basis)
//                 console.log('triggered for key '+e.keyCode);
//             }, triggerTime);
//         }
//     }
//
//     var keyUpEvent = function(e){
//         // on key release, clearTimeout and delete object key
//         clearTimeout(keyDownArray[e.keyCode]);
//         delete keyDownArray[e.keyCode];
//     };
//
//     $(document).on('keydown', keyDownEvent)
//         .on('keyup', keyUpEvent);
// });
