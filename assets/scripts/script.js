document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("characters-container");

    fetch('assets/scripts/characters.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(character => {
            const card = document.createElement("div");
            card.className = "character-card";

            const img = document.createElement("img");
            img.src = character.imagen;
            img.alt = character.nombre;

            const name = document.createElement("h2");
            name.textContent = character.nombre;

            const house = document.createElement("p");
            house.textContent = `Casa: ${character.casa}`;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(house);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });
});