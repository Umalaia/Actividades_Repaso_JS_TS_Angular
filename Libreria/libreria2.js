function enviarDatosLibreria() {
    let xh = new XMLHttpRequest();
    xh.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                procesarRespuesta(this.responseText);
            } else {
                alert("Error al obtener datos de la librería.");
            }
        }
    };
    xh.open('GET', 'libreria.json', true);
    xh.send(null);
}

function procesarRespuesta(mensaje) {
    let libreria = JSON.parse(mensaje);
    let libros = libreria.libros;
    cargarCategorias(libros);
    cargarLibros(libros);
}

function cargarCategorias(libros) {
    let cont = document.getElementById("cont");
    let h2 = document.createElement("h2");
    let titcat = document.createTextNode("Libros por categoría:");
    h2.appendChild(titcat);
    cont.appendChild(h2);

    let select = document.createElement("select");
    select.id = "categoria";
    for (let libro of libros) {
        let opt = document.createElement("option");
        opt.value = libro.categoria; // Asigna el valor de la categoría
        let contopt = document.createTextNode(libro.categoria);
        opt.appendChild(contopt);
        select.appendChild(opt);
    }
    cont.appendChild(select);

    let buttonVer = document.createElement("button");
    let contb = document.createTextNode("VER LIBROS");
    buttonVer.appendChild(contb);
    buttonVer.id = "verLibros";
    buttonVer.style.marginLeft = "20px";
    buttonVer.onclick = function () {
        librosPorCategoria(libros);
    };
    cont.appendChild(buttonVer);
}

function cargarLibros(libros) {
    let cont = document.getElementById("cont");
    let h2 = document.createElement("h2");
    let ch2 = document.createTextNode("Listado de libros: ");
    h2.appendChild(ch2);
    cont.appendChild(h2);

    let table = document.createElement("table");
    cont.appendChild(table);

    let tr1 = document.createElement("tr");
    table.appendChild(tr1);

    for (let key in libros[0]) {
        let th = document.createElement("th");
        let thcont = document.createTextNode(key);
        th.appendChild(thcont);
        tr1.appendChild(th);
    }

    let thele = document.createElement("th");
    let label = document.createElement("label");
    let cele = document.createTextNode("Elegir libro");
    label.appendChild(cele);
    thele.appendChild(label);
    tr1.appendChild(thele);

    for (let libro of libros) {
        let tr2 = document.createElement("tr");
        table.appendChild(tr2);

        for (let key in libro) {
            let td = document.createElement("td");
            let tdcont = document.createTextNode(libro[key]);
            td.appendChild(tdcont);
            tr2.appendChild(td);
        }

        let td7 = document.createElement("td");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = "eleccion";
        input.value = libro.precio; // Asigna el valor del precio al checkbox
        td7.appendChild(input);
        tr2.appendChild(td7);
    }
}

function calcularPrecio() {
    let precio = 0;
    let eleccion = document.getElementsByName("eleccion");
    for (let elec of eleccion) {
        if (elec.checked) {
            precio += parseInt(elec.value);
        }
    }

    let hPrecio = document.createElement("h4");
    let tPrecio = document.createTextNode("Precio total: " + precio);
    hPrecio.appendChild(tPrecio);

    let precios = document.getElementById("precios");
    precios.innerHTML = "";
    precios.appendChild(hPrecio);
}



let categoriaAnterior = null; // Variable para almacenar la categoría anterior
function librosPorCategoria(libros) {
    let categoriaSeleccionada = document.getElementById("categoria").value;
    if (categoriaSeleccionada !== categoriaAnterior) {
        let librosFiltrados = libros.filter(libro => libro.categoria === categoriaSeleccionada);
        cargarLibros(librosFiltrados);
        categoriaAnterior = categoriaSeleccionada; // Actualizar la categoría anterior
    }
  
}


function actualizarDatos() {
    let cont = document.getElementById("cont");
    let lista = document.getElementById("lista");
    cont.innerHTML = "";
    lista.innerHTML = "";
}

window.onload = function () {
    enviarDatosLibreria();
    calcularPrecioLibro.onclick = calcularPrecio;
    verLibros.onclick = librosPorCategoria
    actualizar.onclick = actualizarDatos;
};
