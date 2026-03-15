const params = new URLSearchParams(window.location.search);

const score = Number(params.get("score")) || 0;
const username = params.get("username") || "anonymous";

document.getElementById("ScoreValue").innerText = score;

let level;

if (score < 40) {
    level = "Tum ek achhe insan ho";
}
else if (score < 80) {
    level = "Bas Chhod do ab sab kuchh";
}
else {
    level = "Tum Zinda kese ho";
}

document.getElementById("cookLevel").innerText = level;


document.getElementById("shareBtn").onclick = () => {

    const text = `I scored ${score} on the "How Cooked Are You" test 😭`;

    navigator.clipboard.writeText(text)
        .then(() => alert("Result copied to clipboard!"))
        .catch(() => alert("Clipboard failed"));
};

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

const exists = leaderboard.some(
    player => player.username === username && player.score === score
);

if (!exists) {
    leaderboard.push({
        username: username,
        score: score,
    });
}

leaderboard.sort((a,b) => b.score - a.score);
leaderboard.slice(0, 10);

const rank_set = (leaderboard, username, score) => {

    const index = leaderboard.findIndex(
        player => player.username === username && player.score === score
    );

    document.getElementById("YourRank").innerText = "#" + (index + 1);
};

rank_set(leaderboard, username, score);


const BoardRender = (board) => {
    const rank = document.getElementById("Ranks");

    rank.innerHTML = "";

    board.forEach((player, index) => {
        rank.innerHTML += `
            <span> #${index + 1}. ${player.username} </span>
        `;
    });
    console.log(rank);
};

BoardRender(leaderboard);
localStorage.setItem("leaderboard", JSON.stringify(leaderboard));