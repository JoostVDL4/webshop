function toggleDropdown() {
    var dropdown = document.getElementById("dropdownOptions");
    dropdown.classList.toggle("show");
  }
  
  function filterByPriceRange(minPrice, maxPrice) {
    var games = document.getElementsByClassName("game");
    for (var i = 0; i < games.length; i++) {
      var game = games[i];
      var price = parseInt(game.dataset.price);
  
      if (minPrice === 0 && maxPrice === 0) {
        game.style.display = "block";
      } else if (price >= minPrice && price <= maxPrice) {
        game.style.display = "block";
      } else {
        game.style.display = "none";
      }
    }
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
      var dropdowns = document.getElementsByClassName("dropdown-movies");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };