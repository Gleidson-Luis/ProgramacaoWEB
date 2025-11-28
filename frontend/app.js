const API_URL = "http://localhost:3000/tasks";

const tbody = document.getElementById("tbodyTarefas");
const btnNovaTarefa = document.getElementById("btnNovaTarefa")
const modalTarefa = document.getElementById("modalBackdrop");
const btnCancelar = document.getElementById("btnCancelar");

function abrirModal(){
    modalTarefa.classList.add("show");
}

function fecharModal(){

    modalTarefa.classList.remove("show");
}

btnNovaTarefa.addEventListener("click", abrirModal);
btnCancelar.addEventListener("click", fecharModal);