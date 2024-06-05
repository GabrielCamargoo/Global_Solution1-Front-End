function validateForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (email.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    return true;
}