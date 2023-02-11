const Questions = [{ //fonction question 
    id: 0, //idée de la question
    q: "Qui a nomer Kiana Kaslana ?", //question
    a: [{ text: "Mei Raiden", isCorrect: false }, //réponse 
        { text: "Cecilia Kaslana", isCorrect: false },
        { text: "Theresa Apocalyspe", isCorrect: true },
        { text: "Durandal", isCorrect: false }
    ]
},
{
    id: 1,
    q: "Qu'elle est le nom du 2nd herrscher ?",
    a: [{ text: "herrscher de la Sentence", isCorrect: false, isSelected: false },
        { text: "herrscher de la foudre", isCorrect: false },
        { text: "herrscher de la Raison", isCorrect: false },
        { text: "herrscher du Néant", isCorrect: true }
    ]
},
{
    id: 2,
    q: "Qu'elle est le niveau où les les EFV sont débloquer ? ",
    a: [{ text: "10", isCorrect: false },
        { text: "25", isCorrect: false },
        { text: "50", isCorrect: true },
        { text: "70", isCorrect: false }
    ]

},
{
    id: 3,
    q: "Qu'elle est l'arme du Herrescher du Néant ?",
    a: [{ text: "Une épée lourde", isCorrect: false},
        { text: "Un sabre", isCorrect: false },
        { text: "Deux Gant", isCorrect: false },
        { text: "Deux pistolet", isCorrect: true }
    ]
},
{
    id: 4,
    q: "Comment se nomme le dragon honkai ?",
    a: [{ text: "Dragou", isCorrect: false},
        { text: "Benares", isCorrect: true },
        { text: "Fifi", isCorrect: false },
        { text: "Frozen", isCorrect: false }
    ]
}

]
var start = true;

function iterate(id) {

var result = document.getElementsByClassName("result");
result[0].innerText = "";

const question = document.getElementById("question"); //permet de remplacer les paragraphe de la question 

question.innerText = Questions[id].q;

const op1 = document.getElementById('op1'); //permet de remplacer les paragraphe des options
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

op1.value = Questions[id].a[0].isCorrect; 
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

op1.addEventListener("click", () => { //permet de faire une animation pour la sélection des réponse
    op1.style.backgroundColor = "orange";
    op2.style.backgroundColor = "rgb(80, 133, 202)"; //style des clicker 
    op3.style.backgroundColor = "rgb(80, 133, 202)";
    op4.style.backgroundColor = "rgb(80, 133, 202)";
    selected = op1.value;
})

op2.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(80, 133, 202)";//style des clicker 
    op2.style.backgroundColor = "orange";
    op3.style.backgroundColor = "rgb(80, 133, 202)";
    op4.style.backgroundColor = "rgb(80, 133, 202)";
    selected = op2.value;
})

op3.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(80, 133, 202)";//style des clicker 
    op2.style.backgroundColor = "rgb(80, 133, 202)";
    op3.style.backgroundColor = "orange";
    op4.style.backgroundColor = "rgb(80, 133, 202)";
    selected = op3.value;
})

op4.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(80, 133, 202)";//style des clicker 
    op2.style.backgroundColor = "rgb(80, 133, 202)";
    op3.style.backgroundColor = "rgb(80, 133, 202)";
    op4.style.backgroundColor = "orange";
    selected = op4.value;
})

const evaluate = document.getElementsByClassName("evaluate"); //quand le bouton evaluate est pressé

evaluate[0].addEventListener("click", () => { //permet d'afficher si une question et vrai ou fausse
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => { //permet de changer de question 
start = false;
if (id < 6) {
    id++;
    iterate(id);
    console.log(id);
}

})


