var myVar = setInterval(cambioImagen, 2000);

var verDatosJulio = function(){
        if (document.getElementById('parrafojulio').style.display == 'block'){
            parrafojulio.style.display = "none";
        }
        else{
            parrafojulio.style.display = "block";

        }
}
var verDatosRene = function(){
    if (document.getElementById('parraforene').style.display == 'block'){
            parraforene.style.display = "none";
        }
        else{
            parraforene.style.display = "block";
        }
}
var verDatosOrlando = function(){
    if (document.getElementById('parrafoorlando').style.display == 'block'){
            parrafoorlando.style.display = "none";
        }
        else{
            parrafoorlando.style.display = "block";
        }
}
var verDatosGilby = function(){
    if (document.getElementById('parrafogilby').style.display == 'block'){
            parrafogilby.style.display = "none";
        }
        else{
            parrafogilby.style.display = "block";
        }
    }
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function cambioImagen(){

    var z = document.getElementById('imagenmov1');
     var y = document.getElementById('imagenmov2');

        if (z.style.display == 'block'){
            z.style.display = "none";
            y.style.display = "block";

        }
        else{
            y.style.display = "none";
            z.style.display = "block";


        }
}
