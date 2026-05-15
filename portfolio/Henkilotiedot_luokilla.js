class Person {
    constructor(name, age, job, driversLicense) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.driversLicense = driversLicense;
    }
    isUnderage() {
        if (age < 18) {
            return true
        } else {
            return false
        }
    }
    isStudent() {
        if (job == "opiskelija" || job == "student") {
            return true
        } else {
            return false
        }
    }
}

let persons = [
        new Person("Merja Meikäläinen", 20, "Opiskelija", true),
        new Person("Teppo Teikäläinen", 25, "Sähköteknikko", true), 
        new Person("Helena Heikäläinen", 30, "Ohjelmistosuunnittelija", false), 
        new Person("Semir Sikäläinen", 18, "Opiskelija", true), 
        new Person("Tomas Täkäläinen", 22, "Linja-autonkuljettaja", true)
    ]

let rivit = document.querySelector("tbody")
function luoRivit() {
    rivit.innerHTML = "";
    for (let henkilo of persons) {
        if (!henkilo.isUnderage()) {
            henkilo.age = henkilo.age + "🍺"
        }
        if (henkilo.isStudent()) {
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