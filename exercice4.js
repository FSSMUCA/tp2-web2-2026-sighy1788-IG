let pairs = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let compteur = 0;

for (let i = 0; i < pairs.length; i++) {
    let a = pairs[i][0];
    let b = pairs[i][1];

    let eq = (a == b);
    let strictEq = (a === b);

    if (eq === true && strictEq === false) {
        compteur++;
    }

    console.log(
        JSON.stringify(a) + " == " + JSON.stringify(b) + 
        " -> " + eq +
        "    |   " +
        JSON.stringify(a) + " === " + JSON.stringify(b) +
        " -> " + strictEq
    );
}

console.log("---");
console.log(compteur + " paire(s) où == et === donnent des résultats différents");