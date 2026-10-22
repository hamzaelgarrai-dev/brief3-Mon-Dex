//Validation de Form

//regex value

const idRegex = /^#\d{3}$/;
const nameRegex = /^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/ ;
const statRegex = /^\d{1,3}$/ ;
const imageRegex = /^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i;
const descriptionRegex = /^[\s\S]{10,200}$/ ;



const form = document.getElementById('creature-form');
const fields = document.querySelectorAll(".field");
const idInput = document.querySelector('[name = "id"]');
const nameInput = document.querySelector('[name = "name"]');
const typeInput = document.querySelector('[name = "type"]');
const levelInput = document.querySelector('[name = "level"]');
const stat1Input = document.querySelector('[name = "stat1"]');
const stat2Input = document.querySelector('[name = "stat2"]');
const stat3Input = document.querySelector('[name = "stat3"]');
const imageInput = document.querySelector('[name = "image"]');
const descriptionInput = document.querySelector('[name = "description"]');







const inputsValidation = () => {
    let isvalid = false;
    fields.forEach((field) => {
        field.addEventListener("input", () => {
            field.nextElementSibling.textContent = "";
            field.style.border = "";

            const value = field.value.trim();

            if (value === "") {
                return;
            }

            if(field === idInput && !idRegex.test(value)){

                field.nextElementSibling.textContent = "# suivi de 3 chiffres";
                field.nextElementSibling.style.color = "red";
                field.style.border = "1px solid red";
            }
            else if(field === nameInput && !nameRegex.test(value)) {
                field.nextElementSibling.textContent = "2 à 30 caractères";
                field.nextElementSibling.style.color = "red";
                field.style.border = "1px solid red";

            }
            else if(field === stat1Input && !statRegex.test(value)){

                field.nextElementSibling.textContent = "Invalid Format";
                field.nextElementSibling.style.color = "red";
                field.style.border = "1px solid red";

            }
            else if(field === stat2Input && !statRegex.test(value)){
                field.nextElementSibling.textContent = "Invalid Format";
                field.nextElementSibling.style.color = "red";
                field.style.border = "1px solid red";
            }
            else if(field === stat3Input && !statRegex.test(value)){
                field.nextElementSibling.textContent = "Invalid Format";
                field.nextElementSibling.style.color = "red";
                field.style.border = "1px solid red";
            }
            else if(field === imageInput && !imageRegex.test(value)){
                field.nextElementSibling.textContent = "Invalid Format";
                field.nextElementSibling.style.color = "red";
                field.style.border = "1px solid red";
            }
            else if(field === descriptionInput && !descriptionRegex.test(value)){
                field.nextElementSibling.textContent = "Invalid Format";
                field.nextElementSibling.style.color = "red";
                field.style.border = "1px solid red";
            }
            else {
                field.style.border = "1px solid green";
                field.nextElementSibling.textContent = "";

                isvalid = true;
            }
        
        });
    });
};
inputsValidation();



form.addEventListener('submit'  , (e) =>{
    e.preventDefault();
    
    
    
    

})

form.addEventListener("reset", () => {
    form.querySelectorAll(".field").forEach((field) => {
        field.style.removeProperty("border");
    });

    form.querySelectorAll(".error-message").forEach((error) => {
        error.textContent = "";
    });
});

// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
