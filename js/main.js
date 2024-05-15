$(document).ready(function () {

    $('form').submit(function (e) {
        e.preventDefault();
        $('#nome').val('')
        $('#email').val('')
        $('#adress').val('')
        $('#more').val('')
        $('#cpf').val('')
        $('#cep').val('')
        $('#telefone').val('')
    })

    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
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
            mais: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo',
            email: 'Forneça um endereço de e-mail válido',
            telefone: 'Por favor insira um número de celular válido',
            cpf: 'Insira um CPF válido',
            cep: 'CEP inválido'
        }

    })
})