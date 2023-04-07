import { characters } from "./HarryPlotter/data.js";

const container = document.querySelector(".card-container");



characters.forEach((rowling) => {
  const { id, name, types, sprite } = rowling;

  container.innerHTML += `<div>
      <img src="${sprite}" alt="pokepic"></img>
      <h2>${name}</h2>
      <p> ${types}</p>    
      
    </div>`;
container.style.backgroundColor="pink";


});
Footer