setInterval( async () => {
    const resposta = await fetch("http://localhost:8001/temperatura");
    const dados = await resposta.json();

    document.getElementById("temperatura").innerText = dados.valor;
}, 1000);