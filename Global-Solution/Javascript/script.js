function validateForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var horarios = document.getElementById("horarios").value;

    if (nome == "" || email == "" || horarios == "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }
    
    return true;
}

