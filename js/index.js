let alumnos = [
    {tipodoc: "CC",
        documento: 1000135417,
        nombres: "Yudi Xiomara",
        apellidos: "Molina Forero",
        genero: "F",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1000990991,
        nombres: "Arleth Duvan",
        apellidos: "Ramirez Vera",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1092157210,
        nombres: "Karla Andrea",
        apellidos: "Loepardi Gomez",
        genero: "F",
        estado: "R",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1000988685,
        nombres: "Geraldine Fabiana",
        apellidos: "Ria�o Vargas",
        genero: "F",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1031642892,
        nombres: "Daniela",
        apellidos: "Navarro Ascencio",
        genero: "F",
        estado: "R",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1026581688,
        nombres: "Diana Mayerly",
        apellidos: "Ahumada Mahecha",
        genero: "F",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1070326569,
        nombres: "Carlos Manuel",
        apellidos: "Mej�a Herrera",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1030697126,
        nombres: "Diego Fernando",
        apellidos: "Guatibonza Erazo",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1000934782,
        nombres: "Laura Alejandra",
        apellidos: "Sandoval Salazar",
        genero: "F",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1011088352,
        nombres: "Nicolas",
        apellidos: "Henao Martinez",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "TI",
        documento: 1028481888,
        nombres: "Thomas Jefrey",
        apellidos: "Rodriguez Ospina",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1034278726,
        nombres: "Natalia",
        apellidos: "Garcia Moreno",
        genero: "F",
        estado: "R",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1013576918,
        nombres: "Daniela Valentina",
        apellidos: "Barrera Oses",
        genero: "F",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1000381531,
        nombres: "Carlos Andres",
        apellidos: "Morales Montes",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1013099099,
        nombres: "Maria Paula",
        apellidos: "Arias Hurtado",
        genero: "F",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1073709068,
        nombres: "Santiago",
        apellidos: "Mejia Bernal",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1073695794,
        nombres: "Nataly",
        apellidos: "Sosa Yara",
        genero: "F",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "TI",
        documento: 1064193348,
        nombres: "Marcos El�as",
        apellidos: "Montes Cruz",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1030697209,
        nombres: "Luis Alberto",
        apellidos: "Martinez Martinez",
        genero: "M",
        estado: "R",
        ciudadnac: "Bogotá",
    },
    {tipodoc: "CC",
        documento: 1032511437,
        nombres: "Richard Efrain",
        apellidos: "Marcano Vargas",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogot�",
    },
    {tipodoc: "CC",
        documento: 1000255735,
        nombres: "Sergio Antonio",
        apellidos: "Morales Zamudio",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogot�",
    },
    {tipodoc: "CC",
        documento: 1002800495,
        nombres: "Giovany",
        apellidos: "Zuluaga Manrique",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogot�",
    },
    {tipodoc: "CC",
        documento: 1024473795,
        nombres: "Jeison Alejandro",
        apellidos: "Zambrano Alzate",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogot�",
    },
    {tipodoc: "CC",
        documento: 1043639243,
        nombres: "Dilan Jose",
        apellidos: "Villa Ramos",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogot�",
    },
    {tipodoc: "CC",
        documento: 1000129971,
        nombres: "Santiago",
        apellidos: "Henao Ot�lora",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogot�",
    },
    {tipodoc: "CC",
        documento: 1193549523,
        nombres: "Brayan Steven",
        apellidos: "Ramirez Diaz",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogot�",
    },
    {tipodoc: "CC",
        documento: 1123800894,
        nombres: "Juan David",
        apellidos: "Hurtado Rodriguez",
        genero: "M",
        estado: "A",
        ciudadnac: "Bogot�",
    },
]


function Buscar() {
    // Obtiene el número de documento del campo de texto y lo convierte a entero. Si está vacío, asigna 0.
    let doc = parseInt(document.getElementById("tex-doc").value) || 0;

    // Busca un alumno en el arreglo `alumnos` cuyo documento coincida con el ingresado.
    let busqueda = alumnos.find(i => i.documento === doc);

    // Si no se encuentra el alumno, muestra un mensaje indicando que es nuevo.
    if (!busqueda) {
        alert("Es un alumno nuevo");
    } else {
        // Si se encuentra, llena los campos del formulario con los datos del alumno.
        document.getElementById("tex-nombre").value = busqueda.nombres;
        document.getElementById("tex-tipo-doc").value = busqueda.tipodoc;
        document.getElementById("tex-apellido").value = busqueda.apellidos;
        document.getElementById("tex-genero").value = busqueda.genero;
        document.getElementById("tex-ciudad-nac").value = busqueda.ciudadnac;
        document.getElementById("tex-estado").value = busqueda.estado;
    }
}

function Guardar() {
    // Obtiene el número de documento y lo convierte a entero. Si está vacío, asigna 0.
    let doc = parseInt(document.getElementById("tex-doc").value) || 0;

    // Verifica si ya existe un alumno con el mismo documento. Si sí, muestra una alerta y termina.
    if (alumnos.find(i => i.documento === doc)) {
        alert("El alumno ya existe.");
        return;
    }

    // Crea un objeto con los datos del nuevo alumno, obtenidos del formulario.
    let newAlum = {
        tipodoc: document.getElementById("tex-tipo-doc").value || "",
        documento: doc,
        nombres: document.getElementById("tex-nombre").value || "",
        apellidos: document.getElementById("tex-apellido").value || "",
        genero: document.getElementById("tex-genero").value || "",
        estado: document.getElementById("tex-estado").value || "",
        ciudadnac: document.getElementById("tex-ciudad-nac").value || "",
    };

    // Agrega el nuevo alumno al arreglo `alumnos` y muestra un mensaje de éxito.
    alumnos.push(newAlum);
    alert("Alumno guardado exitosamente.");
}


function Modificar() {
    // Obtiene el número de documento y lo convierte a entero.
    let doc = parseInt(document.getElementById("tex-doc").value) || 0;

    // Busca el índice del alumno en el arreglo `alumnos` cuyo documento coincida.
    let indice = alumnos.findIndex(i => i.documento === doc);

    // Si el alumno existe, actualiza sus datos con los valores del formulario.
    if (indice !== -1) {
        alumnos[indice].tipodoc = document.getElementById("tex-tipo-doc").value || "";
        alumnos[indice].nombres = document.getElementById("tex-nombre").value || "";
        alumnos[indice].apellidos = document.getElementById("tex-apellido").value || "";
        alumnos[indice].genero = document.getElementById("tex-genero").value || "";
        alumnos[indice].estado = document.getElementById("tex-estado").value || "";
        alumnos[indice].ciudadnac = document.getElementById("tex-ciudad-nac").value || "";
        alert("Alumno modificado exitosamente.");
    } else {
        // Si no existe, muestra un mensaje de error.
        alert("Alumno no encontrado.");
    }
}

function BusquedaMasiva() {
    // Obtiene los valores de los filtros desde los campos de texto.
    let tipDoc = document.getElementById("tex-tipo-doc").value;
    let nom = document.getElementById("tex-nombre").value;
    let ape = document.getElementById("tex-apellido").value;
    let gen = document.getElementById("tex-genero").value;
    let est = document.getElementById("tex-estado").value;
    let ciu = document.getElementById("tex-ciudad-nac").value;

    // Filtra los alumnos que cumplen con todos los criterios ingresados.
    let encontrado = alumnos.filter(
        x => x.nombres.includes(nom) &&
            x.tipodoc.includes(tipDoc) &&
            x.apellidos.includes(ape) &&
            x.genero.includes(gen) &&
            x.estado.includes(est) &&
            x.ciudadnac.includes(ciu)
    );

    // Genera filas HTML con los datos de los alumnos encontrados.
    let salida = "";

    encontrado.forEach(i => {
        let generoCom = Generos.find(g => g.cod_genero === i.genero)?.des_genero;
        let actRet = Estados.find(e => e.cod_estado === i.estado)?.des_estado;
        let docCom = Tiposdoc.find(h => h.tipodoc === i.tipodoc)?.des_tipodoc;

        salida += `
        <tr>
            <td>${i.documento}</td>
            <td>${docCom}</td>
            <td>${i.nombres}</td>
            <td>${i.apellidos}</td>
            <td>${generoCom}</td>
            <td>${actRet}</td>
            <td>${i.ciudadnac}</td>
        </tr>`;
    });

    // Inserta las filas generadas en la tabla con ID "cuerpo".
    document.getElementById("cuerpo").innerHTML = salida;
}

function Retirado() {
    // Obtiene el número de documento y lo convierte a entero.
    let doc = parseInt(document.getElementById("tex-doc").value) || 0;

    // Busca el índice del alumno en el arreglo.
    let indice = alumnos.findIndex(i => i.documento === doc);

    // Si el alumno existe, actualiza su estado a "R" (Retirado).
    if (indice !== -1) {
        alumnos[indice].estado = "R";
        alert("Alumno retirado exitosamente.");
    } else {
        // Si no existe, muestra un mensaje de error.
        alert("Alumno no encontrado.");
    }
}

function EstadoCam() {
    let estadoCam = "";

    // Recorre la lista `Estados` y genera opciones HTML.
    Estados.forEach(x => {
        estadoCam += `
        <option value="${x.cod_estado}">${x.des_estado}</option>
        `;
    });

    // Inserta las opciones generadas en el campo con ID "tex-estado".
    document.getElementById("tex-estado").innerHTML = estadoCam;
}

function Geners() {
    let geneross = "";

    // Recorre la lista `Generos` y genera opciones HTML.
    Generos.forEach(x => {
        geneross += `
        <option value="${x.cod_genero}">${x.des_genero}</option>
        `;
    });

    // Inserta las opciones generadas en el campo con ID "tex-genero".
    document.getElementById("tex-genero").innerHTML = geneross;
}

function tiposDoc() {
    let docTipo = "";

    // Recorre la lista `Tiposdoc` y genera opciones HTML.
    Tiposdoc.forEach(x => {
        docTipo += `
        <option value="${x.tipodoc}">${x.des_tipodoc}</option>
        `;
    });

    // Inserta las opciones generadas en el campo con ID "tex-tipo-doc".
    document.getElementById("tex-tipo-doc").innerHTML = docTipo;
}
