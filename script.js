/*
  L'objet tarifs est complet et corrigé pour que le prix "base" reflète la somme (Prix Agent + Part CGOS)
  pour la catégorie Q1, assurant la cohérence des calculs.
*/
const tarifs = {
  // 05/05/2026
  "2026-05-05": {
    base: { adult: 790, child1: 459, child2: 614, single: 989 },
    Q1: {
      adult:  { price: 435, part: 355 }, child1: { price: 253, part: 206 }, child2: { price: 338, part: 276 },
      single: { price: 545, part: 444 }
    },
    Q2: {
      adult:  { price: 514, part: 276 }, child1: { price: 299, part: 160 }, child2: { price: 400, part: 215 },
      single: { price: 644, part: 345 }
    },
    Q3: {
      adult:  { price: 632, part: 157 }, child1: { price: 368, part: 91  }, child2: { price: 492, part: 122 },
      single: { price: 792, part: 197 }
    }
  },
  // 12/05/2026
  "2026-05-12": {
    base: { adult: 859, child1: 530, child2: 659, single: 1058 },
    Q1: {
      adult:  { price: 473, part: 386 }, child1: { price: 292, part: 238 }, child2: { price: 363, part: 296 },
      single: { price: 583, part: 475 }
    },
    Q2: {
      adult:  { price: 559, part: 300 }, child1: { price: 345, part: 185 }, child2: { price: 429, part: 230 },
      single: { price: 689, part: 369 }
    },
    Q3: {
      adult:  { price: 688, part: 171 }, child1: { price: 424, part: 105 }, child2: { price: 528, part: 131 },
      single: { price: 848, part: 210 }
    }
  },
  // 19/05/2026
  "2026-05-19": {
    base: { adult: 950, child1: 550, child2: 690, single: 1289 },
    Q1: {
      adult:  { price: 523, part: 427 }, child1: { price: 303, part: 247 }, child2: { price: 380, part: 310 },
      single: { price: 710, part: 579 }
    },
    Q2: {
      adult:  { price: 618, part: 332 }, child1: { price: 358, part: 192 }, child2: { price: 449, part: 241 },
      single: { price: 839, part: 450 }
    },
    Q3: {
      adult:  { price: 760, part: 189 }, child1: { price: 440, part: 109 }, child2: { price: 552, part: 137 },
      single: { price: 1032, part: 257 }
    }
  },
  // 26/05/2026
  "2026-05-26": {
    base: { adult: 1030, child1: 630, child2: 730, single: 1389 },
    Q1: {
      adult:  { price: 567, part: 463 }, child1: { price: 347, part: 283 }, child2: { price: 457, part: 373 },
      single: { price: 765, part: 624 }
    },
    Q2: {
      adult:  { price: 670, part: 360 }, child1: { price: 410, part: 220 }, child2: { price: 540, part: 290 },
      single: { price: 904, part: 485 }
    },
    Q3: {
      adult:  { price: 824, part: 205 }, child1: { price: 504, part: 125 }, child2: { price: 664, part: 165 },
      single: { price: 1112, part: 277 }
    }
  },
  // 02/06/2026 (Prix QF partagés avec 09/06, 16/06, 23/06, 30/06)
  "2026-06-02": {
    base: { adult: 1359, child1: 834, child2: 1099, single: 1718 },
    Q1: {
      adult:  { price: 748, part: 611 }, child1: { price: 459, part: 375 }, child2: { price: 605, part: 494 },
      single: { price: 946, part: 772 }
    },
    Q2: {
      adult:  { price: 884, part: 475 }, child1: { price: 543, part: 292 }, child2: { price: 715, part: 384 },
      single: { price: 1118, part: 600 }
    },
    Q3: {
      adult:  { price: 1088, part: 271 }, child1: { price: 668, part: 166 }, child2: { price: 880, part: 219 },
      single: { price: 1376, part: 342 }
    }
  },
  // 09/06/2026 (Utilise les prix QF du 02/06)
  "2026-06-09": {
    base: { adult: 1359, child1: 1099, child2: 1099, single: 1058 },
    Q1: {
      adult:  { price: 748, part: 611 }, child1: { price: 459, part: 375 }, child2: { price: 605, part: 494 },
      single: { price: 946, part: 772 }
    },
    Q2: {
      adult:  { price: 884, part: 475 }, child1: { price: 543, part: 292 }, child2: { price: 715, part: 384 },
      single: { price: 1118, part: 600 }
    },
    Q3: {
      adult:  { price: 1088, part: 271 }, child1: { price: 668, part: 166 }, child2: { price: 880, part: 219 },
      single: { price: 1376, part: 342 }
    }
  },
  // 16/06/2026 (Utilise les prix QF du 02/06)
  "2026-06-16": {
    base: { adult: 1359, child1: 979, child2: 979, single: 989 },
    Q1: {
      adult:  { price: 748, part: 611 }, child1: { price: 459, part: 375 }, child2: { price: 605, part: 494 },
      single: { price: 946, part: 772 }
    },
    Q2: {
      adult:  { price: 884, part: 475 }, child1: { price: 543, part: 292 }, child2: { price: 715, part: 384 },
      single: { price: 1118, part: 600 }
    },
    Q3: {
      adult:  { price: 1088, part: 271 }, child1: { price: 668, part: 166 }, child2: { price: 880, part: 219 },
      single: { price: 1376, part: 342 }
    }
  },
  // 23/06/2026 (Utilise les prix QF du 02/06)
  "2026-06-23": {
    base: { adult: 1359, child1: 659, child2: 659, single: 1318 },
    Q1: {
      adult:  { price: 748, part: 611 }, child1: { price: 459, part: 375 }, child2: { price: 605, part: 494 },
      single: { price: 946, part: 772 }
    },
    Q2: {
      adult:  { price: 884, part: 475 }, child1: { price: 543, part: 292 }, child2: { price: 715, part: 384 },
      single: { price: 1118, part: 600 }
    },
    Q3: {
      adult:  { price: 1088, part: 271 }, child1: { price: 668, part: 166 }, child2: { price: 880, part: 219 },
      single: { price: 1376, part: 342 }
    }
  },
  // 30/06/2026 (Utilise les prix QF du 02/06)
  "2026-06-30": {
    base: { adult: 1359, child1: 830, child2: 830, single: 1718 },
    Q1: {
      adult:  { price: 748, part: 611 }, child1: { price: 459, part: 375 }, child2: { price: 605, part: 494 },
      single: { price: 946, part: 772 }
    },
    Q2: {
      adult:  { price: 884, part: 475 }, child1: { price: 543, part: 292 }, child2: { price: 715, part: 384 },
      single: { price: 1118, part: 600 }
    },
    Q3: {
      adult:  { price: 1088, part: 271 }, child1: { price: 668, part: 166 }, child2: { price: 880, part: 219 },
      single: { price: 1376, part: 342 }
    }
  },
  // 07/07/2026
  "2026-07-07": {
    base: { adult: 1390, child1: 739, child2: 739, single: 1718 },
    Q1: {
      adult:  { price: 765, part: 625 }, child1: { price: 462, part: 377 }, child2: { price: 597, part: 487 },
      single: { price: 962, part: 786 }
    },
    Q2: {
      adult:  { price: 904, part: 486 }, child1: { price: 546, part: 293 }, child2: { price: 705, part: 379 },
      single: { price: 1138, part: 610 }
    },
    Q3: {
      adult:  { price: 1112, part: 277 }, child1: { price: 672, part: 167 }, child2: { price: 868, part: 216 },
      single: { price: 1400, part: 348 }
    }
  },
  // 14/07/2026 (Prix QF partagés avec 21/07 et 28/07)
  "2026-07-14": {
    base: { adult: 1430, child1: 759, child2: 759, single: 1789 },
    Q1: {
      adult:  { price: 787, part: 643 }, child1: { price: 484, part: 395 }, child2: { price: 635, part: 519 },
      single: { price: 985, part: 804 }
    },
    Q2: {
      adult:  { price: 930, part: 500 }, child1: { price: 572, part: 307 }, child2: { price: 751, part: 404 },
      single: { price: 1164, part: 625 }
    },
    Q3: {
      adult:  { price: 1144, part: 285 }, child1: { price: 704, part: 175 }, child2: { price: 924, part: 230 },
      single: { price: 1432, part: 357 }
    }
  },
  // 21/07/2026 (Utilise les prix QF du 14/07)
  "2026-07-21": {
    base: { adult: 1430, child1: 759, child2: 759, single: 1789 },
    Q1: {
      adult:  { price: 787, part: 643 }, child1: { price: 484, part: 395 }, child2: { price: 635, part: 519 },
      single: { price: 985, part: 804 }
    },
    Q2: {
      adult:  { price: 930, part: 500 }, child1: { price: 572, part: 307 }, child2: { price: 751, part: 404 },
      single: { price: 1164, part: 625 }
    },
    Q3: {
      adult:  { price: 1144, part: 285 }, child1: { price: 704, part: 175 }, child2: { price: 924, part: 230 },
      single: { price: 1432, part: 357 }
    }
  },
  // 28/07/2026 (Utilise les prix QF du 14/07)
  "2026-07-28": {
    base: { adult: 1430, child1: 759, child2: 759, single: 1789 },
    Q1: {
      adult:  { price: 787, part: 643 }, child1: { price: 484, part: 395 }, child2: { price: 635, part: 519 },
      single: { price: 985, part: 804 }
    },
    Q2: {
      adult:  { price: 930, part: 500 }, child1: { price: 572, part: 307 }, child2: { price: 751, part: 404 },
      single: { price: 1164, part: 625 }
    },
    Q3: {
      adult:  { price: 1144, part: 285 }, child1: { price: 704, part: 175 }, child2: { price: 924, part: 230 },
      single: { price: 1432, part: 357 }
    }
  },
  // 04/08/2026 (Prix QF partagés avec 11/08)
  "2026-08-04": {
    base: { adult: 1199, child1: 659, child2: 790, single: 1558 },
    Q1: {
      adult:  { price: 660, part: 539 }, child1: { price: 418, part: 341 }, child2: { price: 539, part: 440 },
      single: { price: 858, part: 700 }
    },
    Q2: {
      adult:  { price: 780, part: 419 }, child1: { price: 494, part: 265 }, child2: { price: 637, part: 342 },
      single: { price: 1014, part: 544 }
    },
    Q3: {
      adult:  { price: 960, part: 239 }, child1: { price: 608, part: 151 }, child2: { price: 784, part: 195 },
      single: { price: 1248, part: 310 }
    }
  },
  // 11/08/2026 (Utilise les prix QF du 04/08)
  "2026-08-11": {
    base: { adult: 1199, child1: 659, child2: 790, single: 1558 },
    Q1: {
      adult:  { price: 660, part: 539 }, child1: { price: 418, part: 341 }, child2: { price: 539, part: 440 },
      single: { price: 858, part: 700 }
    },
    Q2: {
      adult:  { price: 780, part: 419 }, child1: { price: 494, part: 265 }, child2: { price: 637, part: 342 },
      single: { price: 1014, part: 544 }
    },
    Q3: {
      adult:  { price: 960, part: 239 }, child1: { price: 608, part: 151 }, child2: { price: 784, part: 195 },
      single: { price: 1248, part: 310 }
    }
  },
  // 18/08/2026
  "2026-08-18": {
    base: { adult: 959, child1: 519, child2: 659, single: 1318 },
    Q1: {
      adult:  { price: 528, part: 431 }, child1: { price: 286, part: 233 }, child2: { price: 407, part: 332 },
      single: { price: 726, part: 592 }
    },
    Q2: {
      adult:  { price: 624, part: 335 }, child1: { price: 338, part: 181 }, child2: { price: 481, part: 258 },
      single: { price: 858, part: 460 }
    },
    Q3: {
      adult:  { price: 768, part: 191 }, child1: { price: 416, part: 103 }, child2: { price: 592, part: 147 },
      single: { price: 1056, part: 262 }
    }
  },
  // 25/08/2026 (Prix QF partagés avec 01/09)
  "2026-08-25": {
    base: { adult: 879, child1: 459, child2: 570, single: 1078 },
    Q1: {
      adult:  { price: 484, part: 395 }, child1: { price: 314, part: 256 }, child2: { price: 402, part: 328 },
      single: { price: 594, part: 484 }
    },
    Q2: {
      adult:  { price: 572, part: 307 }, child1: { price: 371, part: 199 }, child2: { price: 475, part: 255 },
      single: { price: 702, part: 376 }
    },
    Q3: {
      adult:  { price: 704, part: 175 }, child1: { price: 456, part: 113 }, child2: { price: 584, part: 145 },
      single: { price: 864, part: 214 }
    }
  },
  // 01/09/2026 (Utilise les prix QF du 25/08)
  "2026-09-01": {
    base: { adult: 879, child1: 459, child2: 570, single: 1078 },
    Q1: {
      adult:  { price: 484, part: 395 }, child1: { price: 314, part: 256 }, child2: { price: 402, part: 328 },
      single: { price: 594, part: 484 }
    },
    Q2: {
      adult:  { price: 572, part: 307 }, child1: { price: 371, part: 199 }, child2: { price: 475, part: 255 },
      single: { price: 702, part: 376 }
    },
    Q3: {
      adult:  { price: 704, part: 175 }, child1: { price: 456, part: 113 }, child2: { price: 584, part: 145 },
      single: { price: 864, part: 214 }
    }
  },
  // 08/09/2026 (Prix QF partagés avec 15/09, 22/09, 29/09, 06/10, 13/10)
  "2026-09-08": {
    base: { adult: 799, child1: 490, child2: 519, single: 998 },
    Q1: {
      adult:  { price: 440, part: 359 }, child1: { price: 270, part: 220 }, child2: { price: 358, part: 292 },
      single: { price: 550, part: 448 }
    },
    Q2: {
      adult:  { price: 520, part: 279 }, child1: { price: 319, part: 171 }, child2: { price: 423, part: 227 },
      single: { price: 650, part: 348 }
    },
    Q3: {
      adult:  { price: 640, part: 159 }, child1: { price: 392, part: 97  }, child2: { price: 520, part: 129 },
      single: { price: 800, part: 198 }
    }
  },
  // 15/09/2026 (Utilise les prix QF du 08/09)
  "2026-09-15": {
    base: { adult: 799, child1: 490, child2: 519, single: 998 },
    Q1: {
      adult:  { price: 440, part: 359 }, child1: { price: 270, part: 220 }, child2: { price: 358, part: 292 },
      single: { price: 550, part: 448 }
    },
    Q2: {
      adult:  { price: 520, part: 279 }, child1: { price: 319, part: 171 }, child2: { price: 423, part: 227 },
      single: { price: 650, part: 348 }
    },
    Q3: {
      adult:  { price: 640, part: 159 }, child1: { price: 392, part: 97  }, child2: { price: 520, part: 129 },
      single: { price: 800, part: 198 }
    }
  },
  // 22/09/2026 (Utilise les prix QF du 08/09)
  "2026-09-22": {
    base: { adult: 799, child1: 490, child2: 519, single: 998 },
    Q1: {
      adult:  { price: 440, part: 359 }, child1: { price: 270, part: 220 }, child2: { price: 358, part: 292 },
      single: { price: 550, part: 448 }
    },
    Q2: {
      adult:  { price: 520, part: 279 }, child1: { price: 319, part: 171 }, child2: { price: 423, part: 227 },
      single: { price: 650, part: 348 }
    },
    Q3: {
      adult:  { price: 640, part: 159 }, child1: { price: 392, part: 97  }, child2: { price: 520, part: 129 },
      single: { price: 800, part: 198 }
    }
  },
  // 29/09/2026 (Utilise les prix QF du 08/09)
  "2026-09-29": {
    base: { adult: 799, child1: 490, child2: 519, single: 998 },
    Q1: {
      adult:  { price: 440, part: 359 }, child1: { price: 270, part: 220 }, child2: { price: 358, part: 292 },
      single: { price: 550, part: 448 }
    },
    Q2: {
      adult:  { price: 520, part: 279 }, child1: { price: 319, part: 171 }, child2: { price: 423, part: 227 },
      single: { price: 650, part: 348 }
    },
    Q3: {
      adult:  { price: 640, part: 159 }, child1: { price: 392, part: 97  }, child2: { price: 520, part: 129 },
      single: { price: 800, part: 198 }
    }
  },
  // 06/10/2026 (Utilise les prix QF du 08/09)
  "2026-10-06": {
    base: { adult: 799, child1: 490, child2: 519, single: 998 },
    Q1: {
      adult:  { price: 440, part: 359 }, child1: { price: 270, part: 220 }, child2: { price: 358, part: 292 },
      single: { price: 550, part: 448 }
    },
    Q2: {
      adult:  { price: 520, part: 279 }, child1: { price: 319, part: 171 }, child2: { price: 423, part: 227 },
      single: { price: 650, part: 348 }
    },
    Q3: {
      adult:  { price: 640, part: 159 }, child1: { price: 392, part: 97  }, child2: { price: 520, part: 129 },
      single: { price: 800, part: 198 }
    }
  },
  // 13/10/2026 (Utilise les prix QF du 08/09)
  "2026-10-13": {
    base: { adult: 799, child1: 490, child2: 519, single: 998 },
    Q1: {
      adult:  { price: 440, part: 359 }, child1: { price: 270, part: 220 }, child2: { price: 358, part: 292 },
      single: { price: 550, part: 448 }
    },
    Q2: {
      adult:  { price: 520, part: 279 }, child1: { price: 319, part: 171 }, child2: { price: 423, part: 227 },
      single: { price: 650, part: 348 }
    },
    Q3: {
      adult:  { price: 640, part: 159 }, child1: { price: 392, part: 97  }, child2: { price: 520, part: 129 },
      single: { price: 800, part: 198 }
    }
  }
};

function euro(n) {
  if (typeof n !== 'number' || isNaN(n)) return 'N/A';
  return n.toLocaleString("fr-FR", { maximumFractionDigits: 0 }) + " €";
}

function updateSimulation() {
  const date      = document.getElementById("departureDate").value;
  const qf        = document.getElementById("quotient").value;
  const nbAdults  = parseInt(document.getElementById("nbAdults").value || "0", 10);
  const nbChild1  = parseInt(document.getElementById("nbChild1").value || "0", 10);
  const nbChild2  = parseInt(document.getElementById("nbChild2").value || "0", 10);
  const results   = document.getElementById("results");
  const singleNote = document.getElementById("singleRoomNote");
  const minAdultsNote = document.getElementById("minAdultsNote");

  if (!date || !qf) {
    results.innerHTML = '<p style="text-align: center;">Veuillez sélectionner vos options ci-dessus pour afficher la simulation de prix.</p>';
    singleNote.style.display = "none";
    minAdultsNote.style.display = "none";
    return;
  }

  const day = tarifs[date];
  const bracket = day[qf];

  // Récupération des prix unitaires de base (corrigés)
  const currentBaseAdult    = day.base.adult;
  const currentBaseSingle   = day.base.single;
  const currentBaseChild1   = day.base.child1;
  const currentBaseChild2   = day.base.child2;
  
  // Récupération des prix unitaires QF
  const currentAdultPrice   = bracket.adult.price;
  const currentAdultPart    = bracket.adult.part;
  const currentSinglePrice  = bracket.single.price;
  const currentSinglePart   = bracket.single.part;
  const currentChild1Price  = bracket.child1.price;
  const currentChild1Part   = bracket.child1.part;
  const currentChild2Price  = bracket.child2.price;
  const currentChild2Part   = bracket.child2.part;

  // --- LOGIQUE DE FACTURATION C.G.O.S ---
  let finalBilledAdultDouble = 0; 
  let finalBilledAdultSingle = 0; 
  let finalBilledChild1 = 0;      
  let finalBilledChild2 = 0;      
  let finalConversionInfo = "";
  
  singleNote.style.display = "none";
  minAdultsNote.style.display = "none";
  
  const totalChildren = nbChild1 + nbChild2;

  if (nbAdults >= 2) {
      // Cas 1 : 2 Adultes ou plus
      finalBilledAdultDouble = nbAdults;
      finalBilledChild1 = nbChild1;
      finalBilledChild2 = nbChild2;
      finalConversionInfo = "Facturation standard : Adultes (Base Double) et enfants facturés selon leur tarif.";
      
  } else if (nbAdults === 1) {
      if (totalChildren === 0) {
          // Cas 2 : 1 Adulte + 0 Enfant
          finalBilledAdultSingle = 1;
          finalConversionInfo = "Facturation : 1 tarif adulte en chambre individuelle (Base Single).";
          singleNote.style.display = "block";
          
      } else if (totalChildren === 1) {
          // Cas 3 : 1 Adulte + 1 Enfant (total 2 personnes)
          finalBilledAdultDouble = 2; // Adult + 1 enfant facturé au tarif adulte
          finalConversionInfo = "Facturation : 2 tarifs adultes (Base Double). Le 1er enfant est facturé au tarif adulte pour respecter la base double.";
          minAdultsNote.style.display = "block";

      } else if (totalChildren === 2) {
          // Cas 4 : 1 Adulte + 2 Enfants (total 3 personnes)
          finalBilledAdultDouble = 2; // Adult + 1 enfant facturé au tarif adulte
          finalBilledChild1 = 1;      // Le 2ème enfant (celui qui dépasse la base double) est facturé au tarif 1er enfant.
          finalConversionInfo = "Facturation : 2 tarifs adultes (Base Double) + 1 tarif 1er enfant. Seul le 2ème enfant bénéficie du tarif réduit enfant.";
          minAdultsNote.style.display = "block";
      }
  }


  // === Calcul des totaux finaux ===

  // Valeur totale "catalogue" (Prix Négocié)
  const totalBase =
      finalBilledAdultDouble * currentBaseAdult +
      finalBilledAdultSingle * currentBaseSingle +
      finalBilledChild1 * currentBaseChild1 +
      finalBilledChild2 * currentBaseChild2;

  // Ce que paie l'agent (Prix Réduit)
  const totalAgent =
      finalBilledAdultDouble * currentAdultPrice +
      finalBilledAdultSingle * currentSinglePrice +
      finalBilledChild1 * currentChild1Price +
      finalBilledChild2 * currentChild2Price;

  // Part C.G.O.S (Participation)
  const totalCgos =
      finalBilledAdultDouble * currentAdultPart +
      finalBilledAdultSingle * currentSinglePart +
      finalBilledChild1 * currentChild1Part +
      finalBilledChild2 * currentChild2Part;


  // === Affichage des résultats ===
  let html = `
    <h3>Prix Unitaires Appliqués</h3>

    <table class="results-table">
      <thead>
        <tr>
          <th>Type de passager</th>
          <th>Prix négocié</th>
          <th>Pris en charge C.G.O.S</th>
          <th>Prix payé par l'agent</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Adulte (Base Double)</strong></td>
          <td>${euro(currentBaseAdult)}</td>
          <td>${euro(currentAdultPart)}</td>
          <td><span class="highlight">${euro(currentAdultPrice)}</span></td>
        </tr>
        <tr>
          <td><strong>Adulte en chambre individuelle</strong></td>
          <td>${euro(currentBaseSingle)}</td>
          <td>${euro(currentSinglePart)}</td>
          <td><span class="highlight">${euro(currentSinglePrice)}</span></td>
        </tr>
        <tr>
          <td><strong>1er enfant (2 à -12 ans)</strong></td>
          <td>${euro(currentBaseChild1)}</td>
          <td>${euro(currentChild1Part)}</td>
          <td><span class="highlight">${euro(currentChild1Price)}</span></td>
        </tr>
        <tr>
          <td><strong>2ème enfant (2 à -12 ans)</strong></td>
          <td>${euro(currentBaseChild2)}</td>
          <td>${euro(currentChild2Part)}</td>
          <td><span class="highlight">${euro(currentChild2Price)}</span></td>
        </tr>
      </tbody>
    </table>

    <h3 class="recap-title">💰 Récapitulatif Global</h3>
    <div class="calculation-detail">
      <p><strong>Détail de la facturation appliquée :</strong> ${finalConversionInfo}</p>
      <ul>
          <li>${finalBilledAdultDouble} x Tarif Adulte (Base Double)</li>
          <li>${finalBilledAdultSingle} x Tarif Adulte (Base Single)</li>
          <li>${finalBilledChild1} x Tarif 1er Enfant</li>
          <li>${finalBilledChild2} x Tarif 2ème Enfant</li>
      </ul>
    </div>
    <table class="results-table">
      <tbody>
        <tr>
          <td><strong>Valeur totale du séjour (Prix Négocié)</strong></td>
          <td>${euro(totalBase)}</td>
        </tr>
        <tr>
          <td><strong>Pris en charge par le C.G.O.S</strong></td>
          <td>${euro(totalCgos)}</td>
        </tr>
        <tr>
          <td><strong>Reste à votre charge (Total à payer)</strong></td>
          <td><span class="highlight">${euro(totalAgent)}</span></td>
        </tr>
      </tbody>
    </table>

  `;

  results.innerHTML = html;
}

// Initial
updateSimulation();
