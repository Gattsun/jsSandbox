const name = 'Marten Eerik Kärner';
const age = 19;
const job = 'Student';
const city = 'Tallinn';
const gender = 'Male';

const today = new Date();
let option = {weekday: 'long', year: 'numeric', month:'long', day: 'numeric'}
let fullDate = today.toLocaleDateString("en-US", option);
console.log(fullDate);

const html = `
    <h1> ${fullDate} </h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Gender: ${gender}</li>

    </ul>
`;

document.body.innerHTML = html;