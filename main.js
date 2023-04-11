import { characters } from "./data.js";

const container = document.querySelector(".card-container");
const input = document.querySelector("#searchbox");

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
      <h2 class="card__heading">${name}</h2>
      <div class="card__text">
        <p>${alternate_names}</p>
        <p>${house}</p>    
      </div>
    </section>
  </div>`;
});

container.style.backgroundColor = "pink";

input.addEventListener("keyup", function () {
  let search_query = input.value.toLowerCase();

  

  for (let i = 0; i < container.children.length; i++) {
    const nameElement = container.children[i].querySelector('.card__heading').innerText.toLowerCase();


    if(nameElement.includes(search_query)) {
      container.children[i].classList.remove("isnowhidden");
      
      console.log(nameElement);

    }  else {
      container.children[i].classList.add("isnowhidden");
      console.log("vamos los pibes"); 

    } 
  }
});