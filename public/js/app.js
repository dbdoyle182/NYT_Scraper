// Allows get new articles button to perform scraping

document.getElementById('scrape').addEventListener('click', function() { 
     $.getJSON('/scrape', function(data) {
        console.log('success')
     })
});

// Triggers mobile friendly navbar

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

// Triggers floating action button on click

var elem = document.querySelector('.fixed-action-btn');
var instance = M.FloatingActionButton.init(elem, {
  direction: 'left',
  hoverEnabled: false
});



