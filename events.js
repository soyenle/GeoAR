

// Component to make a popup window for the quiz.
AFRAME.registerComponent('listener1', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var doc = document.getElementById("btn");             
            // Changing the text content
            doc.textContent = "Quiz1";
            document.getElementById("btn").onclick = Quiz1;    
    });
  }
});

     AFRAME.registerComponent('listener2', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var doc = document.getElementById("btn");             
            // Changing the text content
            doc.textContent = "Quiz2";
            document.getElementById("btn").onclick = Quiz2;      
    }); }});

      AFRAME.registerComponent('listener3', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var doc = document.getElementById("btn");             
            // Changing the text content
            doc.textContent = "Quiz3";
            document.getElementById("btn").onclick = Quiz3;      
    }); }});

      AFRAME.registerComponent('listener4', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var doc = document.getElementById("btn");             
            // Changing the text content
            doc.textContent = "Quiz4";
            document.getElementById("btn").onclick = Quiz4;      
    }); }});

   AFRAME.registerComponent('listener5', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var doc = document.getElementById("btn");             
            // Changing the text content
            doc.textContent = "Quiz5";
            document.getElementById("btn").onclick = Quiz5;      
    }); }});

   AFRAME.registerComponent('listener6', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
        var doc = document.getElementById("btn");             
            // Changing the text content
            doc.textContent = "Quiz6";
            document.getElementById("btn").onclick = Quiz6;      
    }); }});

          function Quiz0() {           
            window.alert("Begebe dich in die nähe eines 3D-Modells (<15m) \nDanach lässt sich ein Quizfenster öffnen");
        }
         function Quiz1() {           
            window.open("https://studycore.de/");
        }
         function Quiz2() {           
            window.open("https://google.de/");
         }
         function Quiz3() {           
            window.open("https://bing.de/");
         }
         function Quiz4() {           
            window.open("https://yahoo.de/");
         }
         function Quiz5() {           
            window.open("https://amazon.de/");
         }
         function Quiz6() {           
            window.open("https://youtube.de/");
         }
      
   
 AFRAME.registerComponent('listener0', {
    init: function () {
     document.getElementById('Distance1').textContent = `1Distanz:${document.getElementById('Model1').getAttribute('distanceMsg')}`;
    
}   
});
