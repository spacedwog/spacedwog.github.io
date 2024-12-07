// script.js
document.getElementById("subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    const email = document.getElementById("email").value;
  
    if (email) {
      alert(`Obrigado por se inscrever, ${email}! 🚀`);
      document.getElementById("email").value = ""; // Limpa o campo

    let mailto = 'mailto:owner@spacedwog.com.br?subject=' + subject +
    '&body=Nome: ' + name + '\nEmail: ' + email + '\nSolicitou o projeto: ' + message;
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
});