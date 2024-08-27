// javascript


let esami = [
    {
        materia: "Matematica",
        data: "27/08/2024",
        voto: 15,
    },
    {
        materia: "Scienze",
        data: "27/08/2024",
        voto: 26
    },
    {
        materia: "Informatica",
        data: "27/12/2024",
        voto: 30
    },  
];

// debugghiamo il funzionamento dell'array
console.table(esami);

// MILESTONE 1 controllo esami non passati e non passati


// dichiarazione arrays in cui pusheremo gli esami
let notPass = [];
let pass = [];

// tramite for iteriamo tutto array per trovare i voti maggiori di 18
for (let i = 0; i < esami.length; i++) {
    if (esami[i].voto < 18) {
        // pushamo in array NotPass
        notPass.push(esami[i]);
    }else{
        // pushamo in array pass
        pass.push(esami[i]);
    }
}
console.log("questi non sono passati ", notPass);
console.log("questi sono passati ", pass);

// MILESTONE 2 controllo esami piu alto
let esamePiuAlto = esami[0];
for (let i = 1; i < esami.length; i++) {
    if (esami[i].voto > esamePiuAlto.voto) {
        // confrontiamo il nuovo voto piu alto
        esamePiuAlto = esami[i];
    }
}
console.log("L'esame con il voto più alto è: ", esamePiuAlto);


// // dichiarazione arrays in cui pusheremo gli esami
// let notPass = [];
// let pass = [];
// let esamePiuAlto = esami[0];
// 
// // tramite for iteriamo tutto array per trovare i voti maggiori di 18
// for (let i = 0; i < esami.length; i++) {
//     if (esami[i].voto < 18) {
//         // pushamo in array NotPass
//         notPass.push(esami[i]);
//     }else{
//         // pushamo in array pass
//         pass.push(esami[i]);
//     }
    // if (esami[i].voto > esamePiuAlto.voto) {
       // confrontiamo il nuovo voto piu alto
//     esamePiuAlto = esami[i];
//    }
// }
// console.log("questi non sono passati ", notPass);
// console.log("questi sono passati ", pass);
// console.log("L'esame con il voto più alto è: ", esamePiuAlto);

