// Funzione per generare un numero random compreso tra min e max inclusi
function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Definizione delle squadre di calcio con solo il nome
const squadre = [
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];

// Generazione di numeri casuali per punti fatti e falli subiti per ogni squadra
squadre.forEach(squadra => {
  squadra.puntiFatti = generaNumeroRandom(0, 100);
  squadra.falliSubiti = generaNumeroRandom(0, 50);
});

// Creazione di un nuovo array con solo nomi e falli subiti utilizzando la destrutturazione
const squadreConFalli = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

// Stampa del nuovo array e dei dettagli delle squadre
console.log("Nuovo array con nomi e falli subiti:");
console.log(squadreConFalli);

console.log("----------");
console.log("Dettagli delle squadre:");
squadre.forEach(squadra => {
  console.log(`Nome: ${squadra.nome}, Punti fatti: ${squadra.puntiFatti}, Falli subiti: ${squadra.falliSubiti}`);
});
