var firstTransmission = true;
var message = "";
Pressure.set('#morseButon', {
  start: function(event){
    start = new Date();
    if(!firstTransmission){
      timePassed = ( start - end ) / 1000;
      if(timePassed >= 5){
        message = message + '&nbsp;';
        document.getElementById("input").innerHTML = message;
      }
    }
  },
  end: function(){
    end = new Date();
    firstTransmission = false;
    elapsed = ( end - start ) / 1000 ;
    if(elapsed >= 0.5){
      message = message + "-";
      document.getElementById("input").innerHTML = message;
    }
    else if(elapsed < 0.5){
      message = message + ".";
      document.getElementById("input").innerHTML = message;
    }
  }
});
