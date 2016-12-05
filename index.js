(function() {
  'use strict';

  // YOUR CODE HERE
  var stopButton = document.getElementById('stopButton');
  var stopLight = document.getElementById('stopLight');
    stopButton.addEventListener("click", function () {
        stopLight.classList.toggle("stop");
  });

  var slowButton = document.getElementById('slowButton');
  var slowLight = document.getElementById('slowLight');
    slowButton.addEventListener("click", function () {
      slowLight.classList.toggle("slow");
  });

  var goButton = document.getElementById('goButton');
  var goLight = document.getElementById('goLight');
    goButton.addEventListener("click", function () {
      goLight.classList.toggle("go");
  });

    // part2
    stopButton.addEventListener('mouseenter', function(event) {
      console.log("Time to stop.");
    })
    stopButton.addEventListener('mouseleave', function(event) {
      console.log("Stop light off.");
    })
    slowButton.addEventListener('mouseenter', function(event) {
      console.log("Hey let's slow down.");
    })
    slowButton.addEventListener('mouseleave', function(event) {
      console.log("Preparing to stop.");
    })
    goButton.addEventListener('mouseenter', function(event) {
      console.log("It's time to go.");
    })
    goButton.addEventListener('mouseleave', function(event) {
      console.log("Time to slow down.");
    })

    // Bonus
    var controls = document.getElementById('controls')
    controls.addEventListener('click', function logChange(event) {
      if(event.target && event.target.classList.contains('button')) {
        console.log(event.target.textContent +" " + "bulb on.")
      }
    })


})();
