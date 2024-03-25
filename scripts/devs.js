

const apiUrl = 'https://api.jsonbin.io/v3/b/65fb59f11f5677401f4077e5';

const headers = {
  'X-Master-Key': '$2a$10$PPyqs.BlmV6IA0Ih5ZG4WetjD0k/p380F918wD8Fwj8rE1WVwH.7m',
  'X-Access-Key': '$2a$10$YEgyJrRsyJBtWbP/o5xvHOw25iMJ0Di853oA7RayZz65OmBCvnsZi'
};

const options = {
  method: 'GET',
  headers: headers
};



window.addEventListener("DOMContentLoaded", function () {
  const containerDevs = document.querySelector(".container-devs");

  fetch(apiUrl, options)
  .then(response => response.json())
    .then(data => {
      console.log(data.record)
      data.record.forEach((developer) => {
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

