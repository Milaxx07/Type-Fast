const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede a página de recarregar

    const emailValor = emailInput.value.trim();
    const senhaValor = senhaInput.value;

    // Chama a função de validação
    autenticarUsuario(emailValor, senhaValor);
});

function autenticarUsuario(email, senha) {
    // Credenciais válidas para teste
    const emailValido = "teste@email.com";
    const senhaValida = "123456";

    // 1. Se os dados estiverem corretos:
    if (email === emailValido && senha === senhaValida) {
        // Redireciona para o novo arquivo dashboard.html
        window.location.href = "dashboard.html";
    } 
    // 2. Se os dados estiverem incorretos:
    else {
        alert("E-mail ou senha incorretos!\n\nDados para teste:\nE-mail: teste@email.com\nSenha: 123456");
        senhaInput.value = ""; // Limpa o campo de senha
        senhaInput.focus();   // Coloca o cursor na senha novamente
    }
}