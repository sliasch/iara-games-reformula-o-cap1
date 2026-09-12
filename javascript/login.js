const togglePassword = document.querySelector(".toggle-password");

if (togglePassword) {
  togglePassword.addEventListener("click", () => {
    const targetId = togglePassword.getAttribute("data-target");
    const passwordInput = document.getElementById(targetId);

    if (!passwordInput) {
      return;
    }

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.classList.remove("fa-eye-slash");
      togglePassword.classList.add("fa-eye");
      togglePassword.setAttribute("title", "Ocultar senha");
    } else {
      passwordInput.type = "password";
      togglePassword.classList.remove("fa-eye");
      togglePassword.classList.add("fa-eye-slash");
      togglePassword.setAttribute("title", "Mostrar senha");
    }
  });
}