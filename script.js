
//getting data from data.js 

import {getData} from './data.js'





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
            else if(field === typeInput && typeInput.value == "") {
                field.nextElementSibling.textContent = "chose one type";
                field.nextElementSibling.style.color = "red";
                field.style.border = "1px solid red";

            }
             else if(field === levelInput && levelInput.value == "") {
                field.nextElementSibling.textContent = "this field can't be empty";
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
let cards = [];
const cardContainer = document.getElementById("grid")
const showCards = () =>{

    cards.forEach((card)=>{
        const article = document.createElement("article");
        article.dataset.id = card.id;
        article.className = "article flex flex-col gap-3 rounded-card bg-[#171E29] border-[#31333A] border p-3 pb-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"

        article.innerHTML = `
        
        <div class=" relative flex h-72 items-center justify-center rounded-xl ">

            <img class="absolute h-72 " src="${card.card_images[0].image_url}" alt="">
            
            
          </div>
          <div class="flex items-center  gap-2 h-10">
            <span class="rounded-full bg-[#253348] px-3 py-1  text-sm font-bold text-white">${card.type}</span>
          </div>
          <p class="text-sm text-muted">Race · ${card.race}</p>
          <button type="button" class="btn-outline bg-[#232d3d] border border-[#303947] text-white text-[15px] hover:bg-brand ">Add to my Collections</button>`

          cardContainer.appendChild(article);
    })

    

}

// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------

const loadCardDetails = () =>{

    let articles = document.querySelectorAll(".article");
    let detailSection = document.getElementById("detail");

    articles.forEach((article)=>{
    article.addEventListener("click", ()=>{

       let id =  article.getAttribute("data-id");

       console.log(id);

       cards.forEach((card)=>{
        if(card.id == id){
            detailSection.innerHTML = `<div class="flex items-center justify-between">
            <span class="font-mono text-sm text-muted">${card.id} · Détail</span>
            <button type="button" aria-label="Fermer le détail" class="btn-outline w-11 px-0">✕</button>
          </div>
          <div class="flex h-48 items-center justify-center rounded-2xl bg-brand-light">
            <img class="absolute h-52 " src="${card.card_images[0].image_url_cropped}" alt="">
          </div>
          <div class="flex items-center justify-between">
            <h2 class="font-display text-3xl font-extrabold max-w-[240px] text-white">${card.name}</h2>
            <span class="rounded-full bg-[#253348] border border-[#303947] shrink-0 px-3 py-1 text-sm font-bold">${card.type}</span>
          </div>
          <p class="text-gray-700">${card.desc}</p>
          <div class="flex flex-col gap-2 text-sm">
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold text-muted">PV</span><span class="h-3 rounded-full bg-ground"><span class="block h-3 w-[30%] rounded-full bg-brand"></span></span><span class="text-right text-muted font-mono">45</span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold text-muted">Attaque</span><span class="h-3 rounded-full bg-ground"><span class="block h-3 w-[33%] rounded-full bg-brand"></span></span><span class="text-right font-mono text-muted">49</span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold text-muted">Défense</span><span class="h-3 rounded-full bg-ground"><span class="block h-3 w-[43%] rounded-full bg-brand"></span></span><span class="text-right font-mono text-muted">65</span></div>
          </div>
          <button type="button" class="btn-primary">Add to My Collections</button>`
        }
       })
        
    } )
})



}









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

const filterContainer = document.getElementById("filters")

const loadType = () =>{

    const types = new Set();

    cards.forEach((card) => {
        types.add(card.type);
    });

    types.forEach((type)=>{
        const btn = document.createElement("button")
        btn.className = "type chip shrink-0 bg-[#253348] text-white border border-[#303947]"
        
        btn.textContent = type;

        filterContainer.appendChild(btn);
    })

}




const loadCardByType = () =>{

    const typesBtn = document.querySelectorAll(".type")

    

    typesBtn.forEach((typebtn) =>{

        typebtn.addEventListener("click" , (e)=>{
            cardContainer.innerHTML = "";
            typesBtn.forEach((btn) => {
            btn.classList.remove("active");
            btn.classList.remove("bg-orange-500");
            btn.classList.add("bg-[#253348]");
        });

            const activeTypebtn = e.currentTarget;
            activeTypebtn.classList.add("active");
            activeTypebtn.classList.remove("bg-[#253348]");
            activeTypebtn.classList.add("bg-brand");
            
    
            cards.forEach((card)=>{
                if(card.type == typebtn.textContent){
                    
                    const article = document.createElement("article");
                   article.dataset.id = card.id;
                   article.className = "article flex flex-col gap-3 rounded-card bg-[#171E29] border-[#31333A] border p-3 pb-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"

                   article.innerHTML = `
        
                  <div class=" relative flex h-72 items-center justify-center rounded-xl ">

                  <img class="absolute h-72 " src="${card.card_images[0].image_url}" alt="">
            
            
                    </div>
                     <div class="flex items-center  gap-2 h-10">
                      <span class="rounded-full bg-[#253348] px-3 py-1  text-sm font-bold text-white">${card.type}</span>
                     </div>
                     <p class="text-sm text-muted">Race · ${card.race}</p>
                  <button type="button" class="btn-outline bg-[#232d3d] border border-[#303947] text-white text-[15px] hover:bg-brand ">Add to my Collections</button>`

                    cardContainer.appendChild(article);

                }else if(typebtn.textContent == "All"){
                    cardContainer.innerHTML = "";
                    showCards();
                   

                }
            })
        })

    })



}

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


const main = async () => {

 cards = await getData();

  showCards()
  loadType()
  loadCardDetails()
  loadCardByType()
  
};

main();