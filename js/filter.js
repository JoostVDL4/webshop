let allGames = document.getElementsByClassName("game");
let actionFilter = document.getElementById("checkbox-action");
let strategyFilter =document.getElementById("checkbox-strategy");
let arpgFilter = document.getElementById("checkbox-arpg");
window.scrollTo(0, 0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
},1500);
let filters= document.getElementsByClassName("filter");
for(let i=0; i < filters.length; i++){
    filters[i].checked = true;
}

//action filter

console.log(actionFilter);
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
strategyFilter.onchange = function(){
  
    if(strategyFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "strategy"){
                allGames[i].style.display ="block"
            }
    
        }
    }

    else{
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "strategy"){
                allGames[i].style.display ="none"
            }
    
        }
    }
}

strategyFilter.onchange = function(){
  
    if(strategyFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "strategy"){
                allGames[i].style.display ="block"
            }
    
        }
    }

    else{
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "strategy"){
                allGames[i].style.display ="none"
            }
    
        }
    }
}

arpgFilter.onchange = function(){
  
    if(arpgFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "arpg"){
                allGames[i].style.display ="block"
            }
    
        }
    }

    else{
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "arpg"){
                allGames[i].style.display ="none"
            }
    
        }
    }
}