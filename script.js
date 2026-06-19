
// script.js
// Aguarda o carregamento completo da estrutura da página (DOM)
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("welcome-overlay");

    // Mantém a tela de boas-vindas visível por 2.5 segundos
    setTimeout(() => {
        if (overlay) {
            // Adiciona a classe CSS que altera a opacidade para 0 de forma suave (fade-out)
            overlay.classList.add("fade-out");
        }
    }, 2500);
});
