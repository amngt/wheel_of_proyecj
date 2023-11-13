export function handleSubsequentRounds(players, selectFirstRoundPlayers, deletePlayer) {
    while (players.length > 1) {
    const [player1 , player2] = selectFirstRoundPlayers(players);
    const winner = initDuels(player1 , player2);
    players = deletePlayer(players, winner.name);
    }
   }
   