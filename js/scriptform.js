function calcular() {
    var nome = document.getElementById("inputName").value;
    var cartao = document.getElementById("cartao").value;
    var jogops4 = document.getElementById("ps4").value;
    var jogops5 = document.getElementById("ps5").value;
    var jogoxone = document.getElementById("xone").value;
    var jogoxsx = document.getElementById("xseriesx").value;
    var valcard;
    var val1;
    var val2;
    var val3;
    var val4;
    var totalvalores;
    var msg = "Compra de games";

    //*SWITCH DOS CARTÕES
    switch (cartao) {
        case 'cartao1':
            valcard = 139.90;
            break;
        case 'cartao2':
            valcard = 179.90;
            break;
        case 'cartao3':
            valcard = 79.90;
            break;
        case 'cartao4':
            valcard = 139.90;
            break;
        case 'cartao5':
            valcard = 229.90;
            break;
        case 'cartao6':
            valcard = 99.90;
            break;
        default:
            valcard = 0;
    }

    //*SWITCH DOS JOGOS DE PS5
    switch (jogops5) {
        case 'ps5-1':
            val1 = 229.90;
            break;
        case 'ps5-2':
            val1 = 299.90;
            break;
        case 'ps5-3':
            val1 = 349.90;
            break;
        case 'ps5-4':
            val1 = 359.90;
            break;
        case 'ps5-5':
            val1 = 299.90;
            break;
        case 'ps5-6':
            val1 = 309.90;
            break;
        case 'ps5-7':
            val1 = 360.90;
            break;
        case 'ps5-8':
            val1 = 332.90;
            break;
        case 'ps5-9':
            val1 = 269.90;
            break;
        case 'ps5-10':
            val1 = 331.90;
            break;
        case 'ps5-11':
            val1 = 299.90;
            break;
        case 'ps5-12':
            val1 = 398.90;
            break;
        default:
            val1 = 0;
    }

    //*SWITCH DOS JOGOS DE PS4
    switch (jogops4) {
        case 'ps4-1':
            val2 = 209.90;
            break;
        case 'ps4-2':
            val2 = 169.90;
            break;
        case 'ps4-3':
            val2 = 99.90;
            break;
        case 'ps4-4':
            val2 = 89.90;
            break;
        case 'ps4-5':
            val2 = 89.90;
            break;
        case 'ps4-6':
            val2 = 89.90;
            break;
        case 'ps4-7':
            val2 = 149.90;
            break;
        case 'ps4-8':
            val2 = 79.90;
            break;
        case 'ps4-9':
            val2 = 199.90;
            break;
        case 'ps4-10':
            val2 = 199.90;
            break;
        case 'ps4-11':
            val2 = 129.90;
            break;
        case 'ps4-12':
            val2 = 119.90;
            break;
        default:
            val2 = 0;
    }

    //*SWITCH DOS JOGOS DE XONE
    switch (jogoxone) {
        case 'xone1':
            val3 = 159.90;
            break;
        case 'xone2':
            val3 = 119.90;
            break;
        case 'xone3':
            val3 = 229.90;
            break;
        case 'xone4':
            val3 = 139.90;
            break;
        case 'xone5':
            val3 = 79.90;
            break;
        case 'xone6':
            val3 = 229.90;
            break;
        case 'xone7':
            val3 = 289.90;
            break;
        case 'xone8':
            val3 = 339.90;
            break;
        case 'xone9':
            val3 = 199.90;
            break;
        case 'xone10':
            val3 = 249.90;
            break;
        case 'xone11':
            val3 = 149.90;
            break;
        case 'xone12':
            val3 = 169.90;
            break;
        default:
            val3 = 0;
    }

    //*SWITCH DOS JOGOS DE XBOX SERIES X
    switch (jogoxsx) {
        case 'xsx1':
            val4 = 289.90;
            break;
        case 'xsx2':
            val4 = 360.90;
            break;
        case 'xsx3':
            val4 = 369.90;
            break;
        case 'xsx4':
            val4 = 349.90;
            break;
        case 'xsx5':
            val4 = 229.90;
            break;
        case 'xsx6':
            val4 = 289.90;
            break;
        case 'xsx7':
            val4 = 269.90;
            break;
        case 'xsx8':
            val4 = 331.90;
            break;
        case 'xsx9':
            val4 = 307.90;
            break;
        case 'xsx10':
            val4 = 322.90;
            break;
        case 'xsx11':
            val4 = 356.90;
            break;
        case 'xsx12':
            val4 = 269.90;
            break;
        default:
            val4 = 0;
    }

    totalvalores = val1 + val2 + val3 + val4 + valcard;
    var frete = (totalvalores * 5) / 100;
    var totalcompra = totalvalores + frete;
    var parcela = totalcompra / 3;

    msg += "<p>Cliente: " + nome + "</p>"
    msg += "<p>Valor do(s) jogo(s) e/ou cartão: R$" + totalvalores.toFixed(2) + "</p>"
    msg += "<p>Valor do frete: R$" + frete.toFixed(2) + "</p>"
    msg += "<p>O valor total é: R$" + totalcompra.toFixed(2) + "</p>";
    msg += "<p>Ou 3 vezes de R$" + parcela.toFixed(2) + " sem juros! </p>"


    document.getElementById('res').innerHTML = msg;
}

function confirmar() {
    alert('Sua compra foi realizada com sucesso, o produto deve chegar em até 15 dias. Obrigado pela preferência!');
    //*O DOCUMENT.LOCATION.RELOAD(); RECARREGA A PÁGINA ATUAL
    //document.location.reload();

    //*O WINDOW.LOCATION.HREF REDIRECIONA O USUÁRIO PARA OUTRA PÁGINA
    window.location.href = "index.html";
}