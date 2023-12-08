window.onload = enviarPeticion;

function enviarPeticion() {
  let xh = new XMLHttpRequest();
  xh.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        procesarRespuesta(this.responseText);
      } else {
        alert("Error");
      }
    }
  };
  xh.open("GET", "datos.json", true);
  xh.send(null);
}

function procesarRespuesta(jsonDoc) {
  var objetoJson = JSON.parse(jsonDoc);
  var clases = objetoJson.clases;
  var sistemas = objetoJson.sistemas;
  console.log(objetoJson);

  let contenedor = document.getElementById("cont");

  let h3Pc = document.createElement("h3");
  let clp = document.createTextNode("Ordenadores :");
  h3Pc.appendChild(clp);
  contenedor.appendChild(h3Pc);

  console.log(clp);

  for (let clase of clases) {
    let labelClase = document.createElement("label");
    labelClase.for = "clase";
    let clc = document.createTextNode(clase.tipo);
    labelClase.appendChild(clc);
    contenedor.appendChild(labelClase);

    let inputClase = document.createElement("input");
    inputClase.type = "radio";
    inputClase.name = "clase";
    inputClase.value = clase.valor;
    inputClase.id = clase.tipo;
    contenedor.appendChild(inputClase);
  }

  let h3Sys = document.createElement("h3");
  let lsc = document.createTextNode("Sistemas Operativos : ");
  h3Sys.appendChild(lsc);
  contenedor.appendChild(h3Sys);

  for (let sistema of sistemas) {
    let labelsys = document.createElement("label");
    let cls = document.createTextNode(sistema.sys);
    labelsys.appendChild(cls);
    contenedor.appendChild(labelsys);

    let inputsys = document.createElement("input");
    inputsys.id = sistema.sys;
    inputsys.name = "sys";
    inputsys.value = sistema.uso;
    inputsys.type = "radio";
    contenedor.appendChild(inputsys);
  }

}


function validar(){
  //Validar si un campo está vacio
  let nombre = document.getElementById("nombre");
  let direc = document.getElementById("direccion");
  let email = document.getElementById("email");
  let tlfn = document.getElementById("tlfn");

  if(nombre.value.trim() == "" ||direc.value.trim() == "" || email.value.trim() == "" || tlfn.value.trim() == ""){
    alert("rellene los campos")
  }
}


function seleccionado(){
  let sobremesa = document.getElementById("sobremesa")
  let portatil = document.getElementById("portatil")
  let tablet = document.getElementById("tablet")

  if(sobremesa.checked){
      return sobremesa.valor = sobremesa.value }
  else if(portatil.checked){
       return portatil.valor = portatil.value}
  else if(tablet.checked){
      return tablet.valor = tablet.value
      }
}

function calcularPrecio(){
  validar() 
  let precio = seleccionado()
        let cont = document.getElementById("cont")
        let p = document.createElement("p");
          let pcont = document.createTextNode("El precio es :" + precio + "€");
          p.appendChild(pcont);
          cont.appendChild(p);
}
