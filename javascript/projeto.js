function createIA() {

    const name = getNome();
    const email = getEmail();

    let mailto = 'mailto:owner@spacedwog.com.br?subject=' + tipo_anúncio +
        '&body=Nome: ' + name + '\nEmail: ' + email + '\nConfira nosso produto: ' + message;
    
    setUsuario(name, email);

    if (email != "") {
        window.location.href = mailto;
    }
}