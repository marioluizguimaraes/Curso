document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmaSenha = document.getElementById('confirmaSenha').value;

    let mensagem = document.getElementById('mensagem');

    if (nome && email && senha && senha === confirmaSenha) {
        mensagem.className = 'mensagem-sucesso';
        mensagem.innerText = 'Você foi cadastrado com sucesso!';

    } else {
        mensagem.className = 'mensagem-erro';
        mensagem.innerText = 'Por favor, preencha todos os campos corretamente.';
    }
});

document.getElementById('cadastroForm').addEventListener('reset', function() {
    let mensagem = document.getElementById('mensagem');
    mensagem.className = 'hidden';
});

/*

*/