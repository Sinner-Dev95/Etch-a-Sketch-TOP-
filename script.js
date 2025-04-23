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

//FUNCTION FOR GRID SIZE
function gridDimension(size) {
    for (let i = 1; i <= size; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('div-row');

        for (let j = 1; j <= size; j++) {
            let columnDiv = document.createElement('div');
            columnDiv.classList.add('div-column');
            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv);
    }
};

gridDimension(16);

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



typeInteraction();

toggleBtn.addEventListener('click', function () {
    toggleState = !toggleState;
    typeInteraction();
});

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const sizeBtn = document.querySelector('.size-btn');

sizeBtn.addEventListener('click', function(){
    let input = prompt('Inserisci il numero di celle (limite masso 100)')

    let newInput= parseInt(input)

    if (isNaN(newInput) || newInput <= 0 || newInput > 100){
        alert('Per favore inserisci un numero valido tra 1 e 100');
        return; // Esce dalla funzione se l'input non è valido
    }
    
    // Se arriviamo qui, l'input è valido
    removeGrid(); 
    gridDimension(newInput);
    typeInteraction(); 
})










