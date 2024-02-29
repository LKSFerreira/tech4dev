const developersData = [
    {
      name: "Willian Borges 01",
      role: "Desenvolvedor Front-End",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque HTML rerum vel JavaScript delectus, pariatur, CSS esse commodi ReactJS nostrum excepturi libero, earum accusantium dolorum autem sunt facere cupiditate ratione nisi tempora eos!",
      linkedin: "https://www.linkedin.com/in/willian-borges-60b7b068/",
      photo:
        "https://media.licdn.com/dms/image/D4D03AQHjxJJ369-4-Q/profile-displayphoto-shrink_800_800/0/1671407578485?e=1714003200&v=beta&t=0Nkvgs17zHkKz9kVWa_xGd-8j3IUonvxm0mr_XxDlVw",
    },
    {
      name: "Willian Borges 02",
      role: "Desenvolvedor Front-End",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque HTML rerum vel JavaScript delectus, pariatur, CSS esse commodi ReactJS nostrum excepturi libero, earum accusantium dolorum autem sunt facere cupiditate ratione nisi tempora eos!",
      linkedin: "https://www.linkedin.com/in/willian-borges-60b7b068/",
      photo:
        "https://media.licdn.com/dms/image/D4D03AQHjxJJ369-4-Q/profile-displayphoto-shrink_800_800/0/1671407578485?e=1714003200&v=beta&t=0Nkvgs17zHkKz9kVWa_xGd-8j3IUonvxm0mr_XxDlVw",
    },
    {
      name: "Willian Borges 03",
      role: "Desenvolvedor Front-End",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque HTML rerum vel JavaScript delectus, pariatur, CSS esse commodi ReactJS nostrum excepturi libero, earum accusantium dolorum autem sunt facere cupiditate ratione nisi tempora eos!",
      linkedin: "https://www.linkedin.com/in/willian-borges-60b7b068/",
      photo:
        "https://media.licdn.com/dms/image/D4D03AQHjxJJ369-4-Q/profile-displayphoto-shrink_800_800/0/1671407578485?e=1714003200&v=beta&t=0Nkvgs17zHkKz9kVWa_xGd-8j3IUonvxm0mr_XxDlVw",
    },
    {
      name: "Willian Borges 04",
      role: "Desenvolvedor Front-End",
      bio:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque HTML rerum vel JavaScript delectus, pariatur, CSS esse commodi ReactJS nostrum excepturi libero, earum accusantium dolorum autem sunt facere cupiditate ratione nisi tempora eos!",
      linkedin: "https://www.linkedin.com/in/willian-borges-60b7b068/",
      photo:
        "https://media.licdn.com/dms/image/D4D03AQHjxJJ369-4-Q/profile-displayphoto-shrink_800_800/0/1671407578485?e=1714003200&v=beta&t=0Nkvgs17zHkKz9kVWa_xGd-8j3IUonvxm0mr_XxDlVw",
    },
    // Adicione mais desenvolvedores, se necessário
  ];



window.addEventListener("DOMContentLoaded", function () {
    const containerDevs = document.querySelector(".container-devs");
  
    developersData.forEach((developer) => {
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
        containerDevs.appendChild(card)
    });
  });