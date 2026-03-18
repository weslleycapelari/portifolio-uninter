# Portfólio Acadêmico — UNINTER

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Sem%C3%A2ntico-orange?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Responsivo-blue?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Status-Em%20desenvolvimento-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Tema-Light%20%7C%20Dark-informational?style=flat-square" alt="Tema Light/Dark">
  <img src="https://img.shields.io/badge/Mobile-Dropdown%20Menu-brightgreen?style=flat-square" alt="Menu Dropdown Mobile">
</p>

<p align="center">
  <strong>Portfólio acadêmico pessoal em HTML, CSS e JavaScript (sem frameworks).</strong>
</p>

<p align="center">
  <a href="#visao-geral">Visão Geral</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#estrutura-do-projeto">Estrutura</a> •
  <a href="#como-executar">Como executar</a> •
  <a href="#responsividade-menu-mobile">Responsividade</a> •
  <a href="#tema-claro-escuro">Tema</a> •
  <a href="#formulario-de-contato">Contato</a> •
  <a href="#customizacao-rapida">Customização</a>
</p>

---

<a id="visao-geral"></a>

## 📖 Visão Geral

Este repositório contém um **portfólio acadêmico** desenvolvido como parte de atividades e práticas de desenvolvimento web, com foco em:

- **HTML5 semântico** (estrutura clara com header/nav/main/footer)
- **CSS3 responsivo** (layout fluido, grid para cards e ajustes para mobile)
- **JavaScript puro** (interações: menu dropdown, alternância de tema e validação do formulário)

O objetivo é manter o projeto **simples, legível e fácil de evoluir**, sem dependências externas e sem frameworks.

---

<a id="funcionalidades"></a>

## ✨ Funcionalidades

- **Navegação por âncoras** para seções do site (Sobre, Formação, Experiência, Portfólio, Contato)
- **Menu dropdown no mobile** (abre/fecha via botão “hambúrguer”)
- **Tema claro/escuro** com persistência no navegador (LocalStorage)
- **Validação do formulário de contato** (campos obrigatórios + formato básico de e-mail)
- **Cards em grid** para experiência e projetos (layout responsivo)

---

<a id="estrutura-do-projeto"></a>

## 🗂️ Estrutura do Projeto

```plaintext
portifolio-uninter/
├── index.html     # Estrutura do site (conteúdo + marcação semântica)
├── style.css      # Estilos (variáveis, layout, responsividade, dark theme)
└── script.js      # Interações (menu mobile, tema, validação do formulário)
```

---

<a id="como-executar"></a>

## 🚀 Como executar

### Opção 1: Abrir direto no navegador

1. Abra o arquivo `index.html` no seu navegador.

### Opção 2: Rodar com um servidor local (recomendado)

Usar servidor local evita alguns comportamentos estranhos de cache e facilita testes:

- **VS Code**: extensão “Live Server”
  - Clique com o botão direito em `index.html` → **Open with Live Server**

---

<a id="responsividade-menu-mobile"></a>

## 📱 Responsividade (menu mobile)

Em telas menores que **768px**, a navegação muda para o padrão “dropdown”:

- O botão de menu aparece (ícone “hambúrguer”)
- O menu abre/fecha ao clicar no botão
- Ao clicar em qualquer link do menu, o dropdown é fechado automaticamente

**Como funciona (alto nível):**

- No CSS, o `nav ul` fica oculto por padrão no mobile e só aparece quando o `header` possui a classe `menu-aberto`.
- No JavaScript, o botão de menu alterna essa classe e atualiza o atributo `aria-expanded`.

---

<a id="tema-claro-escuro"></a>

## 🌗 Tema claro/escuro

O tema é aplicado por meio de **variáveis CSS**.

- O tema padrão é o **claro**.
- Ao clicar no botão de tema (ícone), o `body` alterna a classe `dark-theme`.
- A preferência é salva no `localStorage` (chave `tema` com valores `claro`/`escuro`).

**Benefícios deste padrão:**

- Troca de tema com impacto mínimo no layout
- Mais fácil adicionar novos temas no futuro
- Manutenção simples: muda-se o tema alterando variáveis

---

<a id="formulario-de-contato"></a>

## 📝 Formulário de contato

O formulário foi feito para ser validado no **front-end** (sem envio real):

- Impede recarregamento com `event.preventDefault()`
- Valida se **nome, e-mail e mensagem** foram preenchidos
- Valida o e-mail com uma regex simples
- Em caso de sucesso:
  - exibe um `alert()` de confirmação
  - limpa o formulário com `form.reset()`

> Observação: caso você queira integrar com um backend/serviço (EmailJS, Formspree, API própria), o código está pronto para evoluir.

---

<a id="customizacao-rapida"></a>

## 🛠️ Customização rápida

### 1) Trocar textos e dados

Edite diretamente o conteúdo do site em `index.html`.

### 2) Ajustar cores e identidade visual

As cores principais ficam nas variáveis no topo de `style.css`.

Sugestão prática:

- `--primary-color` e `--secondary-color` controlam a “identidade” do tema
- `--bg-color` e `--surface-color` controlam fundo e cartões

### 3) Adicionar novos projetos

Duplique um bloco `article.card-projeto` dentro da seção de portfólio em `index.html`.

---

## ✅ Regras e decisões do projeto

- Sem frameworks e sem dependências
- HTML semântico e acessível (atributos ARIA nos botões)
- CSS com variáveis (facilita dark mode e manutenção)
- JavaScript organizado em blocos pequenos e condicionais (evita erro caso um elemento não exista)

---

## 🧭 Roadmap (ideias futuras)

- Fechar o menu ao clicar fora (click-outside)
- Trocar `alert()` por mensagens inline no formulário
- Adicionar animação leve de abertura do dropdown (sem exagero)
- Persistir a última seção visitada (opcional)

---

## 📄 Licença

Este projeto é disponibilizado para fins acadêmicos e de portfólio. Se você quiser publicar como open source, a sugestão é adicionar uma licença (ex.: MIT) e um arquivo `LICENSE`.

---

## 👤 Autor

**Weslley Capelari**

- GitHub: <https://github.com/weslleycapelari>
- LinkedIn: <https://www.linkedin.com/in/weslley-capelari>

---

## 🙏 Agradecimentos

- À UNINTER e aos professores/tutores pela base acadêmica.
- À comunidade open source e aos criadores de conteúdo que ajudam a evoluir boas práticas.
