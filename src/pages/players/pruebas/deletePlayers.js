export function deletePlayer(players, name) {
    return players.filter(player => player.name !== name);
   }
   