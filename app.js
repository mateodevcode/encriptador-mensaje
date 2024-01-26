// Seleccionar mensaje a encriptar
const mensaje = document.getElementById("mensaje");
// Mensaje encriptado
const respuesta = document.getElementById("respuesta");

// respuesta de mensajes
const encriptando = document.getElementById("encriptando");
const imagen_encriptado = document.querySelector(".cargador")


// manejador de evento
mensaje.addEventListener("change", (e) => {
  const mensajeNew = e.target.value;
  return (mensajeGuardado = mensajeNew.toUpperCase());
});
// Diccionario bloqueador
const A_Z = {
  " ": "#",
  A: 1,
  B: 3,
  C: 5,
  D: 7,
  E: 9,
  F: 11,
  G: 13,
  H: 15,
  I: 17,
  J: 19,
  K: 21,
  L: 23,
  M: 25,
  N: 27,
  O: 29,
  P: 31,
  Q: 33,
  R: 35,
  S: 37,
  T: 39,
  U: 41,
  V: 43,
  W: 45,
  X: 47,
  Y: 49,
  Z: 51,
  ",": "?",
  ".": "$",
};
// Diccionario desbloqueador
const Z_A = {
  "#": " ",
  1: "A",
  3: "B",
  5: "C",
  7: "D",
  9: "E",
  11: "F",
  13: "G",
  15: "H",
  17: "I",
  19: "J",
  21: "K",
  23: "L",
  25: "M",
  27: "N",
  29: "O",
  31: "P",
  33: "Q",
  35: "R",
  37: "S",
  39: "T",
  41: "U",
  43: "V",
  45: "W",
  47: "X",
  49: "Y",
  51: "Z",
  "?": ",",
  "$": ".",
};

// Cifrar mensaje
function cifrarMensaje(claves) {
  return claves.map((clave) => A_Z[clave]);
}

function encriptarMensaje() {
  if (mensaje === "") {
    alert("ingresa mensaje");
  } else {
    let newElement = [];
    for (let i = 0; i < mensajeGuardado.length; i++) {
      newElement.push(mensajeGuardado[i]);
    }
    // console.log(newElement);  ['H', 'O', 'L', 'A', ' ', 'M', 'U', 'N', 'D', 'O']
    newElement.join("") // convertirlo en string HOLA MUNDO
    mensajeCifrado = cifrarMensaje(newElement);
    // console.log(mensajeCifrado); obtener mensaje cifrado [15, 29, 23, 1, '#', 25, 41, 27, 7, 29]
    
    // setTimeout(() => {

    // }, 4000)

    setTimeout(() => {
        setTimeout(() => {
            encriptando.innerText = "Mensaje encriptado"
            imagen_encriptado.style.background = `url("/candado-encriptado.png") no-repeat center`
            respuesta.innerText = mensajeCifrado;
        }, 1000)
        encriptando.innerText = "Encriptando ..."
    }, 2000)

    
    return mensajeCifrado;
  }
  

}

// DesCifrar mensaje
function descifrarMensaje(claves) {
  return claves.map((clave) => Z_A[clave]);
}

function desencriptarMensaje() {
  let newElement = [];
  let str = mensajeGuardado.toString();
  let aar = str.split(",");
  for (let i = 0; i < aar.length; i++) {
    newElement.push(aar[i]);
  }
//   console.log(newElement);
  mensajedescifrado = descifrarMensaje(newElement);
  setTimeout(() => {
    setTimeout(() => {
        imagen_encriptado.style.background = `url("/candado-desencriptado.png") no-repeat center`
        encriptando.innerText = "Mensaje desencriptado"
        respuesta.innerText = mensajedescifrado.join("");
    }, 1000)
    encriptando.innerText = "Desencriptando ..."
}, 2000)

}


// Copiar texto

const onclickCopiar = async () => {
  try {
    await navigator.clipboard.writeText(respuesta.innerHTML);
    alert("Contenido copiado al portapapeles");
  } catch (err) {
    alert("Error al copiar: ", err);
  }
};

