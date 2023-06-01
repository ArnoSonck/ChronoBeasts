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
}

function selectChronoBeastPlayer(){
    alert("Holis")
}

window.addEventListener('load',startGame)