function speedDetector(speed){
    //initializing the value of speed
    //initializing the speed limit
    const speedLimit=70;
    //intializing our points as diff
    let diff=(speed-speedLimit)/5;
    //the statement to give the required output according to the condition met 
    if (speed<=speedLimit){
        return "OK";
    }
    else if(speed>speedLimit && diff<=11){
         return diff;
    }
       else //if (diff>=12){
        return "License Suspended.";
   // }
    }
   speedDetector()