let usuarios=[
    {
        "nombre":"pablo",
        "contra": 1234
    },
    {
        "nombre":"lidia",
        "contra": 5678
    },
    {
        "nombre":"pedro",
        "contra": 9876
    }
]

function confirmar(){
    //estos let no hacen falta
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let mensaje = document.getElementById("mensaje");

    for(let usuario of usuarios){
        if(user.value == usuario.nombre && pass.value == usuario.contra){
            mensaje.value = "correcto"
            break;
        }else{
            mensaje.value = "incorrecto"
        }
    }

}