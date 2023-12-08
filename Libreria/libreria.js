function enviarDatosLibreria() {
    let xh = new XMLHttpRequest();
    xh.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                procesarRespuesta(this.responseText);
            } else {
                alert("error");
            }
        }
    }
    xh.open('GET', 'libreria.json', true)
    xh.send(null)
}


function procesarRespuesta(mensaje) {
    let libreria = JSON.parse(mensaje)
    let libros = libreria.libros
    console.log(libros)
    cargarCategorias(libros)
    cargarLibros(libros)
}


function cargarCategorias(libros) {
    let cont = document.getElementById("cont")
    let h2 = document.createElement("h2")
    let titcat = document.createTextNode("Libros por categoria :")
    h2.appendChild(titcat)
    cont.appendChild(h2)

    let select = document.createElement("select")
    select.id = "select"
    for (let libro of libros) {
        let opt = document.createElement("option")
        opt.value = libro.categoria;
        let contopt = document.createTextNode(libro.categoria)
        opt.appendChild(contopt)
        select.appendChild(opt)
    }
    cont.appendChild(select)

    let buttonVer = document.createElement("button")
    let contb = document.createTextNode("VER LIBROS")
    buttonVer.appendChild(contb)
    buttonVer.id = "verLibros"
    buttonVer.style.marginLeft = "20px"
    cont.appendChild(buttonVer)
}


function cargarLibros(libros) {
    let h22 = document.createElement("h2")
    let ch22 = document.createTextNode("Listado de libros : ")
    h22.appendChild(ch22)
    lista.appendChild(h22)

    let table = document.createElement("table")
    lista.appendChild(table)
    let tr1 = document.createElement("tr")
    table.appendChild(tr1)

    for (let key in libros[0]) {
        let th = document.createElement("th")
        let thcont = document.createTextNode(key)
        th.appendChild(thcont)
        tr1.appendChild(th)
    }

    let thele = document.createElement("th")
    let label = document.createElement("label")
    let cele = document.createTextNode("elegir libro")
    thele.appendChild(label)
    label.appendChild(cele)
    tr1.appendChild(thele)


    for (let libro of libros) {
        let tr2 = document.createElement("tr")
        table.appendChild(tr2)
        
        let td1 = document.createElement("td")
        let tdcont = document.createTextNode(libro.nombre)
        td1.appendChild(tdcont)
        tr2.appendChild(td1)
        let td2 = document.createElement("td")
        let tdcont2 = document.createTextNode(libro.categoria)
        td2.appendChild(tdcont2)
        tr2.appendChild(td2)
        let td3 = document.createElement("td")
        let tdcont3 = document.createTextNode(libro.disponible)
        td3.appendChild(tdcont3)
        tr2.appendChild(td3)
        let td4 = document.createElement("td")
        let tdcont4 = document.createTextNode(libro.cantidad)
        td4.appendChild(tdcont4)
        tr2.appendChild(td4)
        let td5 = document.createElement("td")
        let tdcont5 = document.createTextNode(libro.precio)
        td5.appendChild(tdcont5)
        tr2.appendChild(td5)
        let td6 = document.createElement("td")
        let tdcont6 = document.createTextNode(libro.extra)
        td6.appendChild(tdcont6)
        tr2.appendChild(td6)

        let td7 = document.createElement("td")
        let input = document.createElement("input")
        input.type = "checkbox"
        input.name = "eleccion"
        input.value = libro.precio;
        td7.appendChild(input)
        tr2.appendChild(td7)
    }

}


function calcularPrecio() {
    let precio = 0;
    let eleccion = document.getElementsByName("eleccion")
    for (let elec of eleccion) {
        if (elec.checked) {
            precio += parseInt(elec.value)
        }
    }

    let hPrecio = document.createElement("h4")
    let tPrecio = document.createTextNode("Precio total: " + precio)
    hPrecio.appendChild(tPrecio)

    let precios = document.getElementById("precios");
    precios.innerHTML = "";
    precios.appendChild(hPrecio);
}



/*no funciona
function librosPorCategoria(libros){
    for (let libro of libros){
        if(libro.categoria = checked){
            cargarLibros()
        }
    }
}
*/


function actualizarDatos() {
    cont.innerHTML = "";
    lista.innerHTML = ""
}



window.onload = function () {
    enviarDatosLibreria()
    //verLibros.onclick = librosPorCategoria
    let calcularPrecioLibro = document.getElementById("calcularPrecioLibro")
    calcularPrecioLibro.onclick = calcularPrecio
    actualizar.onclick = actualizarDatos
}