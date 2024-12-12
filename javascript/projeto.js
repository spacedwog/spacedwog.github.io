function createIA() {

    const site = "https://github.spacedwog.com.br";
    const projeto = "https://donnaparis.spacedwog.com.br";

    const corpo_email = "Acesse nosso site: " + site + "\n Confira nossos projetos: " + projeto;

    let mailto = 'mailto:owner@spacedwog.com.br?subject=Spacedwog na Nuvem' +
        '&body= ' + corpo_email;

    if (email != "") {
        window.location.href = mailto;
    }
}