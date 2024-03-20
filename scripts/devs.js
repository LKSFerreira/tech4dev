

window.addEventListener("DOMContentLoaded", function () {
  const containerDevs = document.querySelector(".container-devs");

  fetch('../data/dataDevelopers.json')
    .then(response => response.json())
    .then(data => {
      data.forEach((developer) => {
        const card = document.createElement("article");
        card.classList.add("card");
    
        card.innerHTML = `
          <div class="photo-perfil">
            <figure>
              <img src="${developer.photo}" alt="${developer.name}" />
            </figure>
          </div>
          <div class="bio-devs">
            <h3 class="name-dev">${developer.name}</h3>
            <h4 class="cargo-dev">${developer.role}</h4>
            <p class="bio-dev">${developer.bio}</p>
          </div>
          <div class="btn-goProfile">
            <a href="${developer.linkedin}" target="_blank">
              <button>Perfil</button>
            </a>
          </div>
        `;
        containerDevs.appendChild(card);
      });
    })
    .catch(error => console.error('Erro ao obter dados:', error));
});