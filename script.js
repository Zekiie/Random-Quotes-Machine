
var quotes = ["I'm gonna make him an offer he can't refuse.",
    "Toto, I've a feeling we're not in Kansas anymore.",
    "A martini. Shaken, not stirred.", "Open the pod bay doors, please, HAL.",
    "Here's Johnny!", "Here's looking at you, kid.", "There's no place like home.",
    "The first rule of Fight Club is you do not talk about Fight Club.", "Houston, we have a problem.",
    "Elementary, my dear Watson.", "I don't want to survive. I want to live.",
    "Gentlemen, you can't fight in here! This is the war room!",
    "Now you're looking for the secret. But you won't find it because, of course, you're not really looking. You don't really want to work it out. You want to be fooled",
    "All Those Moments Will be Lost in Time, Like Tears in Rain", "My precious.", "May the Force be with you.",
    "You make me want to be a better man", "It was Beauty killed the Beast.", "Help me, Obi-Wan Kenobi. You're my only hope."];
var movie = ["The Godfather, 1972", "The Wizard of Oz, 1939", "Goldfinger, 1964", "2001: A Space Odyssey, 1968", "The Shining, 1980",
    "Casablanca, 1942", "The Wizard of Oz, 1939", "Fight Club, 1999", "Apollo 13, 1995", "The Adventures of Sherlock Holmes, 1939",
    "12 Years a Slave, 2013", "Dr Strangelove, 1964", "The Prestige, 2006", "Blade Runner, 1982", "The Lord of the Rings: The Two Towers, 2002", "Star Wars, 1977",
    "As Good as It Gets, 1997", "King Kong, 1933", "Star Wars, 1977" ];

var mainButton = document.querySelector('button');

function clickRandom () {
    mainButton.addEventListener('click', function () {
        var randomResult = Math.floor (Math.random () * quotes.length);
        document.getElementById('quoteResult').innerHTML = quotes[randomResult];
        document.getElementById('movie').innerHTML = movie[randomResult];
    })
}

clickRandom ()
