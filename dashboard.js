// Array com textos aleatórios para o teste
const textos = [
    "Enquanto o sol se despedia lentamente no horizonte, pintando o céu com nuances profundas de violeta, ouro e carmim, o velho faroleiro observava, do alto de sua torre de pedra fustigada pelos ventos, a imensidão misteriosa do oceano Atlântico.",
    "A tecnologia moderna tem o poder de transformar as nossas vidas de formas inesperadas. Todos os dias, milhares de linhas de código são escritas para resolver problemas complexos e criar ferramentas que conectam pessoas em todo o mundo.",
    "Desenvolver interfaces web exige não apenas conhecimentos técnicos, mas também uma grande sensibilidade estética. O equilíbrio perfeito entre a funcionalidade do código e a beleza visual é o que define um projeto de excelência."
];

// Elementos do DOM
const textoGeradoDisplay = document.getElementById('texto-gerado');
const inputDigitacao = document.getElementById('input-digitacao');
const cronometroDisplay = document.getElementById('cronometro');
const btnMandar = document.getElementById('btn-mandar');
const btnPerfil = document.getElementById('btn-perfil');
const menuDropdown = document.getElementById('menu-dropdown');
const btnLogout = document.getElementById('btn-logout');

// Variáveis do Cronómetro
let tempo = 0;
let cronometroIntervalo = null;
let testeIniciado = false;

// 1. Carregar texto aleatório ao abrir a página
function carregarTextoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * textos.length);
    textoGeradoDisplay.textContent = textos[indiceAleatorio];
    inputDigitacao.value = "";
    inputDigitacao.disabled = false;
    inputDigitacao.focus();
}

window.onload = carregarTextoAleatorio;

// 2. Lógica do Cronómetro
function atualizarCronometro() {
    tempo++;
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;
    
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    
    cronometroDisplay.textContent = `${minutos}:${segundos}`;
}

// O cronómetro inicia na primeira tecla digitada
inputDigitacao.addEventListener('input', function() {
    if (!testeIniciado && inputDigitacao.value.length > 0) {
        testeIniciado = true;
        cronometroIntervalo = setInterval(atualizarCronometro, 1000);
    }
});

// 3. Função para verificar o texto digitado
function submeterTexto() {
    const textoOriginal = textoGeradoDisplay.textContent.trim();
    const textoDigitado = inputDigitacao.value.trim();

    // Se o texto digitado estiver exatamente igual ao original:
    if (textoDigitado === textoOriginal) {
        clearInterval(cronometroIntervalo); // Para o relógio
        inputDigitacao.disabled = true; // Bloqueia o campo pois concluiu com sucesso
        alert(`Parabéns! Você concluiu o teste em ${cronometroDisplay.textContent} com sucesso!`);
    } else {
        // Se ainda houver erros ou estiver incompleto:
        alert(`O texto tem erros ou está incompleto. Tempo decorrido: ${cronometroDisplay.textContent}. Continue digitando!`);
        
        // Garante que o campo continua ativo e devolve o foco para o cursor
        inputDigitacao.disabled = false;
        inputDigitacao.focus();
    }
}

// Eventos de envio
btnMandar.addEventListener('click', submeterTexto);

inputDigitacao.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        submeterTexto();
    }
});

// Bloqueia a ação de colar (Ctrl + V / Botão direito -> Colar)
inputDigitacao.addEventListener('paste', function(event) {
    event.preventDefault(); // Cancela a colagem
    alert('Não é permitido colar texto! Você precisa digitar manualmente.');
});

// 4. Menu do Perfil / Log Out
btnPerfil.addEventListener('click', function() {
    menuDropdown.classList.toggle('oculta');
});

btnLogout.addEventListener('click', function() {
    alert('Sessão encerrada!');
    window.location.href = "index.html"; // Volta para a tela de login
});