let players = [];

fetch('players.json')
    .then(res => res.json())
    .then(data => {
        players = data;
        displayPlayers(players);
    });

const container = document.getElementById('playerContainer');
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    const filtered = players.filter(p => p.name.toLowerCase().includes(value));
    displayPlayers(filtered);
});

function displayPlayers(list) {
  const container = document.getElementById("playerContainer");
  container.innerHTML = list.map(player => `
    <div class="player-card shadow-sm">
      <div class="player-header">
        <h3 class="player-name">${player.name}</h3>
      </div>
      <div class="player-stats">
        <p><strong>PTS:</strong> ${player.points_per_game}</p>
        <p><strong>REB:</strong> ${player.rebounds_per_game}</p>
        <p><strong>AST:</strong> ${player.assists_per_game}</p>
        <p><strong>WS:</strong> ${player.win_shares}</p>
      </div>
    </div>
  `).join('');
}
