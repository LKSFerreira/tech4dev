import { getGitHubUser } from "../services/apiGitHub.js";

const apiUrl = "../data/developers.json";

const headers = {
  "X-Master-Key":
    "$2a$10$PPyqs.BlmV6IA0Ih5ZG4WetjD0k/p380F918wD8Fwj8rE1WVwH.7m",
  "X-Access-Key":
    "$2a$10$YEgyJrRsyJBtWbP/o5xvHOw25iMJ0Di853oA7RayZz65OmBCvnsZi",
};

const options = {
  method: "GET",
  headers: headers,
};

window.addEventListener("DOMContentLoaded", function () {
  const containerDevs = document.querySelector(".container-devs");
  const spinner = document.querySelector('.spinner');

  spinner.style.display = 'block'

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {

      console.log(data);

      data.forEach(async (localProfile) => {

        const githubProfile = await getGitHubUser(localProfile.github);


        console.log(githubProfile);

        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
        <div class="container-photo-bio">
        
          <div class="photo-perfil">
            <figure>
              <img src="${githubProfile.avatar_url}" alt="${localProfile.name}" />
            </figure>
          </div>

          <div class="bio-devs">
            <h3 class="name-dev">${localProfile.name}</h3>
            <h4 class="cargo-dev">${localProfile.role}</h4>
            <p class="bio-dev">${githubProfile.bio}</p>
          </div>

        </div>

          <div class="btn-goProfile">
            <a href="${githubProfile.url}" target="_blank">
              <button>GitHub</button>
            </a>
            <a href="${localProfile.linkedin}" target="_blank">
              <button>LinkedIn</button>
            </a>
          </div>
        `;
        containerDevs.appendChild(card);
        spinner.style.display = 'none'
      });
    })
    .catch((error) => console.error("Erro ao obter dados:", error));
});
