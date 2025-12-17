let flashcards = [];
let index = 0;
let flipped = false;

const addBtn = document.getElementById("button1");
const flipBox = document.getElementById("flipBox");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");

addBtn.onclick = () => {
    const q = document.getElementById("userInput").value.trim();
    const a = document.getElementById("userInput2").value.trim();

    if (!q || !a) return;

    flashcards.push({ q, a });
    shuffle();
    index = 0;
    showCard();
};

function showCard(){
    flipBox.classList.remove("flip");
    flipped = false;

    if (!flashcards.length) return;

    questionText.textContent = flashcards[index].q;
    answerText.textContent = flashcards[index].a;
}

document.getElementById("show").onclick = () => {
    flipBox.classList.add("flip");
    flipped = true;
};

document.getElementById("next").onclick = () => {
    if (!flipped) flipBox.classList.add("flip");

    setTimeout(() => {
        index++;
        if (index >= flashcards.length) end();
        else showCard();
    }, 800);
};

document.getElementById("prev").onclick = () => {
    if (index > 0) {
        index--;
        showCard();
    }
};

document.getElementById("delete").onclick = () => {
    flashcards = [];
    index = 0;
    flipBox.classList.remove("flip");
    questionText.textContent = "All flashcards deleted";
    answerText.textContent = "";
};

function end(){
    questionText.textContent = "🎉 Congratulations!";
    answerText.textContent = "You finished all flashcards!";
    flipBox.classList.add("flip");
}

function shuffle(){
    flashcards.sort(() => Math.random() - 0.5);
}
