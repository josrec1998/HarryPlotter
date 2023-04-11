import { characters } from "./data.js";

const container = document.querySelector(".card-container");

characters.forEach((rowling) => {
  const {
    name,
    alternate_names,
    species,
    house,
    image,
  } = rowling;

  container.innerHTML += `<div class="card"> 
     <img class="card__image" src="${image}" alt="wizmugpic"></img> 
     <section class="card__content">
     <h2 class="card__heading" >${name}</h2>
     <div class="card__text">
     <p>${alternate_names}</p
      
      <p> ${house}</p>    
      </div>
      </section>
     
      
    </div>`;
  console.log(species);
  container.style.backgroundColor = "pink";

  const result = characters.filter(character => character.length > 6);
});
Footer;
