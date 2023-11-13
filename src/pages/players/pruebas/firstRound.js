export function selectFirstRoundPlayers(players) {
 const player1 = players[Math.floor(Math.random() * players.length)];
 const player2 = players[Math.floor(Math.random() * players.length)];
 return [player1 , player2];
}
