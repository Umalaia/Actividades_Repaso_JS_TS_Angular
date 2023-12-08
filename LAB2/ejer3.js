/*Realiza una pagina web que simule una página de login de usuario. 
Solo podremos entrar cuando el usuario sea “pepe” y la contraseña sea “1234”. 
Tendremos dos cajas de texto para cada entrada y un botón para comprobar el usuario. 
En caso afirmativo, aparecerá el mensaje “Usuario y password correcto” justo debajo,
 en caso contrario, aparecerá el mensaje “Algún campo no es correcto”.
 */
function confirmar(){
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let mensaje = document.getElementById("mensaje")

    if((user.value == "pepe") && (pass.value == 1234)){
        mensaje.value = "user y contra correcta"
    }else{
        mensaje.value = "user y contra incorrecta"
    }
}