const a2h = document.getElementById('alert');
const btnAdd = document.getElementById('btnAdd');
const btnCancel = document.getElementById('btnCancel');
var prompt;

this.addEventListener('beforeinstallprompt', (event) => {
    console.log("A2H");

    a2h.style.display = 'block';
    event.preventDefault();
    prompt = event;

    //adicionar uma funcao
    btnAdd.addEventListener('click', (event) => {
        //console.log('clickou')
        prompt.prompt();

        a2h.style.display = 'none';
    })
})

btnCancel.addEventListener('click', (event) => {
    a2h.style.display = 'none';
})