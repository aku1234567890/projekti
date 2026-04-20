lista = ["Tehtävä1", "Tehtävä2"]

function paivitaLista() {
    document.querySelector("ul").innerHTML = "";
    for (let l of lista) {
        let a = document.createElement("li")
        a.innerHTML = l
        document.querySelector("ul").appendChild(a)
    }
}

function lisaa() {
    let value = document.getElementById("a").value;
    lista.push(value)
    paivitaLista()
}