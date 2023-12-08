function enviarPeticionAsincrona() {
    let xh = new XMLHttpRequest();
    console.log("entrando pedirDatos")

    xh.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                procesarRespuesta(this.responseText);
            } else
                alert("error")
        }
    }
    xh.open('GET', 'ChatGpt.json', true)
    xh.send(null)
}

function procesarRespuesta(mensaje) {
    let objetoJson = JSON.parse(mensaje)
    let pedidos = objetoJson.pedidos
    console.log(objetoJson.pedidos)
    cargarDatos(pedidos)

}

function cargarDatos(pedidos) {

    let cont = document.getElementById("cont")
    let h1 = document.createElement("h1")
    let ch1 = document.createTextNode("Listado de pedidos")
    h1.appendChild(ch1)
    cont.appendChild(h1)

    let table = document.createElement("table")
    table.style.border = "2"
    cont.appendChild(table)


    let titulos = ["Numero de pedido", "Fecha", "nombre cliente", "Tamaño Pizza", "Precio"];

    let tr = document.createElement("tr");

    for (let titulo of titulos) {
        let th = document.createElement("th");
        let contth = document.createTextNode(titulo);
        th.appendChild(contth);
        tr.appendChild(th);
    }

    table.appendChild(tr);

    let tr2 = document.createElement("tr");
    for (let pedido of pedidos) {
        let td = document.createElement("td")
        let ctd = document.createTextNode(pedido.numeroPedido)
        td.appendChild(ctd)
        tr2.appendChild(td)
        let td3 = document.createElement("td")
        let ctd3 = document.createTextNode(pedido.fecha)
        td3.appendChild(ctd3)
        tr2.appendChild(td3)
        let td4 = document.createElement("td")
        let ctd4 = document.createTextNode(pedido.nombreCliente)
        td4.appendChild(ctd4)
        tr2.appendChild(td4)
        let td5 = document.createElement("td")
        let ctd5 = document.createTextNode(pedido.tamañoPizza)
        td5.appendChild(ctd5)
        tr2.appendChild(td5)
        let td6 = document.createElement("td")
        let ctd6 = document.createTextNode(pedido.precio)
        td6.appendChild(ctd6)
        tr2.appendChild(td6)
    }
    table.appendChild(tr2);

}


function actualizarDatos(){
    let cont = document.getElementById("cont")
    cont.innerHTML = ""
    enviarPeticionAsincrona()
}



window.onload = function () {
    enviarPeticionAsincrona()
    actualizar.onclick = actualizarDatos

}





/*let tr = document.createElement("tr")
    let th = document.createElement("th")
    let contth = document.createTextNode("Numero de pedido")
    th.appendChild(contth)
    table.appendChild(tr)
    let th2 = document.createElement("th")
    let contth2 = document.createTextNode("Fecha")
    th2.appendChild(contth2)
    let th3 = document.createElement("th")
    let contth3 = document.createTextNode("nombre cliente")
    th3.appendChild(contth3)
    let th4 = document.createElement("th")
    let contth4 = document.createTextNode("Tamaño Pizza")
    th4.appendChild(contth4)
    let th5 = document.createElement("th")
    let contth5 = document.createTextNode("Precio")
    th5.appendChild(contth5)
    tr.appendChild(th)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)
    */