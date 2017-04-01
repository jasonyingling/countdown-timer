function setTimer () {
	var currentTime = new Date();
	//console.log(currentTime);
	var countdownTime = Date.parse("April 1, 2013 21:10:00");
	//console.log(countdownTime);
	var countdownTotal = countdownTime - currentTime;
	//console.log(countdownTotal);
	
	var days  = Math.floor( countdownTotal / (1000*60*60*24) );
    var hours = Math.floor( countdownTotal / (1000*60*60) );
    var mins  = Math.floor( countdownTotal / (1000*60) );
    var secs  = Math.floor( countdownTotal / 1000 );
    
    dd = days;
    hh = hours - days * 24;
    mm = mins - hours * 60;
    ss = secs - mins * 60;

    var firstDigit = Math.floor(ss / (Math.pow(10, 0)) % 10);
    var secondDigit = Math.floor(ss / (Math.pow(10, 1)) % 10);
    
    function setDigit (digit) {
	    if (digit > 0) {
		    return digit-1;
	    } else {
		    return 9;
	    }
    }
    
    function setDigitMin (digit) {
	    if (digit > 0) {
		    return digit-1;
	    } else {
		    return 5;
	    }
    }
    
    $('.uno1').html(secondDigit);
    $('.dos1').html(setDigitMin(secondDigit));
    $('.uno').html(firstDigit);
    $('.dos').html(setDigit(firstDigit));
    
    //just use two spaces and make sure the numbers reset correctly.
    
}

setTimer();

function countdown () {
	var currentTime = new Date();
	//console.log(currentTime);
	var countdownTime = Date.parse("April 1, 2013 21:10:00");
	//console.log(countdownTime);
	var countdownTotal = countdownTime - currentTime;
	//console.log(countdownTotal);
	
	var days  = Math.floor( countdownTotal / (1000*60*60*24) );
    var hours = Math.floor( countdownTotal / (1000*60*60) );
    var mins  = Math.floor( countdownTotal / (1000*60) );
    var secs  = Math.floor( countdownTotal / 1000 );
    
    dd = days;
    hh = hours - days * 24;
    mm = mins - hours * 60;
    ss = secs - mins * 60;
    
    
    document.getElementById("countdown")
        .innerHTML =
            dd + ' days ' +
            hh + ' hours ' +
            mm + ' minutes ' +
            ss + ' seconds';
            
    // create a function spin 
    // sets the spin animation to the div with the current number set on it
    // create divs for all possible digits? secs up to 60 add class with spin animation to each digit
    // do it like example. set number for each digit at the begninng. Make num a string and set.
    // Animate from there with if statement for 9 to 0
    
}

setInterval('countdown()', 1000);

function play () {
	$("body").removeClass("play");
	$("body").addClass("play");
}

