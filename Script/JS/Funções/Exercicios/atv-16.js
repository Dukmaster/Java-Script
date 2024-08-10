



function questionario() {

    let nome = prompt('Digite seu nome');
    let email = prompt('Digite seu E-mail');
    let tel = prompt('Digite seu telefone + DDD');

    
    document.write('<h1>Nome: ' + nome + '</h1>');
    document.write('<h1>E-mail: ' + email + '</h1>');
    document.write('<h1>Tel.: ' + tel + '</h1>');
}

questionario();