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

  function liveSearch() {
  
    let search_query = document.getElementById("searchbox").value;
    // Loop through the cards
    for (var i = 0; i < container.length; i++) {
      // If the text is within the card...
      if(container[i].name.innerText.toLowerCase()
        // ...and the text matches the search query...
        .includes(search_query.toLowerCase())) {
          // ...remove the `.is-hidden` class.
          container[i].classList.add("not-hidden");
          container = document.querySelectorAll("not-hidden")
      } else {
        // Otherwise, add the class.
        container[i].classList.remove("not-hidden");
        container = document.querySelectorAll("not-hidden")
      }
    }
  }

  
});
Footer;
