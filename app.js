/// Getting All Elements
const btns = document.querySelectorAll('.btn');
const body = document.body;
const con = document.querySelector('.content-container');

btns.forEach(
    (btn)=>{
        btn.addEventListener('mouseover', ()=>{
            const name = btn.value;
            changeColor(name);
        })
    }
)

function changeColor(name){
    body.className = '';
    switch(name){
        case 'purple':
            body.classList.add('purple');
            break;
        case 'blue':
            body.classList.add('blue');
            break;
        case 'red':
            body.classList.add('red');
            break;
        case 'green':
            body.classList.add('green');
            break;
        case 'yellow':
            body.classList.add('yellow');
            break;
        case 'teal':
            body.classList.add('teal');
            break;

    }
}