console.log('Im working');


const container = document.querySelector('#grid-container');

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