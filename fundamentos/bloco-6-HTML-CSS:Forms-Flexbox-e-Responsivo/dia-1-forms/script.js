arrayEstados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
inputEstados = document.getElementById("input-estado");

function addEstadosInput(){
    for (let i = 0; i < arrayEstados.length; i += 1) {
        console.log(arrayEstados[i]);
        options = document.createElement("option");
        options.innerText = arrayEstados[i];
        options.value = arrayEstados[i];
        inputEstados.appendChild(options);
    }
}

addEstadosInput();