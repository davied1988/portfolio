const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Jun 19, 2018, 17:00:00').getTime();

//Update Every Second
const intvl = setInterval(()=>{
    //Get todays date and time (ms)
    const now = new Date().getTime();
    //Distance from now to the launch date
    const distance = launchDate - now;
    //Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //Display the result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    //If launch date passed
    if(distance < 0){
        //Stop countdown
        clearInterval(intvl);
        //Style and output text
        countdown.style.color = '17a2b8';
        countdown.innerHTML = "Launched!"
    }
}, 1000);

var el = document.getElementById('username');     // Username input
var elMsg = document.getElementById('feedback');  // Element to hold message

function checkUsername() {                          // Declare function
    var username = el.value;                        // Store username in variable
    if (username.length < 5) {                      // If username < 5 characters
      elMsg.className = 'warning';                  // Change class on message
      elMsg.textContent = 'Not long enough, yet...';// Update message
    } else {                                        // Otherwise
      elMsg.textContent = '';                       // Clear the message
    }
  }
  
  function tipUsername() {                          // Declare function
    elMsg.className = 'tip';                        // Change class for message
    elMsg.innerHTML = 'Username must be at least 5 characters'; // Add message
  }
  
// When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false);// blur call checkUsername()


// Slider
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

//clear all images
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}
//init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

//show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

//show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

//left arrow click
arrowLeft.addEventListener('click', function(){
    if(current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

//right arrow click
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();

window.sr = ScrollReveal();
    sr.reveal('header', {
        duration: 1300,
        origin:'top'
    });
    sr.reveal('.wrap', {
        duration: 2200,
        origin:'bottom',
        distance: '50px'
    });
    sr.reveal('.landing', {
        duration: 3000,
        origin:'bottom'
    });
    sr.reveal('#boxes', {
        duration: 2200,
        origin:'left',
        distance:'600px',
        viewFactor: 0.2
    });
    sr.reveal('#page', {
        duration: 1500,
        origin:'left',
        distance:'600px'
    });
    sr.reveal('#newsletter', {
        duration: 1500,
        origin:'right',
        distance:'600px'
    });
    sr.reveal('.aside-quote', {
        duration: 2000,
        origin:'left',
        distance:'600px'
    });
    sr.reveal('#main', {
        duration: 2000,
        origin:'right',
        distance:'600px'
    });
    sr.reveal('.flex-gallery', {
        duration: 1500,
        origin:'right',
        distance:'700px'
    });
    sr.reveal('#form', {
        duration: 1500,
        origin:'right',
        distance:'700px'
    });
    sr.reveal('footer', {
        duration: 2500,
        origin:'bottom'
    });

// Quote
$(document).ready(function() {
	var prefix = "https://cors-anywhere.herokuapp.com/",
		tweetLink = "https://twitter.com/intent/tweet?text=",
		quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
		
	function getQuote() {
		$.getJSON(quoteUrl, createTweet);
		$.getJSON(prefix + quoteUrl, createTweet);
		$.ajaxSetup({ cache: false });
	}
		
	function createTweet(input) {
		if (input.length) {
			var data = input[0];
			var quoteText = $(data.content).text().trim();
			var quoteAuthor = data.title;

		if (!quoteAuthor.length) {
			quoteAuthor = "Unknown author";
		}
		var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;
		if (tweetText.length > 140) {
		getQuote();
		} 	else {
				var tweet = tweetLink + encodeURIComponent(tweetText);
				$('.quote').text(quoteText);
				$('.author').text("Author: " + quoteAuthor);
				$('.tweet').attr('href', tweet);
			}
		}
	}
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})

	// Click Smooth Scroll
    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });
});
