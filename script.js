const costoKm = 0.21;


let km = parseFloat(prompt("inserisci qui i km che devi fare:"));
let eta = parseInt(prompt("inserisci qui la tua eta:"));


let prezzo = km * costoKm;
let finalCost = prezzo;

if (eta < 18) {
    finalCost = prezzo * 0.8;
}
else if (eta > 65) {
    finalCost = prezzo * 0.6;
 }
    
console.log("Prezzo finale: €" + finalCost.toFixed(2));