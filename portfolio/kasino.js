function noppa() {
    document.getElementById("noppa").innerHTML = Math.floor(Math.random()*6) + 1
}

function lotto() {
    document.getElementById("lotto").innerHTML = "";
    for (let i=0;i<7;i++) {
        let a = Math.floor(Math.random()*40)+1
        document.getElementById("lotto").append(a + ", ")
    }
}