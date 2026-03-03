let nomU = "   Fatima   ";
let ageU = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

// nom
let nomCorrige = nomU.trim() || "Inconnu";
console.log(`nom : "${nomCorrige}" (corrigé : espaces supprimés)`);

// age
let ageCorrige = parseInt(ageU);
console.log(
    isNaN(ageCorrige) || ageCorrige <= 0
        ? "age : valeur invalide"
        : `age : ${ageCorrige} (valide)`
);

// email
let positionArrobase = email.indexOf("@");
let emailValide =
    positionArrobase !== -1 &&
    email.indexOf(".", positionArrobase) !== -1;

console.log(
    `email : "${email}" (${emailValide ? "valide" : "invalide : pas de point après @"})`
);

// scoreJeu
let score = parseInt(scoreJeu);
if (isNaN(score)) score = 0;
console.log(`scoreJeu : ${score} (extrait depuis "${scoreJeu}")`);

// estAdmin (conversion correcte)
let adminBool = (estAdmin === "true");
console.log(
`estAdmin : ${adminBool} (attention : Boolean("false") = true)`
);

// derniereConnexion
let connexion = derniereConnexion ?? "Jamais connecté";
console.log(`derniereConnexion : "${connexion}" (valeur par défaut via ??)`);

// nombreConnexions
let nbConn = Number(nombreConnexions);
let affichageConn =
    nbConn === 0 ? "Aucune connexion" : nbConn;

console.log(`nombreConnexions : "${affichageConn}"`);

console.log("================================");