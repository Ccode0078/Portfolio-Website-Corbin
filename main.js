// Toggle menu icons
const menu = document.querySelector(".menu")
const navContents = document.querySelector("#nav_contents")
menu.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const home = document.querySelector("#home_link");
home.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const about = document.querySelector("#about_link");
about.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const servicesLink = document.querySelector("#services_link");
servicesLink.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const projectsLink = document.querySelector("#projects_link");
projectsLink.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});

const contact = document.querySelector("#contact_link");
contact.addEventListener("click", () => {
  navContents.classList.toggle("toggle");
});
// Fetch and render services section
const services = document.querySelector("#services .contents");
const renderServices = async () => {
  try {
    const data = await fetch("data/services.json");
    const response = await data.json();
    let item = "";
    for (let i = 0; i < response.length; i++) {
      item += `
          <div class="card">
            <h3>${response[i].title}</h3>
            <p class="subtitle">${response[i].subtitle}</p>
            <p class="description">
              ${response[i].description}
           </p>
          </div>`;
    }
    services.innerHTML = item;
  } catch (error) {
    console.log("services error ===>>>", error);
  }
};
window.addEventListener("load", () => {
  renderServices();
});


[
  {
    title: "Skills",
    subtitle: "Software Development utilities",
    description: "Fast learner / Communication / Adaptability / Docker / Git / Python / PostgresSQL / DevOps / Customer Service / Django/ Flask / Team building / HTML / CSS / Javascript"
  },
];
// Fetch and render projects section
const projects = document.querySelector("#projects .contents");
const renderProjects = async () => {
  try {
    const data = await fetch("data/projects.json");
    const response = await data.json();
    let item = "";
    for (let i = 0; i < response.length; i++) {
      item += `
          <div class="product">
           <img src=${response[i].thumbnail_url} alt=${response[i].name} />
           <div class="text">
            <h3>${response[i].name}</h3>
            <a target="blank" href=${response[i].hoster_url} >View code on ${response[i].hoster}</a>
            <a target="blank" href=${response[i].demo_url} ></a>
           </div>
          </div>`;
    }
    projects.innerHTML = item;
  } catch (error) {
    console.log("projects error ===>>>", error);
  }
};

window.addEventListener("load", () => {
  renderProjects();
});

[
  {
    hoster: "Github",
    name: "Guess that Number Algorithim",
    hoster_url: "https://github.com/Ccode0078/Guess-that-Number-Algorithim",
    thumbnail_url:
      "https://raw.githubusercontent.com/Ccode0078/public-images/main/guess%20that%20number%20photo.jpg",
  },

  {
    hoster: "Github",
    name: "Donate Me Account",
    hoster_url: "https://github.com/Ccode0078/Donation-account/tree/main/workshop3",
    thumbnail_url:
      "https://raw.githubusercontent.com/Ccode0078/public-images/main/Donate%20me%20picture.jpeg",
  },

  {
    hoster: "Github",
    name: "Battlefield",
    hoster_url: "https://github.com/Ccode0078/Battlefield",
    thumbnail_url:
      "https://raw.githubusercontent.com/Ccode0078/public-images/main/swords-publicdomainvectors.png",
  },
];

