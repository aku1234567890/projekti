var numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var sanat = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];
function poimi() {
    let a = document.getElementById("a").value;
    document.getElementById("b").innerHTML = sanat[a-1]
}

function loyda() {
    let a = document.getElementById("c").value;
    let b = sanat.indexOf(a)
    document.getElementById("d").innerHTML = b
}

function leikkaa() {
    let a = document.getElementById("e").value;
    let b = document.getElementById("f").value;
    let c = sanat.slice(a, b)
    document.getElementById("g").innerHTML = c;
}

function tulosta() {
    for (let a of sanat) {
        let e = document.createElement("li")
        e.innerHTML = a
        document.getElementById("h").appendChild(e)
    }
}

function tulosta2() {
    for (let a of numerot) {
        let e = document.createElement("li")
        e.innerHTML = a
        document.getElementById("h").appendChild(e)
    }
}

function jarjesta() {
    sanat.sort()
}

function jarjesta2() {
    numerot.sort((a, b)=>{return a-b})
}

function kaanna() {
    sanat.reverse()
}

function kaanna2() {
    numerot.reverse()
}

function a() {
    for (let a of numerot) {
        let e = document.createElement("li")
        e.innerHTML = a
        document.getElementById("j").appendChild(e)
    }
}

function b() {
    let a = document.getElementById("i").value;
    numerot = numerot.filter((c)=>c < a)
}

function c() {
    let a = document.getElementById("i").value;
    numerot = numerot.filter((c)=>c > a)
}