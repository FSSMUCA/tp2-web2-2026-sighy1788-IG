// Déclaration du tableau
const nombres = [
    0,
    NaN,
    Infinity,
    -Infinity,
    42,
    3.14,
    Number.MAX_SAFE_INTEGER + 1,
    -0
];

// Parcours du tableau
nombres.forEach(valeur => {

    let resultat;

    if (Number.isNaN(valeur)) {
        resultat = "INVALIDE";
    }
    else if (valeur === Infinity || valeur === -Infinity) {
        resultat = "INFINI";
    }
    else if (Object.is(valeur, -0)) {
        resultat = "ZERO NEGATIF";
    }
    else if (Number.isInteger(valeur) && Number.isSafeInteger(valeur)) {
        resultat = "ENTIER SUR";
    }
    else if (Number.isInteger(valeur) && !Number.isSafeInteger(valeur)) {
        resultat = "ENTIER HORS LIMITES";
    }
    else {
        resultat = "DECIMAL";
    }

    console.log(valeur, "→", resultat);
});