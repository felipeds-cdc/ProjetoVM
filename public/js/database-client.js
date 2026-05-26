function showMessage(form, message, isError = false) {
  let box = form.querySelector(".js-form-status");

  if (!box) {
    box = document.createElement("p");
    box.className = "js-form-status au-caption";
    box.style.marginTop = "1rem";
    form.appendChild(box);
  }

  box.textContent = message;
  box.style.color = isError ? "#ff6b6b" : "#63e6be";
}

function formDataToObject(form) {
  return Object.fromEntries(new FormData(form).entries());
}

async function enviarParaApi(form) {
  const resposta = await fetch(form.action, {
    method: form.method || "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataToObject(form)),
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    showMessage(form, dados.erro || "Erro ao salvar.", true);
    return;
  }

  if (dados.usuario) {
    localStorage.setItem("vortexUsuarioLogado", JSON.stringify(dados.usuario));
  }

  showMessage(form, dados.mensagem || "Salvo com sucesso.");
  form.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  const cadastroForm = document.querySelector('form[action="/api/auth/register"]');
  const loginForm = document.querySelector('form[action="/api/auth/login"]');
  const contatoForm = document.querySelector('form[action="/api/contact"]');

  if (cadastroForm) {
    cadastroForm.addEventListener("submit", (event) => {
      event.preventDefault();
      enviarParaApi(cadastroForm);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      enviarParaApi(loginForm);
    });
  }

  if (contatoForm) {
    contatoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      enviarParaApi(contatoForm);
    });
  }
});
