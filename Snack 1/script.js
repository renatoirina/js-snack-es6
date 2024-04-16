// Array di oggetti che descrivono bici da corsa
const biciDaCorsa = [
    { nome: "Bici pedalata assistita", peso: 7.1 },
    { nome: "Bicicletta rubata dal vicino", peso: 6.8 },
    { nome: "Bici della vecchietta", peso: 7.3 }
  ];
  
  // Trovo la bici con il peso minore
  let biciPiuLeggera = biciDaCorsa[0];
  for (const bici of biciDaCorsa) {
    if (bici.peso < biciPiuLeggera.peso) {
      biciPiuLeggera = bici;
    }
  }
  
  // Stampo a schermo la bici con peso minore
  console.log(`La bici più leggera è la ${biciPiuLeggera.nome} con un peso di ${biciPiuLeggera.peso} kg.`);
  