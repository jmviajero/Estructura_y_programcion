//Space seed 
//Apartado 1

type pasajeros={
    nombre?:string,
    lugarorigen?:string,
    altura:number,
    peso:number,
    genero:string;
}

//Apartado 2

interface nave{
    listapasajeros:pasajeros[],
    peso:number,
    dimensiones:number,
    velcurva:number;
}

//Apartado 3

let Enterprise:nave={
    peso: 3000,
    dimensiones: 124,
    velcurva: 257,
    listapasajeros: []
};

let pasajes:pasajeros[]=[
    {
        nombre:"juan",
        altura: 1.78,
        peso: 86,
        genero: "Masculino"
    },
    {

        altura: 1.78,
        peso: 86,
        genero: "Masculino"
    },
    {
        nombre:"Nacho",
        altura: 1.78,
        peso: 86,
        genero: "Masculino"
    }
];

Enterprise.listapasajeros=pasajes;

//Apartado 4

Enterprise.listapasajeros
    .filter((elem) => elem.nombre)
    .forEach((elem) => console.log(Object.values(elem)));

//This Side of paradise
//Apartado 1

type enfermo ={
    infectado:boolean;
}&pasajeros;

const pasa:enfermo[]=[
    {
        nombre:"Juan",
        peso:81,
        infectado:true,
        altura:143,
        genero:"Masculino"
    },
    {
        nombre:"Sara",
        peso:51,
        infectado:false,
        altura:123,
        genero:"Femenino"
    },
    {
        nombre:"Maria",
        peso:65,
        infectado:true,
        altura:143,
        genero:"Femenino"
    },
    {
        nombre:"Marcos",
        peso:65,
        infectado:false,
        altura:192,
        genero:"Masculino"
    }
];
console.log("\nListado de personas sanas:");
pasa.forEach(elem => (elem.infectado===false)&& console.log(elem.nombre));

//Apartado 2

const hayin=(a:enfermo[])=>{
    const invec:boolean=a.some(elem=> elem.infectado);

    (invec===false)&& console.log("No hay nadie infectado");
    (invec===false) || console.log("Si hay infectados");
}
const Sanos=(a:enfermo[])=>{
    const invec=a.every(elem=> elem.infectado);

    (invec===true)&& console.log("Todos sanos");
    (invec===true) || console.log("Hay algun infectado");
}

const prox_in=(a:enfermo[])=>{
    const primerinfec=pasa.find(elem=> elem.infectado);

    console.log("El proximo infectado es el:");
    console.log(primerinfec);
    
}


hayin(pasa);

Sanos(pasa);

prox_in(pasa);

//The City on The Edge of Forever
//Apartado 1

console.log("El listado de fechas es:")

const listfechas:Array<number>=[2 , 3 , 4 , 1.4 , 4.5 , 0 , -3 , 7];

const fechas=listfechas.filter(elem=> typeof elem==="number" && elem%1===0 && elem>0)
console.log(fechas);

//Apartado 2

const fechas2=fechas.map(elem => new Date(elem, 6, 9 ,12 ,30 ,0));
console.log(fechas2);


//The Trouble with Tribbles
//Apartado 1

type Turboconductor = {
    numero: number,
    daños: number,
    tribbles: number;
  };

let listadaños:Turboconductor[]=[
    {
        numero: 1,
        daños:12,
        tribbles:234,
    },
    {
        numero: 2,
        daños:23,
        tribbles:123,
    },
    {
        numero: 3,
        daños:49,
        tribbles:221,
    },
    {
        numero: 4,
        daños:19,
        tribbles:24,
    },
    {
        numero: 5,
        daños:53,
        tribbles:75,
    },
];

const numtot=listadaños
    .filter(elem=> elem.daños>20)
    .reduce( (total ,elem) =>total  + elem.tribbles , 0 );

console.log("Num total de daños de tribbles mayores de 20-> " + numtot);

const señal=listadaños
    .flatMap(elem=> [elem.daños, elem.numero, elem.tribbles]);

console.log(señal);

const comparedaño=listadaños
    .filter(elem=> elem.tribbles> 1.5* elem.daños)
    .flatMap(elem=> [elem.daños, elem.numero, elem.tribbles]);

console.log(comparedaño);


