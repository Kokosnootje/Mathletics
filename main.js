import ScoreboardView from "./ScoreboardView.js";

let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore = 0;
let playerFiveScore = 0;
const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Speler 1", "Speler 2", "Speler 3", "Speler 4", "Speler 5", (player, direction) => {
	const difference = direction === "minus" ? -1 : 1;

	if (player === "one") {
		playerOneScore = Math.max(playerOneScore + difference, 0);
	} else if (player === "two") {
		playerTwoScore = Math.max(playerTwoScore + difference, 0);
	} else if (player === "three") {
		playerThreeScore = Math.max(playerThreeScore + difference, 0);
	} else if (player === "four") {
		playerFourScore = Math.max(playerFourScore + difference, 0);
	} else if (player === "five") {
		playerFiveScore = Math.max(playerFiveScore + difference, 0);
	}

	view.update(playerOneScore, playerTwoScore, playerThreeScore, playerFourScore, playerFiveScore);
});
