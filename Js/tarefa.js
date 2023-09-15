let contador = 0;
let input = document.getElementById('listaTarefa');
let addButton = document.getElementById('addButton');
let main = document.getElementById('arealista');


function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT

    let valorInput = input.value;

    //VALIDACAO PARA NAO SER VAZIO, NEM NULO, NEM INDEFINIDO

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador;
        let novoItem = `<div id ="${contador}"class="tarefa">
        <div onclick="marcar(${contador})"class="item-icone">
            <i id="icone_${contador}" class="fi fi-rr-circle""></i>
        </div>
        <div class="item-nome" onclick="marcar(${contador})">${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="deletar"><img src="img/icon-delete.png" alt=""></button>
        </div>
        </div>`;
        //adicionar itens na lista
        main.innerHTML += novoItem;

        //ZERAR CAMPOS
        input.value = "";
        input.focus();

    }
}

function marcar(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "tarefa") {
        item.classList.add('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fi-rr-circle');
        icone.classList.add('fi-rr-check-circle');
        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fi-rr-check-circle');
        icone.classList.add('fi-rr-circle');
    }
}
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
input.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER(13)
    if (event.keyCode === 13) {
        event.preventDefault();
        addButton.click();
    }
});
