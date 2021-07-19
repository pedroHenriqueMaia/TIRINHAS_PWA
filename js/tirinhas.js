//puxar dados do json
const url = "http://www.professorburnes.com.br/api/";

//funcao para ler as tirinhas 
ler = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {

        var tam = data.length;
        //console.log(tam);

        for(var i = 0; i < tam; i++){
         //   console.log(data[i].titulo)
         document.getElementById('tirinhas').innerHTML += `<div class='tira'><h1>`+data[i].titulo+`</h1>
         <img src='${data[i].tirinha}' alt='${data[i].titulo}'>
         </div>`
        }

    })
    .catch(erro => console.log(erro));
}


//para carregar as funcoes das tirinahas
window.addEventListener('load', ler);