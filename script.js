const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValor = emailInput.value.trim();
    const senhaValor = senhaInput.value;

    console.log('Tentativa de Login iniciada: ');
    console.log('E-mail digitado: ', emailValor);
    console.log('Senha digitada: ', senhaValor);

    autenticarUsuario(emailValor, senhaValor);
});

// Função que valida os dados e muda de página
function autenticarUsuario(email, senha) {
    // Definindo credenciais "corretas" para teste
    const emailCorreto = "teste@email.com";
    const senhaCorreta = "123456";

    // Verifica se o que o usuário digitou é igual aos dados corretos
    if (email === emailCorreto && senha === senhaCorreta) {
        // Redireciona para a nova tela do dashboard
        window.location.href = "dashboard.html";
    } else {
        // Mostra um erro se a senha ou e-mail estiverem errados
        alert("E-mail ou senha incorretos!\nPara testar, use:\nE-mail: teste@email.com\nSenha: 123456");
        
        // Limpa o campo de senha para o usuário tentar de novo
        senhaInput.value = "";
        senhaInput.focus();
    }
}