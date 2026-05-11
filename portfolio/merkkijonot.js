function poimi() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    document.getElementById("c").innerHTML = a[b-1]
}

function loyda() {
    let a = document.getElementById("d").value;
    let b = document.getElementById("e").value;
    let c = a.indexOf(b)
    c++
    document.getElementById("f").innerHTML = c
}

function leikkaa() {
    let a = document.getElementById("g").value;
    let b = document.getElementById("h").value;
    let c = document.getElementById("i").value;
    let d = a.slice(b, c)
    document.getElementById("j").innerHTML = d
}

function etsi() {
    let a = document.getElementById("k").value;
    let b = document.getElementById("l").value;
    let c = document.getElementById("m").value;
    let d = a.replace(b, c)
    document.getElementById("n").innerHTML = d
}

function poikki() {
    let a = document.getElementById("o").value;
    let b = document.getElementById("p").value;
    let c = a.split(b)
    for (let d of c) {
        let e = document.createElement("li")
        e.innerHTML = d
        document.getElementById("q").appendChild(e)
    }
}