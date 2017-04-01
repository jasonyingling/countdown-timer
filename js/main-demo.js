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

function setDigitHour (digit) {
    if (digit > 0) {
	    return digit-1;
    } else {
	    return 3;
    }
}

function setDigitHourTenths (digit) {
    if (digit > 0) {
	    return digit-1;
    } else {
	    return 2;
    }
}

function getDate() {
	currentTime = new Date();

	countdownTime = Date.parse("April 2, 2017 19:30:00 CST");

	countdownTotal = countdownTime - currentTime;

	// Set days, hours, mins, secs through the power of math
	days  = Math.floor( countdownTotal / (1000*60*60*24) );
    hours = Math.floor( countdownTotal / (1000*60*60) );
    mins  = Math.floor( countdownTotal / (1000*60) );
    secs  = Math.floor( countdownTotal / 1000 );

    // Determine the number of days first. Hours = total time minus days. Etc
    dd = days;
    hh = hours - days * 24;
    mm = mins - hours * 60;
    ss = secs - mins * 60;

    // Set time. Going right to left for some reason. My bad.
    firstDigit = Math.floor(ss % 10);
    secondDigit = Math.floor(ss / 10);

    mmFirstDigit = Math.floor(mm % 10);
    mmSecondDigit = Math.floor(mm / 10);

    hhFirstDigit = Math.floor(hh % 10);
    hhSecondDigit = Math.floor(hh / 10);

    ddFirstDigit = Math.floor(dd % 10);
    ddSecondDigit = Math.floor(dd / 10);
}

function setTimer () {
	getDate();

	if (countdownTotal <= 0) {
		$('.container').css('display', 'block');
	    $('.openingday').css('display', 'none');
	    $('.herewego').css('display', 'block');
	} else {
		// If statement to fix glitch when loading in at 0 seconds in first spot
		if (firstDigit === 0) {
			$('ul.secondPlay li').eq(0).find('.inn').html(setDigit(firstDigit));
		} else {
		    $('ul.secondPlay li').eq(0).find('.inn').html(firstDigit);
	    }

	    if (firstDigit === 0) {
			$('ul.secondTenths li').eq(0).find('.inn').html(setDigitMin(secondDigit));
	    } else {
		    $('ul.secondTenths li').eq(0).find('.inn').html(secondDigit);
	    }

	    if (secondDigit ===0 && firstDigit === 0) {
			$('ul.minutePlay li').eq(0).find('.inn').html(setDigit(mmFirstDigit));
	    } else {
		    $('ul.minutePlay li').eq(0).find('.inn').html(mmFirstDigit);
	    }

	    if (mmFirstDigit === 0 && secondDigit ===0 && firstDigit === 0) {
			$('ul.minuteTenths li').eq(0).find('.inn').html(setDigitMin(mmSecondDigit));
	    } else {
		    $('ul.minuteTenths li').eq(0).find('.inn').html(mmSecondDigit);
	    }

	    if (mmSecondDigit === 0 && mmFirstDigit === 0 && secondDigit ===0 && firstDigit === 0) {
			$('ul.hourPlay li').eq(0).find('.inn').html(setDigitHour(hhFirstDigit));
	    } else {
		    $('ul.hourPlay li').eq(0).find('.inn').html(hhFirstDigit);
	    }

	    if (hhFirstDigit === 0 && mmSecondDigit === 0 && mmFirstDigit === 0 && secondDigit ===0 && firstDigit === 0) {
			$('ul.hourTenths li').eq(0).find('.inn').html(setDigitHourTenths(hhSecondDigit));
	    } else {
		    $('ul.hourTenths li').eq(0).find('.inn').html(hhSecondDigit);
	    }

	    if (hhSecondDigit === 0 && hhFirstDigit === 0 && mmSecondDigit === 0 && mmFirstDigit === 0 && secondDigit ===0 && firstDigit === 0) {
			$('ul.dayPlay li').eq(0).find('.inn').html(ddFirstDigit);
	    } else {
		    $('ul.dayPlay li').eq(0).find('.inn').html(ddFirstDigit);
	    }

	    if (ddFirstDigit === 0 && hhSecondDigit === 0 && hhFirstDigit === 0 && mmSecondDigit === 0 && mmFirstDigit === 0 && secondDigit ===0 && firstDigit === 0) {
			$('ul.dayTenths li').eq(0).find('.inn').html(setDigit(ddSecondDigit));
	    } else {
		    $('ul.dayTenths li').eq(0).find('.inn').html(ddSecondDigit);
	    }

	    $('.container').css('display', 'block');

	    setInterval(function () {
	        counter()
	    }, 1000);
	}


}

setTimer();

function counter () {
	getDate();

    if (ddSecondDigit === 0 && ddFirstDigit === 0 && hhSecondDigit === 0 && hhFirstDigit === 0 && mmSecondDigit === 0 && mmFirstDigit === 0 && secondDigit ===0 && firstDigit === 0) {
		$('.openingday').fadeOut(2000);
		$('.herewego').delay(1900).fadeIn(2000);
		//$('body').removeClass('play');
		clearInterval(countBegin);
    } else if (countdownTotal > 0) {
	    //Calls secondPlay has to be before seconds are set
    play("secondPlay");
    $('ul.secondPlay li.before .inn').html(firstDigit);
	$('ul.secondPlay li.active .inn').html(setDigit(firstDigit));

    // Sets second second spot when first second spot === 0
	if (firstDigit === 0) {
	   play("secondTenths");
	   $('ul.secondTenths li.before .inn').html(secondDigit);
	   $('ul.secondTenths li.active .inn').html(setDigitMin(secondDigit));
	}

	if (secondDigit === 0 && firstDigit === 0) {
	   play("minutePlay");
	   $('ul.minutePlay li.before .inn').html(mmFirstDigit);
	   $('ul.minutePlay li.active .inn').html(setDigit(mmFirstDigit));
	}

	if (mmFirstDigit === 0 && secondDigit === 0 && firstDigit === 0) {
	   play("minuteTenths");
	   $('ul.minuteTenths li.before .inn').html(mmSecondDigit);
	   $('ul.minuteTenths li.active .inn').html(setDigitMin(mmSecondDigit));
	}

	if (mmSecondDigit === 0 && mmFirstDigit === 0 && secondDigit === 0 && firstDigit === 0) {
	   play("hourPlay");
	   $('ul.hourPlay li.before .inn').html(hhFirstDigit);
	   $('ul.hourPlay li.active .inn').html(setDigitHour(hhFirstDigit));
	}

	if (hhFirstDigit ==0 && mmSecondDigit === 0 && mmFirstDigit === 0 && secondDigit === 0 && firstDigit === 0) {
	   play("hourTenths");
	   $('ul.hourTenths li.before .inn').html(hhSecondDigit);
	   $('ul.hourTenths li.active .inn').html(setDigitHourTenths(hhSecondDigit));
	}

	if (hhSecondDigit === 0 && hhFirstDigit ==0 && mmSecondDigit === 0 && mmFirstDigit === 0 && secondDigit === 0 && firstDigit === 0) {
	   play("dayPlay");
	   $('ul.dayPlay li.before .inn').html(ddFirstDigit);
	   $('ul.dayPlay li.active .inn').html(setDigit(ddFirstDigit));
	}

	if (ddFirstDigit === 0 && hhSecondDigit === 0 && hhFirstDigit ==0 && mmSecondDigit === 0 && mmFirstDigit === 0 && secondDigit === 0 && firstDigit === 0) {
	   play("dayTenths");
	   $('ul.dayTenths li.before .inn').html(ddSecondDigit);
	   $('ul.dayTenths li.active .inn').html(setDigitTenths(ddSecondDigit));
	}
    }



}



function play(target) {
    $("body").removeClass("play");
    var aa = $("ul."+target+" li.active");

    if (aa.html() == undefined) {
        aa = $("ul."+target+" li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul."+target+" li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul."+target+" li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul."+target+" li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}
