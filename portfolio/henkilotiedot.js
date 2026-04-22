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