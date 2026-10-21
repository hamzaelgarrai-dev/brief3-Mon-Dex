//Validation de Form

//regex value

const idRegex = /^#\d{3}$/;
const nameRegex = /^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/ ;
const statRegex = /^\d{1,3}$/ ;
const imageRegex = /^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i;
const descriptionRegex = /^[\s\S]{10,200}$/ ;



const form = document.getElementById('creature-form')
const idInput = document.querySelector('[name = "id"]');
const nameInput = document.querySelector('[name = "name"]');
const typeInput = document.querySelector('[name = "type"]');
const levelInput = document.querySelector('[name = "level"]');
const stat1Input = document.querySelector('[name = "stat1"]');
const stat2Input = document.querySelector('[name = "stat2"]');
const stat3Input = document.querySelector('[name = "stat3"]');
const imageInput = document.querySelector('[name = "image"]');
const descriptionInput = document.querySelector('[name = "description"]');

const checkInput = () =>{

    const idValue = idInput.value.trim();
    const nameValue = nameInput.value.trim();
    const typeValue = typeInput.value.trim();
    const levelValue = levelInput.value.trim();
    const stat1Value = stat1Input.value.trim();
    const stat2Value = stat2Input.value.trim();
    const stat3Value = stat3Input.value.trim();
    const imageValue = imageInput.value.trim();
    const descriptionValue = descriptionInput.value.trim();

    //id input validation
    if(idValue === ""){

        idInput.nextElementSibling.textContent = "the id field can't be empty";
        idInput.nextElementSibling.style.color = "red";
    }
    else if(idRegex.test(idValue) === false){
        idInput.nextElementSibling.textContent = "name must be in this format : #000";
        idInput.nextElementSibling.style.color = "red";
    }
    else if(idRegex.test(idValue)){
        idInput.style.border = "1px solid green";
    }

    //name input validation

    if(nameValue === ""){

        nameInput.nextElementSibling.textContent = "the name field can't be empty";
        nameInput.nextElementSibling.style.color = "red";
    }
    else if(nameRegex.test(nameValue) === false){
        nameInput.nextElementSibling.textContent = "wrong format";
        nameInput.nextElementSibling.style.color = "red";
    }
    else if(nameRegex.test(nameValue)){
        idInput.style.border = "1px solid green";
    }

    //type validation

    if(typeValue === ""){

        typeInput.nextElementSibling.textContent = "one type must be selected";
        typeInput.nextElementSibling.style.color = "red";
    }
    else if (typeValue){
        typeInput.nextElementSibling.textContent = ""
        typeInput.style.border = "1px solid green"
    }

    //level validation 

    if(levelValue === ""){

        levelInput.nextElementSibling.textContent = "the value field can't be empty";
        levelInput.nextElementSibling.style.color = "red";
    }
    else if (levelValue){
        levelInput.nextElementSibling.textContent = ""
        levelInput.style.border = "1px solid green"
    }

    //stat1 validation

    if(stat1Value === ""){

        stat1Input.nextElementSibling.textContent = "the stat field can't be empty";
        stat1Input.nextElementSibling.style.color = "red";
    }
    else if(statRegex.test(stat1Value) === false){
        stat1Input.nextElementSibling.textContent = "Nombre entier de 0 à 999 ";
        stat1Input.nextElementSibling.style.color = "red";
    }
    else if(statRegex.test(stat1Value)){
        stat1Input.style.border = "1px solid green";
    }

    //stat2 validation

    if(stat2Value === ""){

        stat2Input.nextElementSibling.textContent = "the stat field can't be empty";
        stat2Input.nextElementSibling.style.color = "red";
    }
    else if(statRegex.test(stat2Value) === false){
        stat2Input.nextElementSibling.textContent = "Nombre entier de 0 à 999 ";
        stat2Input.nextElementSibling.style.color = "red";
    }
    else if(statRegex.test(stat2Value)){
        stat2Input.style.border = "1px solid green";
    }

    //stat3 validation

    if(stat3Value === ""){

        stat3Input.nextElementSibling.textContent = "the stat field can't be empty";
        stat3Input.nextElementSibling.style.color = "red";
    }
    else if(statRegex.test(stat3Value) === false){
        stat3Input.nextElementSibling.textContent = "Nombre entier de 0 à 999 ";
        stat3Input.nextElementSibling.style.color = "red";
    }
    else if(statRegex.test(stat3Value)){
        stat3Input.style.border = "1px solid green";
    }


    //image validation

    if(imageValue === ""){

        imageInput.nextElementSibling.textContent = "the image field can't be empty";
        imageInput.nextElementSibling.style.color = "red";
    }
    else if(imageRegex.test(imageValue) === false){
        imageInput.nextElementSibling.textContent = "image must be .png, .jpg, .jpeg, .webp ou .gif ";
        imageInput.nextElementSibling.style.color = "red";
    }
    else if(imageRegex.test(imageValue)){
        imageInput.style.border = "1px solid green";
    }


    //description validation

    if(descriptionValue === ""){

        descriptionInput.nextElementSibling.textContent = "the description field can't be empty";
        descriptionInput.nextElementSibling.style.color = "red";
    }
    else if(descriptionRegex.test(descriptionValue) === false){
        descriptionInput.nextElementSibling.textContent = "10 à 200 caractères";
        descriptionInput.nextElementSibling.style.color = "red";
    }
    else if(descriptionRegex.test(descriptionValue)){
        descriptionInput.style.border = "1px solid green";
    }









}





const styleInput = () =>{

    // id input style

    idInput.addEventListener("input", () => {
    idInput.nextElementSibling.textContent = "";
    if(idRegex.test(idInput.value.trim()) === false){
        
        idInput.style.border = "1px solid red";
    }
    else if(idRegex.test(idInput.value.trim())){
         idInput.style.border = "1px solid green";
    }
  });

  //name input style

  nameInput.addEventListener("input", () => {
    nameInput.nextElementSibling.textContent = "";
    if(nameRegex.test(nameInput.value.trim()) === false){
        
        nameInput.style.border = "1px solid red";
    }
    else if(nameRegex.test(nameInput.value.trim())){
         nameInput.style.border = "1px solid green";
    }
  });

  //type input style

  typeInput.addEventListener("input", () => {
    typeInput.nextElementSibling.textContent = "";
    if(typeInput){
        
        typeInput.style.border = "1px solid green";
    }
  });



  // level input style
  levelInput.addEventListener("input", () => {
    levelInput.nextElementSibling.textContent = "";
    if(levelInput){
        
        levelInput.style.border = "1px solid green";
    }
  });

  // stat1 input style

    stat1Input.addEventListener("input", () => {
    stat1Input.nextElementSibling.textContent = "";
    if(statRegex.test(stat1Input.value.trim()) === false){
        
        stat1Input.style.border = "1px solid red";
    }
    else if(statRegex.test(stat1Input.value.trim())){
         stat1Input.style.border = "1px solid green";
    }
  });


  //stat2 input style

    stat2Input.addEventListener("input", () => {
    stat2Input.nextElementSibling.textContent = "";
    if(statRegex.test(stat2Input.value.trim()) === false){
        
        stat2Input.style.border = "1px solid red";
    }
    else if(statRegex.test(stat2Input.value.trim())){
         stat2Input.style.border = "1px solid green";
    }
  });


  // stat3 input style

    stat3Input.addEventListener("input", () => {
    stat3Input.nextElementSibling.textContent = "";
    if(statRegex.test(stat3Input.value.trim()) === false){
        
        stat3Input.style.border = "1px solid red";
    }
    else if(statRegex.test(stat3Input.value.trim())){
         stat3Input.style.border = "1px solid green";
    }
  });


  // image input style

    imageInput.addEventListener("input", () => {
    imageInput.nextElementSibling.textContent = "";
    if(imageRegex.test(imageInput.value.trim()) === false){
        
        imageInput.style.border = "1px solid red";
    }
    else if(imageRegex.test(imageInput.value.trim())){
         imageInput.style.border = "1px solid green";
    }
  });

  // description input style
    descriptionInput.addEventListener("input", () => {
    descriptionInput.nextElementSibling.textContent = "";
    if(descriptionRegex.test(descriptionInput.value.trim()) === false){
        
        descriptionInput.style.border = "1px solid red";
    }
    else if(descriptionRegex.test(descriptionInput.value.trim())){
         descriptionInput.style.border = "1px solid green";
    }
  });

}


styleInput();





form.addEventListener('submit'  , (e) =>{
    e.preventDefault();
    
    checkInput();
    
    

})

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
