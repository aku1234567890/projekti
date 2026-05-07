function poimi() {
    let a = document.getElementById("gg").value;
    let b = document.getElementById("ff").value;
    document.getElementById("aa").innerHTML = a[b-1]
}

function loyda() {
    let a = document.getElementById("v").value;
    let b = document.getElementById("b").value;
    let c = a.indexOf(b)
    c++
    document.getElementById("bb").innerHTML = c
}