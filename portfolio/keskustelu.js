console.log("Keskustelusivu avattu")

function send() {
    let birthdayField = document.getElementById("birthday").value;
    let emailField = document.getElementById("email").value;
    let typeField = document.getElementById("dropdown").value;
    let usageField = document.getElementById("agree").value;
    let bodyField = document.getElementById("comment").value;
    console.log(birthdayField)
    console.log(emailField)
    console.log(typeField)
    console.log(usageField)
    console.log(bodyField)
    document.getElementById("d").close()
}