import ScoreboardView from "./ScoreboardView.js";

let playerOneScoreR = 0;
let playerTwoScoreR = 0;
let playerThreeScoreR = 0;
let playerFourScoreR = 0;
let playerFiveScoreR = 0;
let playerSixScoreR = 0;

let playerOneScoreG = 0;
let playerTwoScoreG = 0;
let playerThreeScoreG = 0;
let playerFourScoreG = 0;
let playerFiveScoreG = 0;
let playerSixScoreG = 0;

const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Team Beer", "Team Konijn", "Team Leeuw", "Team Giraffe", "Team Pinguin", "Team Tijger", (player, direction) => {
	const difference = direction === "1" ? 1 : direction === "2" ? 2 : direction === "5" ? 5 : -1;

	if (player === "one-r") {
		playerOneScoreR = Math.max(playerOneScoreR + difference, 0);
	} else if (player === "two-r") {
		playerTwoScoreR = Math.max(playerTwoScoreR + difference, 0);
	} else if (player === "three-r") {
		playerThreeScoreR = Math.max(playerThreeScoreR + difference, 0);
	} else if (player === "four-r") {
		playerFourScoreR = Math.max(playerFourScoreR + difference, 0);
	} else if (player === "five-r") {
		playerFiveScoreR = Math.max(playerFiveScoreR + difference, 0);
	} else if (player === "six-r") {
		playerSixScoreR = Math.max(playerSixScoreR + difference, 0);
	}
	

    if (player === "one-g") {
		playerOneScoreG = Math.max(playerOneScoreG + difference, 0);
	} else if (player === "two-g") {
		playerTwoScoreG = Math.max(playerTwoScoreG + difference, 0);
	} else if (player === "three-g") {
		playerThreeScoreG = Math.max(playerThreeScoreG + difference, 0);
	} else if (player === "four-g") {
		playerFourScoreG = Math.max(playerFourScoreG + difference, 0);
	} else if (player === "five-g") {
		playerFiveScoreG = Math.max(playerFiveScoreG + difference, 0);
	} else if (player === "six-g") {
		playerSixScoreG = Math.max(playerSixScoreG + difference, 0);
	}


	view.update(playerOneScoreR, playerTwoScoreR, playerThreeScoreR, playerFourScoreR, playerFiveScoreR, playerSixScoreR, playerOneScoreG, playerTwoScoreG, playerThreeScoreG, playerFourScoreG, playerFiveScoreG, playerSixScoreG);
});