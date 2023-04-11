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
    // Locate the card elements
    let cards = document.querySelectorAll('.card-container')
    // Locate the search input
    let search_query = document.getElementById("searchbox").value;
    // Loop through the cards
    for (var i = 0; i < cards.length; i++) {
      // If the text is within the card...
      if(cards[i].innerText.toLowerCase()
        // ...and the text matches the search query...
        .includes(search_query.toLowerCase())) {
          // ...remove the `.is-hidden` class.
          cards[i].classList.remove("is-hidden");
      } else {
        // Otherwise, add the class.
        cards[i].classList.add("is-hidden");
      }
    }
  }

  
});
Footer;
