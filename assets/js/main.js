$(document).ready(function(){
    $("#enlace-basico").click(function() {
        $(this).addClass('active')
        $("#enlace-vip").removeClass('active')
        $("#info-basico").removeClass("d-none") //Muestra infoBasico
        $("#info-vip").addClass("d-none") //Oculta InfoVIP
        $("#contenedor-usuario").addClass("d-none")
    })

    $("#enlace-vip").click(function() {
        $(this).addClass('active')
        $("#enlace-basico").removeClass('active')
        $("#info-vip").removeClass("d-none") //Muestra InfoVIP
        $("#info-basico").addClass("d-none") //Oculta InfoBasico
        $("#contenedor-usuario").removeClass("d-none")
    })
})