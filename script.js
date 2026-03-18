// Interações do header: menu mobile (dropdown) e alternância de tema.
const header = document.querySelector("header");
const botaoMenu = document.getElementById("botao-menu");
const menuPrincipal = document.getElementById("menu-principal");
const botaoTema = document.getElementById("botao-tema");

function setMenuAberto(aberto) {
  if (!header || !botaoMenu) return;

  header.classList.toggle("menu-aberto", aberto);
  botaoMenu.setAttribute("aria-expanded", String(aberto));
}

if (botaoMenu) {
  botaoMenu.addEventListener("click", function () {
    const aberto = header ? !header.classList.contains("menu-aberto") : false;
    setMenuAberto(aberto);
  });
}

if (menuPrincipal) {
  // Ao escolher um item do menu no mobile, fecha o dropdown.
  menuPrincipal.addEventListener("click", function (event) {
    const link = event.target.closest("a");
    if (link) setMenuAberto(false);
  });
}

if (botaoTema) {
  // Restaura a preferência de tema do usuário quando existir.
  if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark-theme");
  }

  botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
      "tema",
      document.body.classList.contains("dark-theme") ? "escuro" : "claro"
    );
  });
}

// Validação simples do formulário de contato (sem envio real).
const formContato = document.getElementById("form-contato");

if (formContato) {
  formContato.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const mensagem = document.getElementById("mensagem")?.value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, informe um e-mail válido.");
      return;
    }

    alert(`Obrigado pelo contato, ${nome}!\nSua mensagem foi enviada com sucesso.`);
    formContato.reset();
  });
}
