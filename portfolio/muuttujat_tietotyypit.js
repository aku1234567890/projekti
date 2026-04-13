
function summa(a, b) {
    alert(a+b)
}
function vahennys(a, b) {
    alert(a-b)
}
function kerto(a, b) {
    alert(a*b)
}
function jako(a, b) {
    alert(a/b)
}


function laskin_summa(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    summa(n1, n2)
}

function laskin_vahennys(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    vahennys(n1, n2)
}

function laskin_kerto(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    kerto(n1, n2)
}

function laskin_jako(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    jako(n1, n2)
}