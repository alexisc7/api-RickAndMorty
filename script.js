function getPersonaje(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results.then(response => response.json())
           .then(data => {
                done(data)
            });
    }

getPersonaje(data => {
    data.results.forEach(personaje => {
        const section = document.createRange().createContextualFragment(`
        <section>
        
            <div class="img-container">
                <img src="${personaje.image}" alt="Personaje">
            </div>

            <h2>${personaje.name}</h2>
            <p><b>Status:</b> ${personaje.status}</p>
            <p><b>Species:</b> ${personaje.species}</p>
            <p><b>Gender:</b> ${personaje.gender}</p>
            <p><b>origin:</b> ${personaje.origin.name}</p>

        </section>
        `);

        const main = document.getElementById("principal");
        main.append(section);
    })
});