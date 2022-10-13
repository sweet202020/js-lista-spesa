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
/* console.log(ulElement) */

let i=0
while(i<shoppigList.length){
    const shop = shoppigList[i];
    /* console.log(shop); */
    const liElement = `<li>${shop}</li>`;
    ulElement.insertAdjacentHTML('beforeend', liElement);
    i++;
}