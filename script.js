console.log('Im working');

// manipolazione del container principale
const container = document.querySelector('#grid-container');

//creazione della griglia con cicli annidati
//primo ciclo crea le 16 row
//secondo ciclo crea le 16 colonne per ogni row
for(let i = 1 ; i<=16 ; i++){
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('div-row');
    
    for (let j = 1; j<=16; j++){
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('div-column');
        rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
}


//evento per gestire hover su elemento container (event delegation)

container.addEventListener('mouseover', (e)=>{
    if (e.target.classList.contains('div-column')){
 e.target.style.backgroundColor = 'black';}
    
})



