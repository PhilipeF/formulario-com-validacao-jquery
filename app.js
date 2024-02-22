$(document).ready(function () {
    $('#nome').mask('A', {
        translation: {
            "A": { pattern: /[a-zA-Z\s]/, recursive: true }
        }
    });
    $('#email').mask('A', {
        placeholder: "you@example.com",
        translation: {
            'A': { pattern: /[\w@\-.+]/, recursive: true }
        }
    });
    $('#telefone').mask('(00)0000-0000', {
        placeholder: "(00)0000-0000",
        translation: {
            '0': {
                pattern: /[0-9]/, recursive: true
            }
        }
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00',
        translation: {
            '0': {
                pattern: /[0-9]/, recursive: true
            }
        }

    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000',
        translation: {
            '0': {
                pattern: /[0-9]/, recursive: true
            }
        }
    });


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um endereço de e-mail válido',
            telefone: 'Por favor, digite um número de telefone válido',
            cpf: 'Por favor insira um número de CPF válido',
            endereco: 'Por favor digite o seu endereço',
            cep: 'Por digite um número de cep válido'


        },
        submitHandler: function (form) {
            alert('Dados ok')
        }
    })
})