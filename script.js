// Quotes for the application
let motivationalQuotes = {
    studentQuotes: [
        '"You\'ve got to get up every morning with determination if you\'re re going to go to bed with satisfaction" - George Lorimer',
        '"Take the attitude of a student, never be too big to ask questions, never know too much to learn something new." - Augustine Og Mandino',
        '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela',
        '"The most difficult thing is the decision to act, the rest is merely tenacity". - Amelia Earhart'
    ],
    successQuotes: [
        '"Success is not final; failure is not fatal: It is the courage to continue that counts." - Winston S. Churcill',
        '"It is better ti fail in originality than to succeed in imitation." - Herman Melville',
        '"The road to success and the road to failure are almost exactly the same." - Colin R. Davis',
        '"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success". - Dale Carnegie'
    ],
    workQuotes: [
        '"Concentrate all your thoughts upon the work in hand. The sun\'s do not burn until brought to a focus." - Alexander Graham Bell',
        '"Either you run the day or the day runs you." - Jim Rohn',
        '"Setting goals is the first step in turning the invisible into the visible". - Tony Robbins',
        '"When we strive to become better than we are, everything around us becomes better too." - Paulo Coelho'
    ]
}

let quoteArr = [];

function generateRandNum(num) {
    return Math.floor(Math.random() * num);
}


for (let item in motivationalQuotes) {
    let selected = generateRandNum(motivationalQuotes[item].length)
    switch(item) {
        case 'studentQuotes':
            quoteArr.push(`\n${motivationalQuotes[item][selected]}<br>`);
            break;
        case 'successQuotes':
            quoteArr.push(`\n${motivationalQuotes[item][selected]}<br>`);
            break;
        case 'workQuotes':
            quoteArr.push(`\n${motivationalQuotes[item][selected]}<br>`);
            break;
        default:
            quoteArr.push('Further updates will come soon!');
            break;
    }
}
let messageBox = document.querySelector('#displayMessage');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
        messageBox.innerHTML = `${quoteArr}`;
    })

/*
for (let prop in jokeOptions) {
    let indexSelected = randomIndexGenerator(jokeOptions[prop].length);
    let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;
 */