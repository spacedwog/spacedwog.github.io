function createIA() {

    const email = getCookie("usermemail");
    const tipo_anuncio = getCookie("tipo_produto");
    const social_media = getCookie("rede_social");
    const projetos = getCookie("projeto");
    const contato = getCookie("chat");

    const corpo_email = "Confira nossos projetos: " + projetos + "\nSiga-nos em nossas redes sociais: " + social_media
                        "Para entrar em contato acesse: " + contato + "\n@Spacedwog agradece a preferência";

    let mailto = 'mailto:owner@spacedwog.com.br?subject=' + tipo_anuncio +
        '&body= ' + corpo_email;

    if (email != "") {
        window.location.href = mailto;
    }
}