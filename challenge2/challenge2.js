function speedDetector(){
    //initializing the value of speed
    let speed=120
    //initializing the speed limit
    const speedLimit=70;
    //intializing our points as diff
    let diff=(speed-speedLimit)/5;
    //the statement to give the required output according to the condition met 
    if (speed<=speedLimit){
        console.log( "OK");
    }
    else if(speed>speedLimit){
         console.log(diff);
    }
    else if (diff>=12){
        console.log("License Suspended.");
    }
    }
    speedDetector()