//Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.

//creo un array con la lista della spesa
const shoppigList = [
    'pane',
    'uova',
    'carne',
    'latte',
    'merendine',
    'pasta',
    'farina',
    'zucchero',
];

//seleziono l'elemento della dom su cui voglio stampare la mia lista della spesa

const ulElement= document.querySelector('ul');
console.log(ulElement)