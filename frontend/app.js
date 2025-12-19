const API_URL_TASKS = "http://localhost:3000/tasks";

const tbody = document.getElementById("tbodyTarefas");
const btnNovaTarefa = document.getElementById("btnNovaTarefa")
const modalTarefa = document.getElementById("modalBackdrop");
const btnCancelar = document.getElementById("btnCancelar");
const formTarefa = document.getElementById("formTarefa");

formTarefa.addEventListener("submit", salvarTarefa);

async function salvarTarefa(event){
    event.preventDefault();
    
    const titulo = document.getElementById("title").value;
    if (titulo.trim().length === 0){
        alert("Digite um valor de título válido.");
        document.getElementById("title").value = "";
        return;
    }

    const descricao = document.getElementById("description").value;
    if (descricao.trim().length === 0){
        alert("Digite um valor de descrição válido.");
        document.getElementById("description").value = "";
        return;
    }

    const payload = {
        title: titulo,
        description: descricao
    };

    resultado = await fetch(API_URL_TASKS, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(payload)
    });

    if (resultado.ok){
        fecharModal();
        carregarTasks();
    }
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
    const resultado = await fetch(API_URL_TASKS);
    const dados = await resultado.json();
    tarefas = dados;
    renderizarTabela();
}11

function renderizarTabela(){
    tbody.innerHTML = "";
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

