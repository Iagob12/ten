document.getElementById("popup2").style.display = "block";
// Configura o evento do botão "Salvar" para atualizar o tênis
document.getElementById("salvarButton").onclick = () => salvarAlteracoes(tenis.id);
;

document.querySelector(".novo").addEventListener("click", function() {
    const nome = prompt("Nome do tênis:");
    const preco = prompt("Preço do tênis:");
    const imagem = prompt("Imagem (URL):");
 
    // Verifica se os dados estão completos
    if (nome && preco && imagem) {
        const novoTenix = {
            nome: nome,
            preco: parseFloat(preco),
            img: imagem,
        };
 
        fetch("http://localhost:8080/api/tenis/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novoTenix),
        })
        .then(response => {
            if (response.ok) {
                alert("Tênis adicionado com sucesso!");
                buscarTenis(); // Atualiza a lista de tênis
            } else {
                alert("Erro ao adicionar tênis.");
            }
        })
        .catch(error => {
            alert("Erro na requisição: " + error.message);
        });
    }
});