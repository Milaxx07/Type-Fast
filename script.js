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

    autenticarUsuario(emailValor, senhaValor)
});