// // arquivo script.js            EXEMPLO

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>



//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

document.getElementById("elementoOndeVoceEsta").parentNode.style.color="red";

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

document.getElementById("elementoOndeVoceEsta").lastElementChild.textContent = " Esse e o segundo e ultimo Filho!";

//Acesse o primeiroFilho a partir de pai .

console.log(document.querySelector("#pai").firstElementChild);

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

console.log(document.getElementById("elementoOndeVoceEsta").lastElementChild);

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling.nextSibling);

//Agora acesse o terceiroFilho a partir de pai .

console.log(document.getElementById("pai").lastElementChild.previousElementSibling);