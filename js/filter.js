let allGames = document.getElementsByClassName("game");
let crimeFilter = document.getElementById("checkbox-crime");
let superheroFilter =document.getElementById("checkbox-superhero");
let fantasyFilter = document.getElementById("checkbox-fantasy");
let warFilter = document.getElementById("checkbox-war");
let actionFilter = document.getElementById("checkbox-action")



window.scrollTo(0, 0);

setInterval(function(){
    
});
let filters= document.getElementsByClassName("filter");
for(let i=0; i < filters.length; i++){
    filters[i].checked = true;
}

//action filter


crimeFilter.onchange = function(){
  
    if(crimeFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "crime"){
                allGames[i].style.display ="block"
            }
    
        }
    }

    else{
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "crime"){
                allGames[i].style.display ="none"
            }
    
        }
    }
}
superheroFilter.onchange = function(){
  
    if(superheroFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "superhero"){
                allGames[i].style.display ="block"
            }
    
        }
    }

    else{
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "superhero"){
                allGames[i].style.display ="none"
            }
    
        }
    }
}

fantasyFilter.onchange = function(){
  
    if(fantasyFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "fantasy"){
                allGames[i].style.display ="block"
            }
    
        }
    }

    else{
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "fantasy"){
                allGames[i].style.display ="none"
            }
    
        }
    }
}

warFilter.onchange = function(){
  
    if(warFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "war"){
                allGames[i].style.display ="block"
            }
    
        }
    }

    else{
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "war"){
                allGames[i].style.display ="none"
            }
    
        }
    }
}

actionFilter.onchange = function(){
  
    if(actionFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display ="block"
            }
    
        }
    }

    else{
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display ="none"
            }
    
        }
    }
}


      