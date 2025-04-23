console.log('Im working');

// manipolazione del container principale
const container = document.querySelector('#grid-container');
const toggleBtn = document.querySelector('.toggle-btn');
let toggleState = true;
let toggleBtnText = document.querySelector('.hover-click')


// handler function
function targetElementHover(e) {
    if (e.target.classList.contains('div-column')) {
        e.target.style.backgroundColor = 'black';
    }
}

function targetElementClick(e) {
    if (e.target.classList.contains('div-column')) {
        e.target.style.backgroundColor = 'orange';
    }
}

function typeInteraction() {
    container.removeEventListener('mouseover', targetElementHover);
    container.removeEventListener('click', targetElementClick);

    if (toggleState) {

        container.addEventListener('mouseover', targetElementHover);
        toggleBtnText.textContent = 'HOVER';

    }
    else {
        container.addEventListener('click', targetElementClick);
        toggleBtnText.textContent = 'CLICK';
    }
}

for (let i = 1; i <= 16; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('div-row');

    for (let j = 1; j <= 16; j++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('div-column');
        rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
}

typeInteraction();

toggleBtn.addEventListener('click', function() {
    toggleState = !toggleState; 
    typeInteraction(); 
});










//creazione della griglia con cicli annidati
//primo ciclo crea le 16 row
//secondo ciclo crea le 16 colonne per ogni row


//evento per gestire hover su elemento container (event delegation)



