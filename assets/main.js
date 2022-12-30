const container = document.querySelector('.grid-container');


for (let i=0; i < 256; i++ ) {
    const createDiv = document.createElement('div');
    container.appendChild(createDiv);
}

const divs = container.querySelectorAll('div');
divs.forEach((div) => {
    div.addEventListener('mouseover', (e)=>{
        e.target.style.backgroundColor = "black"
    });
    div.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = "white"
    })
})