let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// 1️⃣ Sous-total
let sousTotal = prix * quantite;
console.log("Sous-total :", sousTotal);

// 2️⃣ Réduction
let reduction = 0;

if (codePromo !== null && estMembre) {
    reduction = sousTotal * (reductionPourcentage ?? 0) / 100;
}

console.log("Réduction :", reduction);

// 3️⃣ Total final
let total = sousTotal - reduction;
console.log("Total final :", total);

// 4️⃣ Vérification paiement
let paiementAccepte = soldeCompte >= total;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

// 5️⃣ Nouveau solde
if (paiementAccepte) {
    soldeCompte -= total;
}

// 6️⃣ Récapitulatif
console.log(`
===== RÉCAPITULATIF =====
Produit   : ${nomProduit}
Quantité  : ${quantite}
Prix unit.: ${prix} MAD
Sous-total: ${sousTotal} MAD
Réduction : ${reduction} MAD
Total     : ${total} MAD
Statut    : ${paiementAccepte ? "Paiement accepté" : "Solde insuffisant"}
Solde     : ${soldeCompte} MAD
=========================
`);