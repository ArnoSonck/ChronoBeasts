let playerAttack
let foeAttack
let combatResult
let playerLife = 3
let foeLife = 3

function startGame(){
    let buttonChronoBeastPlayer = document.getElementById('button-slectChronoBeast')
    buttonChronoBeastPlayer.addEventListener('click',playerSelection)

    let buttonTime = document.getElementById("button-time")
    buttonTime.addEventListener("click",timeAttack)
    let buttonSpace = document.getElementById("button-space")
    buttonSpace.addEventListener("click",spaceAttack)
    let buttonEnergy = document.getElementById("button-energy")
    buttonEnergy.addEventListener("click",energyAttack)
    
    let buttonRestar =document.getElementById("button-restart")
    buttonRestar.addEventListener("click",restarGame)

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

function restarGame(){
    location.reload()

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
    let spanPlayerLife =document.getElementById("playerLifeP")
    let spanFoeLife =document.getElementById("foeLifeP")

    if(foe == player){
        combatResult = "- TIE 🤡"
    }else if(player == "TIME" && foe == "ENERGY"){
        combatResult = "- You won 🥳"
        foeLife--
        spanFoeLife.innerHTML=foeLife
    }else if(player == "SPACE" && foe == "TIME"){
        combatResult = "- You won 🥳"
        foeLife--
        spanFoeLife.innerHTML=foeLife
    }else if(player == "ENERGY" && foe == "SPACE"){
        combatResult = "- You won 🥳"
        foeLife--
        spanFoeLife.innerHTML=foeLife
    }else{
        combatResult = "- Foe won 😿"
        playerLife--
        spanPlayerLife.innerHTML=playerLife
    }
    messageCreation()
}

function messageCreation(){
    let battleHistory = document.getElementById('battleHistory')
    let parragraph = document.createElement('p')
    parragraph.innerHTML = 'Your ChronoBeasts used ' + playerAttack + ', foe\'s ChronoBeasts used '+ foeAttack + combatResult
    
    battleHistory.appendChild(parragraph)

    lifeCheck()
}

function finalMessageCreation(finalMessage){
    let battleHistory = document.getElementById('battleHistory')
    let parragraph = document.createElement('p')
    parragraph.innerHTML = finalMessage
    
    battleHistory.appendChild(parragraph)

    let buttonTime = document.getElementById("button-time")
    buttonTime.disabled = true
    let buttonSpace = document.getElementById("button-space")
    buttonSpace.disabled = true
    let buttonEnergy = document.getElementById("button-energy")
    buttonEnergy.disabled = true

}

function lifeCheck(){
    if (playerLife <= 0){
        finalMessageCreation("Sorry, you lost")
    } else if(foeLife <= 0){
        finalMessageCreation("Congratulation, YOU WON")
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function selectChronoBeastPlayer(){
    alert("Holis")
}

window.addEventListener('load',startGame)