const botao = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent =
        "🌎 Um agro forte é aquele que produz alimentos com responsabilidade, inovação e respeito ao meio ambiente.";
});
