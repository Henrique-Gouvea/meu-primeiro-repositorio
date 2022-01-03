arrayEstados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
inputEstados = document.getElementById("input-estado");
btnEnviarEmprego = document.getElementById("btn-enviar-emprego");
btnEnviarDados = document.getElementById("btn-enviar-dados");
divDados = document.getElementById('dados');
divEmprego = document.getElementById('emprego');
formEmprego = document.getElementById('form-emprego')

function addEstadosInput(){
    for (let i = 0; i < arrayEstados.length; i += 1) {
        console.log(arrayEstados[i]);
        options = document.createElement("option");
        options.innerText = arrayEstados[i];
        options.value = arrayEstados[i].toLowerCase();
        inputEstados.appendChild(options);
    }
}

addEstadosInput();

function enviar(){
    
    divDados.innerHtml = formEmprego.value;
    console.log(event.value);
    //event.preventDefault();
}

btnEnviarEmprego.addEventListener('click', enviar);