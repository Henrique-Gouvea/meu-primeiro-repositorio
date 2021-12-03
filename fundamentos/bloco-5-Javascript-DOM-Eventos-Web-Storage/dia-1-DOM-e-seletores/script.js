
        // Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        // - document.getElementById()
        // - document.getElementsByClassName()
        // - document.getElementsByTagName()

//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function mudancaEscritaP(){
    let tagP = document.getElementsByTagName("p")[0];
    tagP.innerText = "Me vejo em uma boa empresa";
}
mudancaEscritaP();

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function mudancaCorMainContent(){
    let mainContent = document.getElementsByClassName("main-content")[0];
    mainContent.style.backgroundColor = "rgb(76,164,109)";
}

//  Crie uma função que mude a cor do quadrado vermelho para branco.

function mudancaCorCenter(){
    document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
}

//  Crie uma função que corrija o texto da tag <h1>.
function mudancaEscritaH1(){
    document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
}
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function maisculoP(){
    let maiuscula = document.getElementsByTagName("p")[0];
    console.log(maiuscula.toUpperCase());
}


//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function showPConsole(){
    console.log(document.querySelectorAll("p"));
    for (i = 0; i < pconsole.length; i += 1){
        console.log(pconsole[i]);
    }
}   


