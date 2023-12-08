
//llamar a un evento desde el ts

//hay que meterlo una vez el html entero esté cargado, si no no se podrá acceder ya que no existe
// se mete dentro de la funcion window.onload

window.onload = function(){
    idDelBoton.onclick = nombreDeLaFuncionAEjecutar;
    //ejemplo
    pedirDatosPizzeria.onclick = pedirDatos;
    botonActualizarDatos.onclick = actualizarDatos;

    //si una funcion tiene parametros de entreda invocarla mediante una funcion anonima
    botonPedirDatosPizzeria.onclick = function(){
        pedirDatosPizzeria('pizzeria.json', 2)
    }

}



// si ponemos la etiqueta defer en la etiqueta script, dicho  script no se ejecutará
// hasta que no se haya cargado completamente la pagina html en el arbol DOM

//Podriamos ahorrarnos de esta manera usar window.onload usando defer en el html
<script src="funcionalidad.js" defer></script>
