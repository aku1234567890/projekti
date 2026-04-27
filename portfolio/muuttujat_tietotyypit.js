
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

function date_and_time() {
    let l = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"]
    let m = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu"]
    let a = new Date().toLocaleDateString("fi-FI");
    document.getElementById("paivamaara").innerHTML = a;
    let b = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    document.getElementById("aika").innerHTML = b;
    let c = new Date().toLocaleString("fi-FI")
    document.getElementById("paivaJaAika").innerHTML = c;
    let d = new Date().getDay()
    console.log(d)
    document.getElementById("viikonpaiva").innerHTML = l[d]
    let e = new Date().getMonth()
    document.getElementById("kuukausi").innerHTML = m[e]

    
}