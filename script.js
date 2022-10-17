
let prato;
let bebida;
let sobremesa;
let a = 0;
let b = 0;
let c = 0;
let x = 0;
let y = 0;
let z = 0;
let total = 0;






function escolherFrango() {
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    prato = "Frango";
    a = 1;
    x = 14.9;
    total = x + y + z;
    if (a + b + c == 3) {
        document.getElementById("FecharPedido").style.display = "block";
        document.getElementById("selecioneItens").style.display = "none";
    }
}

function escolherFrango2() {
    document.getElementById("frango2").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    prato = "Frango2";
    a = 1;
    x = 13.9;
    total = x + y + z;
    if (a + b + c == 3) {
        document.getElementById("FecharPedido").style.display = "block";
        document.getElementById("selecioneItens").style.display = "none";
    }
}

function escolherFrango3() {
    document.getElementById("frango3").style.borderColor = "green";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango").style.borderColor = "white";
    prato = "Frango3";
    a = 1;
    x = 12.9;
    total = x + y + z;
    if (a + b + c == 3) {
        document.getElementById("FecharPedido").style.display = "block";
        document.getElementById("selecioneItens").style.display = "none";
    }
}

function escolherCoca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    bebida = "coca";
    b = 1;
    y = 4.9;
    total = x + y + z;
    if (a + b + c == 3) {
        document.getElementById("FecharPedido").style.display = "block";
        document.getElementById("selecioneItens").style.display = "none";
    }
}

function escolherCoca2() {
    document.getElementById("coca2").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    bebida = "coca2";
    b = 1;
    y = 3.9;
    total = x + y + z;
    if (a + b + c == 3) {
        document.getElementById("FecharPedido").style.display = "block";
        document.getElementById("selecioneItens").style.display = "none";
    }
}

function escolherCoca3() {
    document.getElementById("coca3").style.borderColor = "green";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca").style.borderColor = "white";
    bebida = "coca3";
    b = 1;
    y = 2.9;
    total = x + y + z;
    if (a + b + c == 3) {
        document.getElementById("FecharPedido").style.display = "block";
        document.getElementById("selecioneItens").style.display = "none";
    }
}

function escolherPudim() {
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("pudim3").style.borderColor = "white";
    sobremesa = "pudim"
    c = 1;
    z = 7.9;
    total = x + y + z;
    if (a + b + c == 3) {
        document.getElementById("FecharPedido").style.display = "block";
        document.getElementById("selecioneItens").style.display = "none";
    }
}

function escolherPudim2() {
    document.getElementById("pudim2").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("pudim3").style.borderColor = "white";
    sobremesa = "pudim2"
    c = 1;
    z = 6.9;
    total = x + y + z;
    if (a + b + c == 3) {
        document.getElementById("FecharPedido").style.display = "block";
        document.getElementById("selecioneItens").style.display = "none";
    }
}

function escolherPudim3() {
    document.getElementById("pudim3").style.borderColor = "green";
    document.getElementById("pudim2").style.borderColor = "white";
    document.getElementById("pudim").style.borderColor = "white";
    sobremesa = "pudim3"
    c = 1;
    z = 5.9;
    total = x + y + z;
    if (a + b + c == 3) {
        document.getElementById("FecharPedido").style.display = "block";
        document.getElementById("selecioneItens").style.display = "none";
    }
}

function finalizarPedido(){
    let mensagem = "Olá, gostaria de fazer o pedido:"+"\n- Prato: " + prato + "\n- Bebida: " + bebida + "\n- Sobremesa: "+sobremesa+ "\nTotal: R$ " + total.toFixed(2);
    window.open("https://wa.me/+5521999999999?text="+mensagem);
}

