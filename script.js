/* TEMA CLARO/ESCURO (DARK MODE) */
const botaoTema = document.getElementById("botao-tema");

// Verifica no localStorage se o usuário já havia escolhido o tema escuro antes
if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("dark-theme");
}

// Evento de clique para alternar o tema
botaoTema.addEventListener("click", function () {
  // A função toggle adiciona a classe se não existir, ou remove se já existir
  document.body.classList.toggle("dark-theme");

  // Salva a preferência do usuário no navegador (LocalStorage)
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
});

/* VALIDAÇÃO DO FORMULÁRIO DE CONTATO */
const formContato = document.getElementById("form-contato");

// Escuta o evento de "submit" (envio) do formulário
formContato.addEventListener("submit", function (event) {
  // Impede o recarregamento automático da página
  event.preventDefault();

  // Captura os valores digitados nos inputs e remove os espaços em branco (trim)
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // 1ª Validação: Verifica se algum campo está vazio
  if (nome === "" || email === "" || mensagem === "") {
    alert("Atenção: Por favor, preencha todos os campos do formulário.");
    return; // Para a execução da função aqui
  }

  // 2ª Validação: Verifica se o e-mail possui um formato válido usando Regex
  // A expressão regular verifica se existe algo antes do @, depois do @ e um ponto (.)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Erro: Por favor, informe um endereço de e-mail válido.");
    return;
  }

  // Se passou por todas as validações, simula o envio com sucesso
  alert(
    `Obrigado pelo contato, ${nome}! \nSua mensagem foi enviada com sucesso.`,
  );

  // Limpa todos os campos do formulário
  formContato.reset();
});
