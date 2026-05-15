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