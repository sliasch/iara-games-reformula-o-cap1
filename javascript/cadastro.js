const togglePasswords = document.querySelectorAll(".toggle-password");

togglePasswords.forEach((icon) => {
  icon.addEventListener("click", () => {
    const targetId = icon.getAttribute("data-target");
    const passwordInput = document.getElementById(targetId);

    if (!passwordInput) {
      return;
    }

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
      icon.setAttribute("title", "Ocultar senha");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
      icon.setAttribute("title", "Mostrar senha");
    }
  });
});

const form = document.getElementById("cadastro-form");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");

function verificarSenhas() {
  if (confirmarSenha.value === "") {
    confirmarSenha.classList.remove("input-error");
    confirmarSenha.classList.remove("input-success");
    return;
  }

  if (senha.value !== confirmarSenha.value) {
    confirmarSenha.classList.add("input-error");
    confirmarSenha.classList.remove("input-success");
  } else {
    confirmarSenha.classList.remove("input-error");
    confirmarSenha.classList.add("input-success");
  }
}

senha.addEventListener("input", verificarSenhas);
confirmarSenha.addEventListener("input", verificarSenhas);

form.addEventListener("submit", (event) => {
  if (senha.value !== confirmarSenha.value) {
    event.preventDefault();
    confirmarSenha.classList.add("input-error");
    confirmarSenha.classList.remove("input-success");
    confirmarSenha.focus();
    alert("As senhas não coincidem.");
  }
});