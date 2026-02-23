// Cache object to minimize API calls
const cache = {};

let currentPokemon = null;

const findBtn = document.getElementById("findBtn");
const addBtn = document.getElementById("addBtn");

findBtn.addEventListener("click", fetchPokemon);
addBtn.addEventListener("click", addToTeam);

function fetchPokemon() {
    const input = document.getElementById("pokemonInput").value
        .toLowerCase()
        .trim();

    if (!input) return;

    // If we already fetched it before, use cached version
    if (cache[input]) {
        displayPokemon(cache[input]);
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokemon not found");
            }
            return response.json();
        })
        .then(data => {
            cache[input] = data;   // Save to cache
            displayPokemon(data);
        })
        .catch(error => alert(error.message));
}

function displayPokemon(data) {
    currentPokemon = data;

    const img = document.getElementById("pokemonImage");
    img.src = data.sprites.front_default;

    // Remove glitch effect after first successful search
    img.classList.remove("glitch");

    const cry = document.getElementById("pokemonCry");
    if (data.cries && data.cries.latest) {
        cry.src = data.cries.latest;
    } else {
        cry.src = "";
    }

    const moves = data.moves.map(m => m.move.name);

    populateDropdown("move1", moves);
    populateDropdown("move2", moves);
    populateDropdown("move3", moves);
    populateDropdown("move4", moves);
}

function populateDropdown(id, moves) {
    const select = document.getElementById(id);
    select.innerHTML = "";

    moves.forEach(move => {
        const option = document.createElement("option");
        option.value = move;
        option.textContent = move;
        select.appendChild(option);
    });
}

function addToTeam() {
    if (!currentPokemon) return;

    const teamContainer = document.getElementById("teamContainer");

    const memberDiv = document.createElement("div");
    memberDiv.className = "team-member";

    const img = document.createElement("img");
    img.src = currentPokemon.sprites.front_default;
    img.style.height = "100px";

    const moveList = document.createElement("ul");

    const selectedMoves = [
        document.getElementById("move1").value,
        document.getElementById("move2").value,
        document.getElementById("move3").value,
        document.getElementById("move4").value
    ];

    selectedMoves.forEach(move => {
        const li = document.createElement("li");
        li.textContent = move;
        moveList.appendChild(li);
    });

    memberDiv.appendChild(img);
    memberDiv.appendChild(moveList);

    teamContainer.appendChild(memberDiv);
}