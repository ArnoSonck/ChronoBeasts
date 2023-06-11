let playerAttack
let foeAttack
let combatResult

function startGame(){
    let buttonChronoBeastPlayer = document.getElementById('button-slectChronoBeast')
    buttonChronoBeastPlayer.addEventListener('click',playerSelection)

    let buttonTime = document.getElementById("button-time")
    buttonTime.addEventListener("click",timeAttack)
    let buttonSpace = document.getElementById("button-space")
    buttonSpace.addEventListener("click",spaceAttack)
    let buttonEnergy = document.getElementById("button-energy")
    buttonEnergy.addEventListener("click",energyAttack)

}

function playerSelection(){
    let topoTejonPlayer = document.getElementById('topotejon')
    let carneroKanguro = document.getElementById('carnerokanguro')
    let osoLeón = document.getElementById('osoleon')
    let spamPlayerChronoBeast = document.getElementById('playerChronoBeast')

    if(topoTejonPlayer.checked){
        spamPlayerChronoBeast.innerHTML = "TopoTejon"
    } else if (carneroKanguro.checked){
        spamPlayerChronoBeast.innerHTML = "CarneroKanguro"
    } else if (osoLeón.checked){
        spamPlayerChronoBeast.innerHTML = "OsoLeón"
    } else{
        alert('Select a ChronoBeast')
    }

    foeSelection()
}

function foeSelection(){
    let randomChronoBeast = aleatorio(1,3)
    let spamFoeChronoBeast = document.getElementById('foeChronoBeast')
    if(randomChronoBeast == 1){
        spamFoeChronoBeast.innerHTML = "TopoTejon"
    } else if(randomChronoBeast == 2){
        spamFoeChronoBeast.innerHTML = "CarneroKanguro"
    } else {
        spamFoeChronoBeast.innerHTML = "OsoLeón"
    }
}

function timeAttack(){
    playerAttack = "TIME"
    randomFoeAttack()
}

function spaceAttack(){
    playerAttack = "SPACE"
    randomFoeAttack()
}

function energyAttack(){
    playerAttack = "ENERGY"
    randomFoeAttack()
}

function randomFoeAttack(){
    let randomAttack = aleatorio(1,3)
    if(randomAttack == 1){
        foeAttack = "TIME"
    } else if(randomAttack == 2){
        foeAttack = "SPACE"
    } else {
        foeAttack = "ENERGY"
    }
    
    combat(playerAttack,foeAttack)
}

function combat(player, foe){
    if(foe == player){
        combatResult = "- TIE 🤡"
    }else if(player == "TIME" && foe == "ENERGY"){
        combatResult = "- You won 🥳"
    }else if(player == "SPACE" && foe == "TIME"){
        combatResult = "- You won 🥳"
    }else if(player == "ENERGY" && foe == "SPACE"){
        combatResult = "- You won 🥳"
    }else{
        combatResult = "- Foe won 😿"
    }
    messageCreation()
}

function messageCreation(){
    let battleHistory = document.getElementById('battleHistory')
    let parragraph = document.createElement('p')
    parragraph.innerHTML = 'Your ChronoBeasts used ' + playerAttack + ', foe\'s ChronoBeasts used '+ foeAttack + combatResult
    
    battleHistory.appendChild(parragraph)
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function selectChronoBeastPlayer(){
    alert("Holis")
}

window.addEventListener('load',startGame)