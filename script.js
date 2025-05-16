console.log('Hello, World!');

const rollDice = () => Math.floor(Math.random() * 6) + 1;

const playGame = () => {
  let player1Score = 0;
  let player2Score = 0;

  for (let i = 0; i < 5; i++) {
    const player1Roll = rollDice();
    const player2Roll = rollDice();
    console.log(
      `Round ${
        i + 1
      }: Player 1 rolled ${player1Roll}, Player 2 rolled ${player2Roll}`
    );

    if (player1Roll > player2Roll) {
      player1Score++;
      console.log('Player 1 wins this round!');
    } else if (player2Roll > player1Roll) {
      player2Score++;
      console.log('Player 2 wins this round!');
    } else {
      console.log("It's a tie!");
    }
  }

  console.log(
    `Final Score: Player 1 - ${player1Score}, Player 2 - ${player2Score}`
  );
  if (player1Score > player2Score) {
    console.log('Player 1 wins the game!');
  } else if (player2Score > player1Score) {
    console.log('Player 2 wins the game!');
  } else {
    console.log('The game is a tie!');
  }
};

playGame();
