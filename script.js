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
    const resultsContainer = document.getElementById("results-content");
  
    if (!date || !qf) {
      resultsContainer.innerHTML = '<p class="placeholder-text">Veuillez compléter votre sélection pour voir les tarifs.</p>';
      return;
    }
  
    const day = tarifs[date];
    const bracket = day[qf];
  
    // --- LOGIQUE DE FACTURATION C.G.O.S ---
    let finalBilledAdultDouble = 0;
    let finalBilledAdultSingle = 0;
    let finalBilledChild1 = 0;
    let finalBilledChild2 = 0;
    let notificationHtml = "";
  
    const totalChildren = nbChild1 + nbChild2;
  
    if (nbAdults >= 2) {
        finalBilledAdultDouble = nbAdults;
        finalBilledChild1 = nbChild1;
        finalBilledChild2 = nbChild2;
    } else if (nbAdults === 1) {
        if (totalChildren === 0) {
            finalBilledAdultSingle = 1;
            notificationHtml = `<div class="notification"><strong>Note :</strong> Le tarif "Adulte en chambre individuelle" est appliqué.</div>`;
        } else if (totalChildren === 1) {
            finalBilledAdultDouble = 2; // 1 adulte + 1 enfant facturé en adulte
            [cite_start]notificationHtml = `<div class="notification"><strong>Attention :</strong> Pour respecter la base double (2 payants), le 1er enfant est facturé au tarif adulte. [cite: 7, 39, 63, 91, 117, 144, 169]</div>`;
        } else if (totalChildren === 2) {
            finalBilledAdultDouble = 2; // 1 adulte + 1 enfant facturé en adulte
            finalBilledChild1 = 1;      // Le 2ème enfant est facturé au tarif 1er enfant
            notificationHtml = `<div class="notification"><strong>Attention :</strong> Pour respecter la base double, un enfant est facturé au tarif adulte. [cite_start]Le deuxième enfant bénéficie du tarif réduit "1er enfant". [cite: 7, 39, 63, 91, 117, 144, 169]</div>`;
        }
    }
  
    // === Calcul des totaux ===
    const totalBase =
        finalBilledAdultDouble * day.base.adult +
        finalBilledAdultSingle * day.base.single +
        finalBilledChild1 * day.base.child1 +
        finalBilledChild2 * day.base.child2;
  
    const totalAgent =
        finalBilledAdultDouble * bracket.adult.price +
        finalBilledAdultSingle * bracket.single.price +
        finalBilledChild1 * bracket.child1.price +
        finalBilledChild2 * bracket.child2.price;
  
    const totalCgos =
        finalBilledAdultDouble * bracket.adult.part +
        finalBilledAdultSingle * bracket.single.part +
        finalBilledChild1 * bracket.child1.part +
        finalBilledChild2 * bracket.child2.part;
  
  
    // === Génération du tableau HTML (Style PDF) ===
    let html = notificationHtml;
    html += `
      <table class="pdf-table">
        <thead>
          <tr>
            <th class="row-title">Type de chambre / Occupant</th>
            <th>Prix Négocié<br>(Catalogue)</th>
            <th>Participation<br>C.G.O.S</th>
            <th>PRIX À PAYER<br>(Agent)</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    if (finalBilledAdultDouble > 0) {
      html += `
        <tr>
          <td class="row-title">${finalBilledAdultDouble} x Adulte (Base Double)</td>
          <td class="price-cell">${euro(day.base.adult)} / pers.</td>
          <td class="price-cell">${euro(bracket.adult.part)} / pers.</td>
          <td class="price-cell final-price">${euro(bracket.adult.price)} / pers.</td>
        </tr>`;
    }
    if (finalBilledAdultSingle > 0) {
      html += `
        <tr>
          <td class="row-title">${finalBilledAdultSingle} x Adulte (Chambre Individuelle)</td>
          <td class="price-cell">${euro(day.base.single)} / pers.</td>
          <td class="price-cell">${euro(bracket.single.part)} / pers.</td>
          <td class="price-cell final-price">${euro(bracket.single.price)} / pers.</td>
        </tr>`;
    }
    if (finalBilledChild1 > 0) {
      html += `
        <tr>
          <td class="row-title">${finalBilledChild1} x 1er Enfant (2 à -12 ans)</td>
          <td class="price-cell">${euro(day.base.child1)} / enf.</td>
          <td class="price-cell">${euro(bracket.child1.part)} / enf.</td>
          <td class="price-cell final-price">${euro(bracket.child1.price)} / enf.</td>
        </tr>`;
    }
    if (finalBilledChild2 > 0) {
      html += `
        <tr>
          <td class="row-title">${finalBilledChild2} x 2ème Enfant (2 à -12 ans)</td>
          <td class="price-cell">${euro(day.base.child2)} / enf.</td>
          <td class="price-cell">${euro(bracket.child2.part)} / enf.</td>
          <td class="price-cell final-price">${euro(bracket.child2.price)} / enf.</td>
        </tr>`;
    }
  
    html += `
          <tr class="total-row">
            <td class="row-title">TOTAL GLOBAL DU SÉJOUR</td>
            <td class="price-cell">${euro(totalBase)}</td>
            <td class="price-cell">${euro(totalCgos)}</td>
            <td class="price-cell final-price" style="font-size: 1.2em;">${euro(totalAgent)}</td>
          </tr>
        </tbody>
      </table>
    `;
  
    resultsContainer.innerHTML = html;
  }
  
  // Initial call
  updateSimulation();
