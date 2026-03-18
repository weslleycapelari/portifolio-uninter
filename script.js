// Seleciona o formulario principal de contato pelo id.
const formContato = document.getElementById("form-contato");
const botaoTema = document.getElementById("botao-tema");

// Alterna a classe dark-theme no body a cada clique no botao de tema.
if (botaoTema) {
	botaoTema.addEventListener("click", function () {
		document.body.classList.toggle("dark-theme");
	});
}

if (formContato) {
	// Escuta o envio do formulario para aplicar as validacoes no lado do cliente.
	formContato.addEventListener("submit", function (event) {
		event.preventDefault();

		// Captura os campos e remove espacos extras no inicio/fim.
		const nome = document.getElementById("nome").value.trim();
		const email = document.getElementById("email").value.trim();
		const mensagem = document.getElementById("mensagem").value.trim();

		// Verifica se todos os campos obrigatorios foram preenchidos.
		if (!nome || !email || !mensagem) {
			alert("Por favor, preencha todos os campos obrigatorios.");
			return;
		}

		// Valida formato basico de e-mail.
		const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		if (!emailValido) {
			alert("Por favor, informe um e-mail valido.");
			return;
		}

		// Exibe confirmacao e limpa os campos quando tudo estiver correto.
		alert("Mensagem enviada com sucesso!");
		formContato.reset();
	});
}
