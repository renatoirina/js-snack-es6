// Array di oggetti che rappresentano le persone
const persone = [
    { nome: "Marco", cognome: "Rossi", eta: 25 },
    { nome: "Anna", cognome: "Bianchi", eta: 17 },
    { nome: "Luca", cognome: "Verdi", eta: 30 },
    { nome: "Giulia", cognome: "Neri", eta: 16 },
    { nome: "Paolo", cognome: "Gialli", eta: 20 }
];

console.log("Array originale di persone:");
console.log(persone);

// Nuovo array con le frasi per ogni persona
const frasi = persone.map(persona => {
    // Verifico se la persona può guidare in base all'età
    const puoGuidare = persona.eta >= 18 ? "può guidare" : "non può guidare";
    
    // Creo la frase con nome, cognome e indicazione se può guidare
    return `${persona.nome} ${persona.cognome} ${puoGuidare}.`;
});

console.log("---------------");
console.log("Nuovo array con le frasi:");
console.log(frasi);
