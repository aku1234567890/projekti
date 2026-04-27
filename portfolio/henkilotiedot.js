henkilot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false,
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true,
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true,
    },
]

let rivit = document.querySelector("tbody")
function luoRivit() {
    rivit.innerHTML = "";
    for (let henkilo of henkilot) {
        if (henkilo.age >= 18) {
            henkilo.age = henkilo.age + "🍺"
        }
        if (henkilo.job == "Opiskelija") {
            henkilo.job = henkilo.job + "🎓"
        }
        let rivi = document.createElement("tr")
        for (let a in henkilo) {
            let w = document.createElement("td")
            w.innerHTML = henkilo[a]
            rivi.append(w)
        }
        rivit.append(rivi)
    }
}
luoRivit();

function laheta() {
    let n = document.getElementById("name").value;
    let a = document.getElementById("age").value;
    let j = document.getElementById("job").value;
    let d = document.getElementById("drivers_license").checked;
    if (a < 0) {
        alert("Iän pitää olla positiivinen luku")
    } else {
        let w = {
            name: n,
            age: a,
            job: j,
            driverslicense: d,
        }
        henkilot.push(w)
        console.log(w)
        luoRivit();
    }

}