
const players = [
    {
        name: "Lionel Messi",
        rating: 104,
        position: "SS",
        club: "Inter Miami",
        type: "Epic",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lionel_Messi_20180626.jpg"
    },
    {
        name: "Kylian Mbappe",
        rating: 102,
        position: "CF",
        club: "Real Madrid",
        type: "Big Time",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kylian_Mbapp%C3%A9_2019.jpg"
    },
    {
        name: "Erling Haaland",
        rating: 101,
        position: "CF",
        club: "Manchester City",
        type: "Show Time",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Erling_Haaland_2023.jpg"
    },
    {
        name: "Lamine Yamal",
        rating: 100,
        position: "RWF",
        club: "Barcelona",
        type: "Epic",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamine_Yamal_2024.jpg"
    },
    {
        name: "Phil Foden",
        rating: 98,
        position: "AMF",
        club: "Manchester City",
        type: "Highlight",
        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Phil_Foden_2021.jpg"
    }
];

const managers = [
    {name: "Antonio Conte", style: "Out Wide", rating: 88},
    {name: "Jürgen Klopp", style: "Quick Counter", rating: 89},
    {name: "José Mourinho", style: "Long Ball Counter", rating: 87},
    {name: "Pep Guardiola", style: "Possession Game", rating: 90}
];

const packs = [
    {name: "Epic Legends", detail: "Legendary player cards"},
    {name: "Show Time", detail: "Special featured players"},
    {name: "Big Time", detail: "Historic football moments"},
    {name: "POTW", detail: "Players of the Week"}
];

const updates = [
    "New featured players",
    "New manager cards",
    "Updated player ratings",
    "New player packs"
];

function displayPlayers(list) {
    const grid = document.getElementById("playerGrid");

    grid.innerHTML = "";

    list.forEach(player => {
        grid.innerHTML += `
            <div class="player-card">
                <img src="${player.image}"
                     alt="${player.name}"
                     loading="lazy">
                <div class="player-info">
                    <div class="rating">${player.rating} OVR</div>
                    <h3>${player.name}</h3>
                    <p>${player.position} | ${player.club}</p>
                    <p>${player.type}</p>
                </div>
            </div>
        `;
    });
}

function filterPlayers(type) {
    const filtered = type === "All"
        ? players
        : players.filter(player => player.type === type);

    displayPlayers(filtered);
}

document.getElementById("search").addEventListener("input", event => {
    const query = event.target.value.toLowerCase();

    const filtered = players.filter(player =>
        player.name.toLowerCase().includes(query) ||
        player.club.toLowerCase().includes(query) ||
        player.position.toLowerCase().includes(query)
    );

    displayPlayers(filtered);
});

function displayManagers() {
    document.getElementById("managerGrid").innerHTML =
        managers.map(manager => `
            <div class="player-card">
                <div class="player-info">
                    <div class="rating">${manager.rating} OVR</div>
                    <h3>${manager.name}</h3>
                    <p>Playstyle: ${manager.style}</p>
                </div>
            </div>
        `).join("");
}

function displayPacks() {
    document.getElementById("packGrid").innerHTML =
        packs.map(pack => `
            <div class="pack">
                <h3>${pack.name}</h3>
                <p>${pack.detail}</p>
            </div>
        `).join("");
}

function displayUpdates() {
    document.getElementById("updatesList").innerHTML =
        updates.map(update => `
            <div class="update">${update}</div>
        `).join("");
}

displayPlayers(players);
displayManagers();
displayPacks();
displayUpdates();
