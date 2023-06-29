const htmlCode = `
  <li class="game" data-category="crime" data-price="8"> <img src="img/products/goodfellas.webp" alt="Goodfellas"></li>
  <li class="game" data-category="war" data-price="12"> <img src="img/products/whereeaglesdare.webp" alt="Where Eagles Dare"></li>
  <li class="game" data-category="war" data-price="14"> <img src="img/products/inglouriousbasterds.webp" alt="Inglorius Basterds"></li>
  <li class="game" data-category="crime" data-price="10"> <img src="img/products/heatMovie.webp" alt="HEAT"></li>
  <li class="game" data-category="crime" data-price="15"> <img src="img/products/scarface.webp" alt="Scarface"></li>
  <li class="game" data-category="fantasy" data-price="25"> <img src="img/products/starwarse3.webp" alt="Star Wars Episode 3: Revenge Of The Sith"></li>
  <li class="game" data-category="crime" data-price="20"> <img src="img/products/thewolfofwallstreet.webp" alt="The Wolf Of Wall Street"></li>
  <li class="game" data-category="crime" data-price="10"> <img src="img/products/fightclub.webp" alt="Fight Club"></li>
  <li class="game" data-category="crime" data-price="8"> <img src="img/products/seven.webp" alt="Seven"></li>
  <li class="game" data-category="action" data-price="12"> <img src="img/products/diehard.webp" alt="Die Hard"></li>
  <li class="game" data-category="crime" data-price="15"> <img src="img/products/taxidriver.webp" alt="Taxi Driver"></li>
  <li class="game" data-category="superhero" data-price="18"> <img src="img/products/darkknight.webp" alt="The Dark Knight"></li>
  <li class="game" data-category="superhero" data-price="20"> <img src="img/products/spidermanITS.webp" alt="Spider-man: Into The Spiderverse"></li>
  <li class="game" data-category="superhero" data-price="25"> <img src="img/products/theBatman.webp" alt="The Batman (2022)"></li>
  <li class="game" data-category="fantasy" data-price="30"> <img src="img/products/lordoftherings.webp" alt="Lord Of The Rings: Return Of The King"></li>
`;

const htmlProducts = document.getElementById('js--products');
htmlProducts.innerHTML = htmlCode;