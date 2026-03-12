const params = new URLSearchParams(window.location.search);

const score = Number(params.get("score")) || 0;
const username = params.get("username") || "anonymous";

document.getElementById("ScoreValue").innerText = score;

let level;

if (score < 40) {
    level = "Still Normal Human";
}
else if (score < 80) {
    level = "Slightly Cooked";
}
else {
    level = "Terminally Online Creature";
}

document.getElementById("cookLevel").innerText = level;
document.getElementById("YourRank").innerText = "Nulla";

document.getElementById("shareBtn").onclick = () => {

    const text = `I scored ${score} on the "How Cooked Are You" test 😭`;

    navigator.clipboard.writeText(text)
        .then(() => alert("Result copied to clipboard!"))
        .catch(() => alert("Clipboard failed"));
};

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

console.log(typeof(leaderboard));

leaderboard.push({
    username: username,
    score: score,
    rank:0
});

localStorage.setItem("leaderboard", JSON.stringify(leaderboard));