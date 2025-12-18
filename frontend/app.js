const API_URL = "http://localhost:3000/tasks";

const tbody = document.getElementById("tbodyTarefas");
const btnNovaTarefa = document.getElementById("btnNovaTarefa")
const modalTarefa = document.getElementById("modalBackdrop");
const btnCancelar = document.getElementById("btnCancelar");
const formTarefa = document.getElementById("formTarefa");

formTarefa.addEventListener("submit", salvarTarefa);

function salvarTarefa(event){
    event.preventDefault();
    
    console.log("Form submetido");
}

function abrirModal(){
    modalTarefa.classList.add("show");
}

function fecharModal(){
    modalTarefa.classList.remove("show");
}

btnNovaTarefa.addEventListener("click", abrirModal);
btnCancelar.addEventListener("click", fecharModal);

tarefas = [];

async function carregarTasks(){
    const resultado = await fetch(API_URL);
    const dados = await resultado.json();
    tarefas = dados;
    renderizarTabela();
}11

function renderizarTabela(){
    tarefas.forEach(tarefa => {
        const tr = document.createElement("tr");
        td = document.createElement("td");
        td.innerHTML = tarefa.title;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = tarefa.description;
        tr.appendChild(td);

        tbody.appendChild(tr);
    });
}

carregarTasks();

