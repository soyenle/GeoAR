


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


    function Distance_Show(){
    document.getElementById('Distance1').textContent = `Distanz:${document.getElementById('Model1').getAttribute('distanceMsg')}`;
    document.getElementById('Distance2').textContent = `Distanz:${document.getElementById('Model2').getAttribute('distanceMsg')}`;
      document.getElementById('Distance3').textContent = `Distanz:${document.getElementById('Model3').getAttribute('distanceMsg')}`;
    document.getElementById('Distance4').textContent = `Distanz:${document.getElementById('Model4').getAttribute('distanceMsg')}`;
      document.getElementById('Distance5').textContent = `Distanz:${document.getElementById('Model5').getAttribute('distanceMsg')}`;
    document.getElementById('Distance6').textContent = `Distanz:${document.getElementById('Model6').getAttribute('distanceMsg')}`;
    setTimeout(Distance_Show, 5000);
}
   
    AFRAME.registerComponent('listener0', {
    init: function () {
    document.getElementById('Distance1').textContent = `Distanz:${document.getElementById('Model1').getAttribute('distanceMsg')}`;
      Distance_Show();    
  }
});
