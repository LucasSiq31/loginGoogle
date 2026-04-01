function logar() {
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value

    if(usuario == "user@email.com" && senha == "1234"){
        alert("Login realizado com sucesso!")
        window.location.href = "https://www.google.com";
    }else{
        alert("Usuário ou senhas inválidos!")
    }
}