
window.onload = function () {
    
    var formulario = document.querySelector("#formulario")
    var boxdashed =document.querySelector(".dashed")
    boxdashed.style.display = "none"
    formulario.addEventListener('submit',function(event){
        event.preventDefault();
        console.log("evento submit capturado")
        var nombre = document.querySelector("#nombre").value
        var apellidos = document.querySelector("#apellidos").value
        var edad = document.querySelector("#edad").value

        boxdashed.style.display = "block"
        
        var datosUsuario = [nombre,apellidos, edad]
        for (let indice in datosUsuario){
            var parrafo =document.createElement("p")
            parrafo.append(datosUsuario[indice])
            boxdashed.append(parrafo)
        }

    })

}