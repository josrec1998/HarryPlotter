import { characters } from "./data.js";

const container = document.querySelector(".card-container");



characters.forEach((rowling) => {
  const { name, alternate_names, species, gender,  house, dateOfBirth, yearOfBirth, wizard, ancestry, } = rowling;

  container.innerHTML += `<div> 
     /* <img src="${Image}" alt="wizmugpic"></img> 
      <h2>${name}</h2>
      <p> ${species}</p>    
      
    </div>`;
    console.log(species)
container.style.backgroundColor="pink";


});
Footer