export default class ScoreboardView {
	constructor(root, playerOneName, playerTwoName, playerThreeName, playerFourName, playerFiveName, playerSixName, onControlButtonClick) {
		this.root = root;
		this.root.innerHTML = `
			<div class="header">Scorebord</div>
			<br>
			<div class="scoreboard-icons">
				<div class="scoreboard__icon scoreboard__icon--one"><img id="icon-one" src="bear.png" alt="bear"></div>
				<div class="scoreboard__icon scoreboard__icon--two"><img id="icon-two" src="rabbit.png" alt="bear"></div>
				<div class="scoreboard__icon scoreboard__icon--three"><img id="icon-three" src="lion.png" alt="bear"></div>
				<div class="scoreboard__icon scoreboard__icon--four"><img id="icon-four" src="giraffe.png" alt="bear"></div>
				<div class="scoreboard__icon scoreboard__icon--five"><img id="icon-five" src="penguin.png" alt="bear"></div>
				<div class="scoreboard__icon scoreboard__icon--six"><img id="icon-six" src="tiger.png" alt="bear"></div>
			</div>
			<br>
			<div class="header">Sport punten</header>
			<div class="scoreboard-r">
				<div class="scoreboard__name scoreboard__name--one"><p contenteditable="true">${playerOneName}</p></div>
				<div class="scoreboard__name scoreboard__name--two"><p contenteditable="true">${playerTwoName}</p></div>
				<div class="scoreboard__name scoreboard__name--three"><p contenteditable="true">${playerThreeName}</p></div>
				<div class="scoreboard__name scoreboard__name--four"><p contenteditable="true">${playerFourName}</p></div>
				<div class="scoreboard__name scoreboard__name--five"><p contenteditable="true">${playerFiveName}</p></div>
				<div class="scoreboard__name scoreboard__name--six"><p contenteditable="true">${playerSixName}</p></div>
				<div class="scoreboard__score-r" data-for-player="one-r">0</div>
				<div class="scoreboard__score-r" data-for-player="two-r">0</div>
				<div class="scoreboard__score-r" data-for-player="three-r">0</div>
				<div class="scoreboard__score-r" data-for-player="four-r">0</div>
				<div class="scoreboard__score-r" data-for-player="five-r">0</div>
				<div class="scoreboard__score-r" data-for-player="six-r">0</div>
				<div class="scoreboard__controls-r" data-for-player="one-r">
					<button class="scoreboard__control-button-r">-</button>
					<button class="scoreboard__control-button-r">1</button>
					<button class="scoreboard__control-button-r">2</button>
					<button class="scoreboard__control-button-r">5</button>
				</div>
				<div class="scoreboard__controls-r" data-for-player="two-r">
					<button class="scoreboard__control-button-r">-</button>
					<button class="scoreboard__control-button-r">1</button>
					<button class="scoreboard__control-button-r">2</button>
					<button class="scoreboard__control-button-r">5</button>
				</div>
				<div class="scoreboard__controls-r" data-for-player="three-r">
					<button class="scoreboard__control-button-r">-</button>
					<button class="scoreboard__control-button-r">1</button>
					<button class="scoreboard__control-button-r">2</button>
					<button class="scoreboard__control-button-r">5</button>
				</div>
				<div class="scoreboard__controls-r" data-for-player="four-r">
					<button class="scoreboard__control-button-r">-</button>
					<button class="scoreboard__control-button-r">1</button>
					<button class="scoreboard__control-button-r">2</button>
					<button class="scoreboard__control-button-r">5</button>
				</div>
				<div class="scoreboard__controls-r" data-for-player="five-r">
					<button class="scoreboard__control-button-r">-</button>
					<button class="scoreboard__control-button-r">1</button>
					<button class="scoreboard__control-button-r">2</button>
					<button class="scoreboard__control-button-r">5</button>
				</div>
				<div class="scoreboard__controls-r" data-for-player="six-r">
					<button class="scoreboard__control-button-r">-</button>
					<button class="scoreboard__control-button-r">1</button>
					<button class="scoreboard__control-button-r">2</button>
					<button class="scoreboard__control-button-r">5</button>
				</div>
				<br>
			</div>
			<div class="header">Wiskunde punten</div>
			<div class="scoreboard-g">
				<div class="scoreboard__name scoreboard__name--one"><p contenteditable="true">${playerOneName}</p></div>
				<div class="scoreboard__name scoreboard__name--two"><p contenteditable="true">${playerTwoName}</p></div>
				<div class="scoreboard__name scoreboard__name--three"><p contenteditable="true">${playerThreeName}</p></div>
				<div class="scoreboard__name scoreboard__name--four"><p contenteditable="true">${playerFourName}</p></div>
				<div class="scoreboard__name scoreboard__name--five"><p contenteditable="true">${playerFiveName}</p></div>
				<div class="scoreboard__name scoreboard__name--six"><p contenteditable="true">${playerSixName}</p></div>
				<div class="scoreboard__score-g" data-for-player="one-g">0</div>
				<div class="scoreboard__score-g" data-for-player="two-g">0</div>
				<div class="scoreboard__score-g" data-for-player="three-g">0</div>
				<div class="scoreboard__score-g" data-for-player="four-g">0</div>
				<div class="scoreboard__score-g" data-for-player="five-g">0</div>
				<div class="scoreboard__score-g" data-for-player="six-g">0</div>
				<div class="scoreboard__controls-g" data-for-player="one-g">
					<button class="scoreboard__control-button-g">-</button>
					<button class="scoreboard__control-button-g">1</button>
					<button class="scoreboard__control-button-g">2</button>
					<button class="scoreboard__control-button-g">5</button>
				</div>
				<div class="scoreboard__controls-g" data-for-player="two-g">
					<button class="scoreboard__control-button-g">-</button>
					<button class="scoreboard__control-button-g">1</button>
					<button class="scoreboard__control-button-g">2</button>
					<button class="scoreboard__control-button-g">5</button>
				</div>
				<div class="scoreboard__controls-g" data-for-player="three-g">
					<button class="scoreboard__control-button-g">-</button>
					<button class="scoreboard__control-button-g">1</button>
					<button class="scoreboard__control-button-g">2</button>
					<button class="scoreboard__control-button-g">5</button>
				</div>
				<div class="scoreboard__controls-g" data-for-player="four-g">
					<button class="scoreboard__control-button-g">-</button>
					<button class="scoreboard__control-button-g">1</button>
					<button class="scoreboard__control-button-g">2</button>
					<button class="scoreboard__control-button-g">5</button>
				</div>
				<div class="scoreboard__controls-g" data-for-player="five-g">
					<button class="scoreboard__control-button-g">-</button>
					<button class="scoreboard__control-button-g">1</button>
					<button class="scoreboard__control-button-g">2</button>
					<button class="scoreboard__control-button-g">5</button>
				</div>
				<div class="scoreboard__controls-g" data-for-player="six-g">
					<button class="scoreboard__control-button-g">-</button>
					<button class="scoreboard__control-button-g">1</button>
					<button class="scoreboard__control-button-g">2</button>
					<button class="scoreboard__control-button-g">5</button>
				</div>
				<br>
			</div>
			<div class="header">Totaal punten</div>
			<div class="scoreboard-t">
				<div class="scoreboard__name scoreboard__name--one"><p contenteditable="true">${playerOneName}</p></div>
				<div class="scoreboard__name scoreboard__name--two"><p contenteditable="true">${playerTwoName}</p></div>
				<div class="scoreboard__name scoreboard__name--three"><p contenteditable="true">${playerThreeName}</p></div>
				<div class="scoreboard__name scoreboard__name--four"><p contenteditable="true">${playerFourName}</p></div>
				<div class="scoreboard__name scoreboard__name--five"><p contenteditable="true">${playerFiveName}</p></div>
				<div class="scoreboard__name scoreboard__name--six"><p contenteditable="true">${playerSixName}</p></div>
				<div class="scoreboard__score-t"><progress id="one-t" value="0" max="40"></progress></div>
				<div class="scoreboard__score-t"><progress id="two-t" value="0" max="40"></progress></div>
				<div class="scoreboard__score-t"><progress id="three-t" value="0" max="40"></progress></div>
				<div class="scoreboard__score-t"><progress id="four-t" value="0" max="40"></progress></div>
				<div class="scoreboard__score-t"><progress id="five-t" value="0" max="40"></progress></div>
				<div class="scoreboard__score-t"><progress id="six-t" value="0" max="40"></progress></div>
				<div class="scoreboard__score-t" data-for-player="one-t">0</div>
				<div class="scoreboard__score-t" data-for-player="two-t">0</div>
				<div class="scoreboard__score-t" data-for-player="three-t">0</div>
				<div class="scoreboard__score-t" data-for-player="four-t">0</div>
				<div class="scoreboard__score-t" data-for-player="five-t">0</div>
				<div class="scoreboard__score-t" data-for-player="six-t">0</div>
			</div>
		`;

		this.root.querySelectorAll(".scoreboard__control-button-r").forEach(controlButton => {
			controlButton.addEventListener("click", () => {
				const direction = controlButton.textContent === "1" ? "1" : controlButton.textContent === "2" ? "2" : controlButton.textContent === "5" ? "5" : "-1";
				const player = controlButton.closest(".scoreboard__controls-r").dataset.forPlayer;

				onControlButtonClick(player, direction);
			});
		});

        this.root.querySelectorAll(".scoreboard__control-button-g").forEach(controlButton => {
			controlButton.addEventListener("click", () => {
				const direction = controlButton.textContent === "1" ? "1" : controlButton.textContent === "2" ? "2" : controlButton.textContent === "5" ? "5" : "-1";
				const player = controlButton.closest(".scoreboard__controls-g").dataset.forPlayer;

				onControlButtonClick(player, direction);
			});
		});
	}

	update(playerOneScoreR, playerTwoScoreR, playerThreeScoreR, playerFourScoreR, playerFiveScoreR, playerSixScoreR, playerOneScoreG, playerTwoScoreG, playerThreeScoreG, playerFourScoreG, playerFiveScoreG, playerSixScoreG) {
		this.root.querySelector(".scoreboard__score-r[data-for-player='one-r']").textContent = playerOneScoreR;
		this.root.querySelector(".scoreboard__score-r[data-for-player='two-r']").textContent = playerTwoScoreR;
        this.root.querySelector(".scoreboard__score-r[data-for-player='three-r']").textContent = playerThreeScoreR;
		this.root.querySelector(".scoreboard__score-r[data-for-player='four-r']").textContent = playerFourScoreR;
        this.root.querySelector(".scoreboard__score-r[data-for-player='five-r']").textContent = playerFiveScoreR;
		this.root.querySelector(".scoreboard__score-r[data-for-player='six-r']").textContent = playerSixScoreR;

        this.root.querySelector(".scoreboard__score-g[data-for-player='one-g']").textContent = playerOneScoreG;
		this.root.querySelector(".scoreboard__score-g[data-for-player='two-g']").textContent = playerTwoScoreG;
        this.root.querySelector(".scoreboard__score-g[data-for-player='three-g']").textContent = playerThreeScoreG;
		this.root.querySelector(".scoreboard__score-g[data-for-player='four-g']").textContent = playerFourScoreG;
        this.root.querySelector(".scoreboard__score-g[data-for-player='five-g']").textContent = playerFiveScoreG;
		this.root.querySelector(".scoreboard__score-g[data-for-player='six-g']").textContent = playerSixScoreG;

		document.getElementById('one-t').value = playerOneScoreR + playerOneScoreG;
		document.getElementById('two-t').value = playerTwoScoreR + playerTwoScoreG;
        document.getElementById('three-t').value = playerThreeScoreR + playerThreeScoreG;
		document.getElementById('four-t').value = playerFourScoreR + playerFourScoreG;
        document.getElementById('five-t').value = playerFiveScoreR + playerFiveScoreG;
		document.getElementById('six-t').value = playerSixScoreR + playerSixScoreG;

		this.root.querySelector(".scoreboard__score-t[data-for-player='one-t']").textContent = playerOneScoreR + playerOneScoreG;
		this.root.querySelector(".scoreboard__score-t[data-for-player='two-t']").textContent = playerTwoScoreR + playerTwoScoreG;
        this.root.querySelector(".scoreboard__score-t[data-for-player='three-t']").textContent = playerThreeScoreR + playerThreeScoreG;
		this.root.querySelector(".scoreboard__score-t[data-for-player='four-t']").textContent = playerFourScoreR + playerFourScoreG;
        this.root.querySelector(".scoreboard__score-t[data-for-player='five-t']").textContent = playerFiveScoreR + playerFiveScoreG;
		this.root.querySelector(".scoreboard__score-t[data-for-player='six-t']").textContent = playerSixScoreR + playerSixScoreG;
	}
}