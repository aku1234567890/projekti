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