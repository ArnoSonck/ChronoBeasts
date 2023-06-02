function startGame(){
    let buttonChronoBeastPlayer = document.getElementById('button-slectChronoBeast')
    buttonChronoBeastPlayer.addEventListener('click',playerSelection)

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
    let randomAttack = aleatorio(1,3)
    let spamFoeChronoBeast = document.getElementById('foeChronoBeast')
    if(randomAttack == 1){
        spamFoeChronoBeast.innerHTML = "TopoTejon"
    } else if(randomAttack == 2){
        spamFoeChronoBeast.innerHTML = "CarneroKanguro"
    } else {
        spamFoeChronoBeast.innerHTML = "OsoLeón"
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function selectChronoBeastPlayer(){
    alert("Holis")
}

window.addEventListener('load',startGame)