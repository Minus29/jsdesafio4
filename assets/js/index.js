const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];



/* funcion para renderizar cada card una a la vez */
function renderizado(propiedad) {

  let template = `
    <div class="propiedad">
    <div class="img" style="background-image: url('${propiedad.src}')"></div>
    <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
        </div>
        <p class="my-3">${propiedad.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
</div>
`;

  return template;

};

/* for para aplicar la funcion antes indicada, esto para renderizar todas las card es decir, un ciclo */

let vacio = ""
for (const propiedad of propiedadesJSON) {
  vacio += renderizado(propiedad);
}

/* aplicar las funciones al DOM */

/* const html = renderizado(propiedadesJSON[0]);*/
const propiedadesDiv = document.querySelector('.propiedades');
propiedadesDiv.innerHTML = vacio;



/* Funcion para filtrar */

function filtrado() {
  const cantidadCuartos = document.querySelector('#cuartos').value;
  const metrosDesde = document.querySelector('#desde').value;
  const metrosHasta = document.querySelector('#hasta').value;

  if (cantidadCuartos == "" || metrosDesde == "" || metrosHasta == "") {
    alert('Debe enviar todos los datos');
  }

  let cantidadInmuebles = 0;
  let filtrando = ""
  for (const inmueble of propiedadesJSON) {
    if (cantidadCuartos == inmueble.rooms &&
      (inmueble.m >= metrosDesde && inmueble.m <= metrosHasta)) {
      filtrando += renderizado(inmueble);
      cantidadInmuebles++;
    }
  };
  propiedadesDiv.innerHTML = filtrando;
  const totalElementos = document.querySelector('#totalElementos')
  totalElementos.innerHTML = cantidadInmuebles
}






