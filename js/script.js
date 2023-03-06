function getValue() {
    let now = new Date();
    let name = document.getElementById('fName').value.trim();
    let lastName = document.getElementById('lName').value.trim();
    let mail = document.getElementById('email').value.replaceAll(' ', '').toLowerCase();
    let year = document.getElementById('year').value.replaceAll(' ', '');

    // revealing info block
    document.getElementById('list').classList.add("reveal");

    // filling name block
    document.getElementById('userName').innerHTML = `Full name: <b>${name} ${lastName}</b>`;

    // mail validation
    if (mail.includes('@') == false) {
        document.getElementById('userEmail').innerHTML = `E-mail: not valid e-mail <b>${mail}</b> (symbol @ missing)`;
    } else if (mail.indexOf('@') == 0) {
        document.getElementById('userEmail').innerHTML = `E-mail: not valid e-mail <b>${mail}</b> (symbol @ find in first place)`;
    } else if (mail.length - mail.indexOf('@') == 1) {
        document.getElementById('userEmail').innerHTML = `E-mail: not valid e-mail <b>${mail}</b> (symbol @ find in last place)`;
    } else {
        document.getElementById('userEmail').innerHTML = `E-mail: <b>${mail}</b>`;
    }

    // age count
    let fullYears = new Date(`${year}`);
    let yearsOld = now.getFullYear() - fullYears.getFullYear();
    document.getElementById('userAge').innerHTML = `Age: <b>${yearsOld}</b>`;

}
let submit = document.getElementById('submitButton');
submit.addEventListener('click', getValue);